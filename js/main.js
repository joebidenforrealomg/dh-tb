// import { search } from 'search.js';

const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
let newApps = 0;
let sections = [];
let sectionCount = {};

document.head.appendChild(altCSS);

async function openWindow(url, title, icon, code, removeCurrent) {
  if (code == false || code == undefined)  {
    var blank = window.open();
    var link = blank.document.createElement('link');
    var style = blank.document.createElement('style');
  
    link.rel = "shortcut icon";
    link.href = icon || "";
    style.innerHTML = `body { width: 100vw;height: 100vh;margin: 0; background: black; } iframe { width: 100vw;height: 100vh;border: none;outline: none;margin: 0;} p { cursor: pointer;font-family: monospace;position: fixed;z-index: 2;padding: 8px;left: 0;transform: translateX(-50%);transition: 0.2s ease;opacity: 0.5;background: black;border: 2px solid lime;color: lime;} p:hover { left: 8px;transform: translateX(0);opacity: 1;}`;
    blank.document.title = title || "New Tab";
    var iframe = blank.document.createElement('iframe');
    iframe.src = `${url}`;
    blank.document.head.appendChild(style);
    blank.document.head.appendChild(link);
    blank.document.body.appendChild(iframe);
  } else {
    const html = (await (await fetch(url)).text());
    let doc = new DOMParser().parseFromString(html, 'text/html');

    const pageTitle = title || doc.title || "Default Title";
    var blank = window.open();

    // Wait for the blank window to load and write the basic HTML structure
    blank.document.write('<!DOCTYPE html><html><head><title>' + pageTitle + '</title></head><body></body></html>');

    // Now that the document is written, we can safely manipulate its contents
    blank.document.close();  // Necessary to allow further manipulations
    blank.document.head.innerHTML = doc.head.innerHTML;
    blank.document.body.innerHTML = doc.body.innerHTML;

    const scripts = doc.querySelectorAll('script');
    scripts.forEach(script => {
        let newScript = blank.document.createElement('script');
        newScript.textContent = script.textContent;
        blank.document.body.appendChild(newScript);
    });
  }

  if (removeCurrent == true) {
    window.location.replace("https://google.com");
  }
}

function openSite(url) {
  if (document.getElementById("appDiv")) {
    document.getElementById("appDiv").remove();
  }

  var appDiv = document.createElement('div');
  var closeButton = document.createElement('p');
  var iframe = document.createElement('iframe');

  appDiv.id = "appDiv";
  closeButton.innerText = "BACK";
  closeButton.className = "appClose";
  iframe.src = url;
  iframe.className = "appIframe";

  closeButton.addEventListener('click', function () {
    if (confirm("Are you sure you want to close this app?") === true) {
      document.getElementById("main").style.display = "block";
      appDiv.remove();
    }
  });

  appDiv.appendChild(iframe);
  appDiv.appendChild(closeButton);
  document.body.appendChild(appDiv);
  document.getElementById("main").style.display = "none";

  // setTimeout(function () {
  //   unlockAchievement("wow you opened a game");
  // }, 1500);
}

/* function searchApp(name) {
  var foundApps = [];
  if (name !== "") {
    // appsDiv.innerHTML = "";
    altCSS.innerHTML = `.appsButton { display: none; animation: none; } .foundApp { display: block !important; }`;
    document.querySelectorAll(".foundApp").forEach((app) => {
      app.classList.remove("foundApp");
    });
    apps.forEach(function (app) {
      if (app.Hidden === true) { return; }
      if (app.Genres) { app.Genres.forEach(function(e){ e.toLowerCase() }); }
      if (app.Name.toLowerCase().includes(name.toLowerCase()) 
        || (app.Genres && app.Genres.includes(name.toLowerCase()))
      ) {
        foundApps.push(app);
      }
    });
    foundApps.sort();
    foundApps.forEach(function(app) {
      if (app.Hidden === true) {
        return;
      }

      const button = document.getElementById(appID(app));
      button.classList.add("foundApp");
    });

    if (name !== "") {
      if (results == 1) {
        resultsText.innerHTML = `${foundApps.length} result for '${name}'`;
      } else {
        resultsText.innerHTML = `${foundApps.length} results for '${name}'`;
      }
    } else {
      resultsText.innerHTML = "";
    }
  } else {
    altCSS.innerHTML = `.appsButton { display: block; animation: none; }`;
    apps.forEach(createApps);
    resultsText.innerHTML = "";
  }
} */


function notify(info) {
  info.Text = info.Text || "No text for notification.";
  info.ShowTime = info.ShowTime || 3000;

  const p = document.createElement("p");
  p.classList.add("notification");
  p.innerHTML = info.Text;

  document.getElementById("notifications").appendChild(p);

  setTimeout(function () {
    p.style.animation = "notificationFadeOut 0.5s ease";
    setTimeout(function () { p.remove() }, 500);
  }, info.ShowTime);
}

function unlockAchievement(text) {
  notify({
    Text: `Achievement Unlock<br>${text}`,
    ShowTime: 5000,
  });
}

function handleSearch(e) {
  e.preventDefault();
  searchApp(searchInput.value);
}

searchForm.addEventListener("submit", handleSearch);
searchForm.addEventListener("input", handleSearch);
clear.addEventListener("click", function () {
  searchInput.value = "";
  searchApp();
});
apps.forEach(createApps);
sortApps();
if (localStorage.getItem("favorites")) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  favorites.forEach(function (item) {
    createApp(item, true);
  });
}

sections.forEach(function(section) {
  if (sectionCount[section] && sectionCount[section] < 1) {
    document.querySelectorAll(`.${section}Section`).forEach(function(obj) {
      obj.style.display = "none";
    });
  }
});

function InIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function notInAFrame() {
  let params = new URL(document.location).searchParams;
  let iframe = params.get("iframe");
  if ((iframe !== "true" || iframe === null || iframe === undefined) && InIframe() == false) {
    document.body.innerHTML = "";
    const main = document.createElement("main");
    main.id = "main";
    document.body.appendChild(main);

    const apps = document.createElement('div');
    apps.className = "apps";
    apps.id = "apps";

    const app = document.createElement('button');
    app.onclick = function () {
      openWindow(`${window.location.href}?iframe=true`);
      window.location.replace("https://google.com");
    };
    app.title = "Click to open";
    app.innerText = "Open";

    apps.appendChild(app);
    document.getElementById("main").appendChild(apps);
  } else {
    window.addEventListener('beforeunload', (event) => {
      event.returnValue = "Are you sure you want to leave?";
    });
    document.addEventListener('contextmenu', function(e) {
      toggleContextMenu(e);
      e.preventDefault();
    }, false);
  }
}

if (InIframe() == false) {
  notInAFrame();
}
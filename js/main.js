const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
const appSizesSelect = document.getElementById("appSizes");
let newApps = 0;
let sections = [];
let sectionCount = {};
let currentAppSize = "default";

document.head.appendChild(altCSS);

async function openWindow(url, title, icon, code, removeCurrent) {
  if (code == false || code == undefined) {
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

  let appDiv = document.createElement('div');
  let closeButton = document.createElement('button');
  let timerButton = document.createElement('button');
  let iframe = document.createElement('iframe');

  appDiv.id = "appDiv";
  closeButton.innerText = "BACK";
  closeButton.className = "appClose";
  timerButton.innerText = "Timer";
  timerButton.className = "speedrunTimerButton";
  iframe.src = url;
  iframe.className = "appIframe";

  closeButton.addEventListener('click', function () {
    if (confirm("Are you sure you want to close this app?") === true) {
      document.getElementById("main").style.display = "block";
      appDiv.remove();
      closeSpeedrunTimer();
    }
  });

  timerButton.addEventListener('click', function () {
    toggleSpeedrunTimer();
  });

  appDiv.appendChild(iframe);
  appDiv.appendChild(closeButton);
  appDiv.appendChild(timerButton);
  document.body.appendChild(appDiv);
  document.getElementById("main").style.display = "none";

  // setTimeout(function () {
  //   unlockAchievement("wow you opened a game");
  // }, 1500);
}

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
    document.addEventListener('contextmenu', function (e) {
      toggleContextMenu(e);
      e.preventDefault();
    }, false);
  }
}

function changeAppSize() {
  apps.classList.remove(currentAppSize);
  apps.classList.add(appSizesSelect.value);
  currentAppSize = appSizesSelect.value
}

if (InIframe() == false) {
  notInAFrame();
}

if (localStorage.getItem("favorites")) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  favorites.forEach(function (item) {
    createApp(item, true);
  });
}

sections.forEach(function (section) {
  if (sectionCount[section] && sectionCount[section] < 1) {
    document.querySelectorAll(`.${section}Section`).forEach(function (obj) {
      obj.style.display = "none";
    });
  }
});

appSizesSelect.addEventListener("change", function () {
  if (appSizesSelect.value != currentAppSize) {
    changeAppSize();
  }
});
clear.addEventListener("click", function () {
  searchInput.value = "";
  searchApp();
});
searchForm.addEventListener("submit", handleSearch);
searchForm.addEventListener("input", handleSearch);
apps.forEach(createApps);
sortApps();
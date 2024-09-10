const altCSS = document.createElement("style");
const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
const apps = ["1v1.LOL", "2048", "Aquapark", "Angry Birds", "Bad Piggies",
    "Bitlife", "Blackjack", "BloonsTD", "Bloxorz", "ButterDog Chat", "CookieClicker", "CrossyRoad",
    "DonkeyKong", "DOOM", "DuckHunt", "Ducklife_1", "Ducklife_2", "Ducklife_3", "ElectricMan 2",
    "FNAF_1", "FNAF_2", "FNAF_3", "FNAF_4", "FNAW", "GoogleDino", "GoogleSnake", "House of Horers Simulator", "Impossible Quiz", "Jacksmith",
    "Learn 2 Fly", "Minecraft_1.8.8", "MotoX3M", "MotoX3M 2", "Minesweeper", "Pacman", "PappaPizza", "wolfen",
    "Pong", "RetroBowl", "Run_1", "Run_3", "Robux Generator Clicker", "RiddleSchool", "Slope_1", "Slope_Ass", "StickmanHook", "SuperMario 63",
    "SuperMario 64", "SoobwaySurfers", "Tetris", "Worlds Hardest Game_1", "Worlds Hardest Game_2", "Wordle", "yohoho.io"];
apps.sort();

document.head.appendChild(altCSS);

function elementVisible(elem) {
  return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

function openWindow(url, title, icon) {
  var blank = window.open();
  var link = blank.document.createElement('link');
  var style = blank.document.createElement('style');
  var iframe = blank.document.createElement('iframe');
  
  link.rel = "shortcut icon";
  link.href = icon || "";
  style.innerHTML = `body { width: 100vw;height: 100vh;margin: 0; background: black; } iframe { width: 100vw;height: 100vh;border: none;outline: none;margin: 0;} p { cursor: pointer;font-family: monospace;position: fixed;z-index: 2;padding: 8px;left: 0;transform: translateX(-50%);transition: 0.2s ease;opacity: 0.5;background: black;border: 2px solid lime;color: lime;} p:hover { left: 8px;transform: translateX(0);opacity: 1;}`;
  iframe.src = `${url}`;
  blank.document.title = title || "New Tab";
  
  blank.document.head.appendChild(style);
  blank.document.head.appendChild(link);
  blank.document.body.appendChild(iframe);
  
  window.location.replace("https://google.com");
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
  
  closeButton.addEventListener('click', function() {
    if (confirm("Are you sure you want to close this app?") === true) {
      document.getElementById("main").style.display = "block";
      appDiv.remove();
    }
  });

  appDiv.appendChild(iframe);
  appDiv.appendChild(closeButton);
  document.body.appendChild(appDiv);
  document.getElementById("main").style.display = "none";
}

function searchApp(name) {
  var foundApps = [];
  var results = 0;
  // appsDiv.innerHTML = "";
  if (name !== "") {
    altCSS.innerHTML = `.appsButton { display: none; animation: none; }`;
    document.querySelectorAll(".appsButton").forEach((app) => {
      app.style = "";
    });
    apps.forEach(function (app, i) {
      if (app.toLowerCase().replaceAll("_", " ").includes(name.toLowerCase())) {
        foundApps.push(app);
        results++;
      }
    });
    foundApps.sort();
    foundApps.forEach(createApps);
    if (name !== "") {
      if (results == 1) {
        resultsText.innerHTML = `${results} result for '${name}'`;
      } else {
        resultsText.innerHTML = `${results} results for '${name}'`;
      }
    } else {
      resultsText.innerHTML = "";
    }
  } else {
    altCSS.innerHTML = `.appsButton { display: block; animation: none; }`;
    apps.forEach(createApps);
    resultsText.innerHTML = "";
  }
}

function createApp(name, hint, url) {
  if (!document.getElementById(`appButton${name}`)) {
    const b = document.createElement("button");
    const p = document.createElement("p");
    const img = document.createElement("img");
    b.id = `appButton${name}`;
    b.className = "appsButton";
    p.innerText = name;
    b.title = hint;
    b.onclick = function () {
      openSite(`${url}`);
    };
    b.appendChild(p);
    b.appendChild(img);
    document.getElementById("apps").appendChild(b);
    
    img.onload = function() {
      img.style.opacity = 1;
    };
    
    img.onerror = function() {
      if (img.src.includes(".png")) {
        img.src = `${url}/../thumbnail.jpg`;
      } else if (img.src.includes(".jpg")) {
        img.src = `${url}/../thumbnail.jpeg`;
      } else if (img.src.includes(".jpeg")) {
        img.src = `${url}/../thumbnail.webp`;
      } else {
        img.src = "https://img.freepik.com/premium-photo/digital-black-green-squares_161488-652.jpg";
      }
    };
    img.src = `${url}/../thumbnail.png`;
  }
}

function createApps(app, i) {
  if (!document.getElementById(`appButton${app}`)) {
    if (app.includes("_")) {
      var a = app.split("_");
      createApp(a[0] + " " + a[1], "Play " + a[0] + " " + a[1], "https://joebidenrealomg.github.io/da-hub/apps/" + a[0] + "/" + a[1] + "/index.html");
    } else {
      createApp(app, "Play " + app, "https://joebidenrealomg.github.io/da-hub/apps/" + app + "/index.html", i);
    }
  } else {
    document.getElementById(`appButton${app}`).style.animation = "";
    document.getElementById(`appButton${app}`).style.display = "block";
    document.getElementById(`appButton${app}`).style.animation = "fadeIn 0.2s ease";
  }
}

function handleSearch(e) {
  e.preventDefault();
  searchApp(searchInput.value);
}

searchForm.addEventListener("submit", handleSearch);
searchForm.addEventListener("input", handleSearch);
clear.addEventListener("click", function() {
  searchInput.value = "";
  searchApp();
});
apps.forEach(createApps);

function InIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function whenNotIframe() {
  let params = new URL(document.location).searchParams;
  let iframe = params.get("iframe");
  if (iframe !== "true" || iframe === null || iframe === undefined) {
    document.body.innerHTML = "";

    const main = document.createElement("main");
    main.id = "main";
    document.body.appendChild(main);

    const apps = document.createElement('div');
    apps.className = "apps";
    apps.id = "apps";

    const app = document.createElement('button');
    app.onclick = function() {
      openWindow("https://joebidenrealomg.github.io/da-hub/index.html?iframe=true");
      window.location.replace("https://google.com");
    };
    app.title = "Click to open";
    app.innerText = "Open";

    apps.appendChild(app);
    document.getElementById("main").appendChild(apps);
  }
}

if (!InIframe()) {
    whenNotIframe();
}
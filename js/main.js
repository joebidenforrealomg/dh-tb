const altCSS = document.createElement("style");
const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
let newApps = 0;
/* const apps = ["1v1.LOL", "2048", "Aquapark", "Angry Birds", "Bad Piggies", "Basketball Stars",
    "Bitlife", "Blackjack", "BloonsTD", "Bloxorz", "CookieClicker", "CrossyRoad",
    "DonkeyKong", "DOOM", "DuckHunt", "Ducklife_1", "Ducklife_2", "Ducklife_3", "ElectricMan 2", "FruitNinja",
    "FNAF_1", "FNAF_2", "FNAF_3", "FNAF_4", "FNAW", "GoogleSnake", "House of Horers Simulator", "Impossible Quiz", "Jacksmith",
    "Learn 2 Fly", "Minecraft_1.8.8", "MotoX3M", "MotoX3M 2", "Minesweeper", "Pacman", "PapaPizza", "wolfen",
    "Pong", "RetroBowl", "Run_1", "Run_3", "Robux Generator Clicker", "RiddleSchool_1", "RiddleSchool_2", "RiddleSchool_3",
     "Slope_1", "Slope_Ass", "StickmanHook", "SuperMario 63", "SuperMario 64", "SoobwaySurfers", "Tetris", 
     "Vex_3" ,"Worlds Hardest Game_1", "Worlds Hardest Game_2", "Wordle", "yohoho.io"]; 
apps.sort(); */

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
  if (name !== "") {
    // appsDiv.innerHTML = "";
    altCSS.innerHTML = `.appsButton { display: none; animation: none; } .foundApp { display: block !important; }`;
    document.querySelectorAll(".foundApp").forEach((app) => {
      app.classList.remove("foundApp");
    });
    apps.forEach(function (app) {
      if (app.Name.toLowerCase().includes(name.toLowerCase())) {
        foundApps.push(app);
      }
    });
    foundApps.sort();
    foundApps.forEach(function(app) {
      if (app.Hidden === true) {
        return;
      }

      const button = document.getElementById(`appButton${app.Name}`);
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
}

function createApp(info, location, app) {
  if (!document.getElementById(`appButton${info.name}`)) {
    const b = document.createElement("button");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const overlay = document.createElement("div");
    const tags = document.createElement("div");
    // const fav = document.createElement("img");
    b.id = `appButton${info.name}`;
    b.className = "appsButton";
    b.title = info.hint;
    img.onclick = function () {
      openSite(`${info.url}`);
    };

    p.innerText = info.name;
    p.classList.add("appName");

    overlay.classList.add("overlay");
    b.appendChild(overlay);

    tags.classList.add("tags");
    overlay.appendChild(tags);

    // fav.classList.add("favorite");
    // fav.src = "img/icons/star_hollow.svg";
    // overlay.appendChild(fav);
    // fav.onclick = function() {
    //   try {
    //     alert("setting favorite to " + !isFavorite(app));
    //   setFavorite(app, !isFavorite(app));
    //   } catch (err) {
    //     alert(err);
    //   }
    // }
    
    if (info.added) {
      const newP = document.createElement("p");
      newP.innerText = "NEW";
      newP.classList.add("new");
      newP.title = "This app was recently added (within the last 7 days)";
      tags.appendChild(newP);
      newApps++;
    }

    if (info.broken) {
      const newP = document.createElement("p");
      newP.innerText = "!";
      newP.classList.add("broken");
      newP.title = "This app may not work at the moment, we'll fix it soon.";
      tags.appendChild(newP);
    }

    if (info.fixed) {
      const newP = document.createElement("p");
      newP.innerText = "FIXED";
      newP.classList.add("fixed");
      newP.title = "This app was recently fixed.";
      tags.appendChild(newP);
      newApps++;
    }
    
    b.appendChild(p);
    b.appendChild(img);
    if (info.newlyUpdated) {
      document.getElementById("newApps").appendChild(b);
    } else {
      document.getElementById("apps").appendChild(b);
      // location.appendChild(b);
    }
    
    img.onload = function() {
      img.style.opacity = 1;
    };
    
    img.onerror = function() {
      img.src = "https://img.freepik.com/premium-photo/digital-black-green-squares_161488-652.jpg";
    };
    img.src = `${info.url}/../${info.thumbnail || "thumbnail.png"}`;
    img.classList.add("thumbnail");
  }
}

function isNew(added, days) {
  days = days || 7;
  let newlyAdded = false;
  let currentDate = new Date();
  let utc1 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  let utc2 = Date.UTC(added.getFullYear(), added.getMonth(), added.getDate());
  let timeDiff = Math.abs(utc2 - utc1);
  let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  if (daysDiff <= days) {
    newlyAdded = true;
  }
  return newlyAdded;
}

function createApps(app, favorite) {
  if (app.Hidden) {
    return;
  } else {
    app.Hidden = false;
  }

  app.Name = app.Name || "No Name";
  app.Folder = app.Folder || app.Name;
  app.Index = app.Index || "index.html";
  app.Thumbnail = app.Thumbnail || "";
  app.Broken = app.Broken || false;
  app.Fixed = app.Fixed || new Date("January 1, 2020");
  app.Added = app.Added || new Date("January 1, 2020");
  let newlyUpdated = false;
  if (isNew(app.Added, 7) === true || isNew(app.Fixed, 7) === true) {
    newlyUpdated = true;
  }
  app.Added = isNew(app.Added);
  app.Fixed = isNew(app.Fixed);

  if (!document.getElementById(`appButton${app}`)) {
    let info = {
      name:app.Name,
      hint:"Play " + app.Name,
      url:"apps/" + app.Folder + "/" + app.Index,
      thumbnail:app.Thumbnail,
      newlyUpdated:newlyUpdated,
      broken:app.Broken,
      fixed:app.Fixed,
      added:app.Added
    }

    if (favorite) {
      createApp(info, document.getElementById("favorites"), app);
    } else {
      createApp(info, document.getElementById("apps"), app);
    }
  } else {
    document.getElementById(`appButton${app}`).style.animation = "";
    document.getElementById(`appButton${app}`).style.display = "block";
    document.getElementById(`appButton${app}`).style.animation = "fadeIn 0.2s ease";
  }
}

function getFavorites() {
  let favorites;
  if (localStorage.getItem("favorites")) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else {
    favorites = [];
  }
  return favorites;
}

function isFavorite(app) {
  let favorites = getFavorites();
  try {
    return Boolean(favorites.indexOf(app));
  } catch (e) {
    return false;
  }
}

function setFavorite(app, makeFavorite) {
  if (!makeFavorite) {
    createApps(app, true);
    let favorites = getFavorites();
    favorites.push(app);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    const thing = document.querySelector(`#favorite button#appButton${app.Name}`);
    thing.remove();
    let favorites = getFavorites();
    favorites.splice(favorites.indexOf(app), 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
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
if (newApps < 1) {
  document.getElementById("newApps").style.display = "none";
  document.getElementById("newTitle").style.display = "none";
}
if (localStorage.getItem("favorites")) {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  favorites.forEach(function(item) {
    createApp(item, true);
  });
}

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
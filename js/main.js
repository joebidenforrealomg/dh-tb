const altCSS = document.createElement("style");
const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
let newApps = 0;
let sections = [];
let sectionCount = {};

document.head.appendChild(altCSS);

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

function searchApp(name) {
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
}

function createApp(info, app, location) {
  if ((location && location.querySelector(`#${appID(app)}`) === null) || location == null) {
    const b = document.createElement("button");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const overlay = document.createElement("div");
    const tags = document.createElement("div");
    const fav = document.createElement("img");
    b.id = appID(app);
    b.className = "appsButton";
    b.title = info.hint;
    img.onclick = function () {
      openSite(`${info.url}`);

      // honestly really curious what you guys are playing so i'm adding this
      try {
        gtag("event", "openApp", {
          'app_name':app.Name
        });
      } catch (err) {}
      if (app.Notice) {
        notify({Text:app.Notice,ShowTime:5000})
      }
    };

    p.innerText = app.Name;
    p.classList.add("appName");

    overlay.classList.add("overlay");
    b.appendChild(overlay);

    tags.classList.add("tags");
    overlay.appendChild(tags);

    fav.classList.add("favorite");
    fav.src = "img/icons/star_hollow.svg";
    overlay.appendChild(fav);
    fav.onclick = function () {
      try {
        setFavorite(app, !isFavorite(app));
      } catch (err) {
        console.error(err);
      }
    }

    if (info.added.Bool) {
      const newP = document.createElement("p");
      newP.innerText = "NEW";
      newP.classList.add("new");
      newP.title = "This app was recently added (within the last 7 days)";
      tags.appendChild(newP);
      newApps++;
    }

    if (info.broken) {
      const newP = document.createElement("p");
      newP.classList.add("broken");
      newP.innerText = "!";
      newP.title = "This app may not work at the moment, we'll fix it soon.";
      tags.appendChild(newP);
    }

    if (info.fixed.Bool) {
      const newP = document.createElement("p");
      newP.innerText = "FIXED";
      newP.classList.add("fixed");
      newP.title = "This app was recently fixed.";
      tags.appendChild(newP);
      newApps++;
    }

    if (info.updated.Bool) {
      const newP = document.createElement("p");
      newP.innerText = "UPDATED";
      newP.classList.add("updated");
      newP.title = "This app was recently updated to a newer version.";
      tags.appendChild(newP);
      newApps++;
    }

    if (info.pinned) {
      fav.classList.add("favorited");
    }

    b.appendChild(p);
    b.appendChild(img);
    // if (info.newlyUpdated && info.pinned === false) {
    //   document.getElementById("newApps").appendChild(b);
    // } else {
    // if (info.pinned === true) {
    //   location = location || document.getElementById("favorite");
    // } else {
    //   location = location || document.getElementById("apps");
    // }
    location.appendChild(b);
    // }

    img.onload = function () {
      img.style.opacity = 1;
    };

    img.onerror = function () {
      img.src = "https://img.freepik.com/premium-photo/digital-black-green-squares_161488-652.jpg";
    };
    img.src = `${info.url}/../${info.thumbnail || "thumbnail.png"}`;
    img.classList.add("thumbnail");
  } else if (location && location.querySelector(`#${appID(app)}`)) {
    let thing = location.querySelector(`#${appID(app)}`);
  }
}

function isNew(added, days) {
  if (added.Date !== undefined) {
    added = added.Date;
  }

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

function createApps(app) {
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
  app.Updated = app.Updated || new Date("January 1, 2020");
  app.Section = app.Section || "apps";
  let newlyUpdated = false;
  if (isNew(app.Added, 7) === true || isNew(app.Fixed, 7) === true || isNew(app.Updated, 7) === true) {
    newlyUpdated = true;
  }
  if (app.Added.Bool === undefined) {
    app.Added = { Bool: isNew(app.Added), Date: app.Added };
    app.Fixed = { Bool: isNew(app.Fixed), Date: app.Fixed };
    app.Updated = { Bool: isNew(app.Updated), Date: app.Updated };
  }

  let info = {
    hint: "Play " + app.Name,
    url: "apps/" + app.Folder + "/" + app.Index,
    thumbnail: app.Thumbnail,
    newlyUpdated: newlyUpdated,
    broken: app.Broken,
    fixed: app.Fixed,
    added: app.Added,
    updated: app.Updated,
    pinned: isFavorite(app)
  }

  if (!sections.indexOf(app.Section)) {
    sections.push(app.Section);
  }
  sectionCount[app.Section] = sectionCount[app.Section] + 1;

  if (info.pinned == true) {
    createApp(info, app, document.getElementById("favorite"));
    if (info.newlyUpdated) {
      createApp(info, app, document.getElementById("newApps"));
    } else {
      createApp(info, app, document.getElementById(app.Section));
    }
  } else if (info.newlyUpdated) {
    createApp(info, app, document.getElementById("newApps"));
    createApp(info, app, document.getElementById(app.Section));
  } else {
    createApp(info, app, document.getElementById(app.Section));
  }
}

function sortApps() {
  try {
    var main = document.getElementById('main');

    [].map.call(main.children, Object).sort(function (a, b) {
      return +a.id.match(/\d+/) - +b.id.match(/\d+/);
    }).forEach(function (elem) {
      main.appendChild(elem);
    });
  } catch (err) {
    console.error(err)
  }
}

function appID(app) {
  return `appButton${appIndex(app)}`;
}

function appIndex(app) {
  return apps.indexOf(app);
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
  let found = favorites.includes(app.Name);
  if (found) {
    return true;
  } else {
    return false;
  }
}

function setFavorite(app, makeFavorite) {
  if (makeFavorite) {
    let favorites = getFavorites();
    favorites.push(app.Name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    document.querySelectorAll(`#${appID(app)}`).forEach(function (thingy) {
      const e = thingy.querySelector(".favorite");
      if (e) {
        e.classList.add("favorited");
      }
    });
    createApps(app);
    notify({ Text: `${app.Name} was added to your favorites` });
  } else {
    const thing = document.querySelector(`#favorite #${appID(app)}`);
    if (thing) {
      thing.remove();
    }
    document.querySelectorAll(`#${appID(app)}`).forEach(function (thingy) {
      const e = thingy.querySelector(".favorited");
      if (e) {
        e.classList.remove("favorited");
      }
    });
    let favorites = getFavorites();
    favorites.splice(favorites.indexOf(app.Name), 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    notify({ Text: `${app.Name} has been removed from your favorites` });
  }
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
    app.onclick = function () {
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
} else {
  window.addEventListener('beforeunload', (event) => {
    event.returnValue = "Are you sure you want to leave?";
  });
}
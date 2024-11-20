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
      if (info.openWithCode == true) {
        const url = `${window.location.origin}/${info.url}`;
        alert(url);
        openWindow(url, "New Tab", "", true, false);
      } else {
        openSite(`${info.url}`);
      }

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

    if (info.added != undefined) {
      if (info.added.Bool) {
        const newP = document.createElement("p");
        newP.innerText = "NEW";
        newP.classList.add("new");
        newP.title = "This app was recently added (within the last 7 days)";
        tags.appendChild(newP);
        newApps++;
      }
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

    if (info.updated != undefined) {
      if (info.updated.Bool) {
        const newP = document.createElement("p");
        newP.innerText = "UPDATED";
        newP.classList.add("updated");
        newP.title = "This app was recently updated to a newer version.";
        tags.appendChild(newP);
        newApps++;
      }
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
    location = location || document.getElementById("apps");
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
  app.OpenWithCode = app.OpenWithCode || false;
  let newlyUpdated = false;
  if (isNew(app.Added, 7) === true || isNew(app.Fixed, 7) === true || isNew(app.Updated, 7) === true) {
    newlyUpdated = true;
  }
  if (app.Added.Bool === undefined) {
    app.Added = { Bool: isNew(app.Added), Date: app.Added };
  }
  if (app.Fixed.Bool === undefined) {
    app.Fixed = { Bool: isNew(app.Fixed), Date: app.Fixed };
  }
  if (app.Updated.Bool === undefined) {
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
    pinned: isFavorite(app),
    openWithCode: app.OpenWithCode
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

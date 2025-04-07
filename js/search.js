const altCSS = document.createElement("style");
altCSS.rel = 'stylesheet';

function searchApp(name) {
  var foundApps = [];
  if (name != undefined && name !== "") {
    altCSS.innerHTML = `.appsButton { display: none; animation: none; }
                        .hideOnSearch { display: none; }
                        .foundApp { display: block !important; }`;
    document.querySelectorAll(".foundApp").forEach((app) => {
      app.classList.remove("foundApp");
    });
    apps.forEach(function (app) {
      if (app.Hidden === true) { return; }
      if (app.Genres) { app.Genres.forEach(function(e){ e.toLowerCase() }); }
      if (app.Related) { app.Related.forEach(function(e){ e.toLowerCase() }); }
      if (app.Name.toLowerCase().includes(name.toLowerCase()) 
        || (app.Genres && app.Genres.includes(name.toLowerCase()))
        || (app.Related && app.Related.includes(name.toLowerCase()))
      ) {
        foundApps.push(app);
      }
    });
    foundApps.sort();
    foundApps.forEach(function(app) {
      if (app.Hidden === true) { return; }
      const button = document.getElementById(appID(app) + "apps");
      if (button) {
        button.classList.add("foundApp");
      }
    });

    if (name !== "") {
      const results = foundApps.length;
      resultsText.innerHTML = `<b>${results}</b> result${results != 1 && "s" || ""} for '${name}'`;
    } else {
      resultsText.innerText = "";
    }
  } else {
    altCSS.innerHTML = `.appsButton { display: block; animation: none; }`;
    resultsText.innerHTML = "";
  }
}

function handleSearch(e) {
  if (e.type == "submit") {
    e.preventDefault();
    e.stopPropagation();
    searchApp(searchInput.value);
  } else {
    searchApp(searchInput.value);
  }
}

document.head.appendChild(altCSS);
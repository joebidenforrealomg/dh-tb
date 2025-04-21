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
    const lowerCaseSearch = name.toLowerCase();
    apps.forEach(function (app) {
      if (app.Hidden == true) return;
      let match = false;
      while (match == false) {
        // Search logic - Look through all properties of the app, and if any of them match the search term, break the loop. Else, keep going until all properties have been searched
        if (app.hasOwnProperty("Genres")) { 
          app.Genres = app.Genres.map(e => e.toLowerCase());
          if (app.Genres.some(genre => genre.includes(lowerCaseSearch))) { match = true; break; }
        }
        if (app.hasOwnProperty("Related")) {
          app.Related = app.Related.map(e => e.toLowerCase());
          if (app.Related.some(rel => rel.includes(lowerCaseSearch))) { match = true; break;}
        }
        if (app.hasOwnProperty("Name")) {
          app.Name = app.Name.toLowerCase();
          if (app.Name.includes(lowerCaseSearch)) { match = true; break; }
        }
        break;
      }
      // Search logic
      if (match) {
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
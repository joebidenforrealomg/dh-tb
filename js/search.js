const altCSS = document.createElement("style");
altCSS.rel = 'stylesheet';

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

function handleSearch(e) {
  e.preventDefault();
  searchApp(searchInput.value);
}

document.head.appendChild(altCSS);
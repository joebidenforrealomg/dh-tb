const latestUpdateText = "<b>Febuary 13th Update</b><br>Added 6 new apps, and fixed app thumbnails.";
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

document.getElementById("latestUpdate").innerHTML = latestUpdateText;

async function fetchData(url) {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      return html;
    })
    .catch(error => {
      console.warn('Error fetching HTML:', error);
      return null;
    })
}

async function openWindow(url, title, icon, code, removeCurrent) {
  var blank = window.open();
  if (code == false || code == undefined) {
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
    blank.document.open();
    blank.document.write("<h1 style='text-align:center;position:fixed;top:5px;font-family:sans-serif;' class='noticeElement'>Please wait...<br><p>Fetching the page...</p></h1>")
    fetchData(url).then(html => {
      if (html) {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(html, "text/html");
        
        blank.document.write(htmlDoc.documentElement.outerHTML);
        blank.document.writeln(`
          <script>
            const elements = document.getElementsByClassName('noticeElement');
            for (let i = 0; i < elements.length; i++) {
              elements[i].style.display = "none";
            }
          </script>`
        );
        blank.document.close();     
      } else {
        blank.document.write("<h1 style='text-align:center;position:fixed;top:40px;font-family:sans-serif;'>Failed to read the URL, please try again or report this.</h1>")
      }
    });
  }

  if (removeCurrent == true) {
    window.location.replace("https://google.com");
  }
}

function openSite(url) {
  const originalOption = particlesEnabled;
  particlesEnabled = false;
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
  iframe.src = `${url}`;
  iframe.className = "appIframe";

  closeButton.addEventListener('click', function () {
    if (confirm("Are you sure you want to close this app?") === true) {
      document.getElementById("main").style.display = "block";
      appDiv.remove();
      closeSpeedrunTimer();
      particlesEnabled = originalOption;
      if (particlesEnabled == true) {
        createParticles();
      }
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

  try {
    var event = new CustomEvent('appOpened', { frame: iframe })
    window.parent.document.dispatchEvent(event)
  } catch (err) {
    // do nothing
  }
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
    window.location.href = `home?iframe=true`;
  } else {
    window.addEventListener('beforeunload', (event) => {
      event.returnValue = "Are you sure you want to leave?";
    });
    document.addEventListener('contextmenu', function (e) {
      // toggleContextMenu(e);
      e.preventDefault();
    }, false);
  }
}

apps.forEach(createApps);
sortApps();

document.addEventListener('DOMContentLoaded', function () {
  if (InIframe() == false) {
    notInAFrame();
  }
});

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

clear.addEventListener("click", function () {
  searchInput.value = "";
  searchApp();
});

searchForm.addEventListener("submit", handleSearch);
searchForm.addEventListener("input", handleSearch);

if (particlesEnabled === true) {
  createParticles();
}
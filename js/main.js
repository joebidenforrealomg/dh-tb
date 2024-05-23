/* 
NOTE TO ANYONE READING THE CODE:
I know most of this code sucks, I made it close to a year ago.
I'm currently trying to convert this garbage code into something reasonable. In the meantime, I'm doing goofy things to ensure this doesn't break with constant updates.
*/

var hubWindow = null;

const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
const apps = ["1v1.LOL", "2048", "Aquapark", "Angry Birds", "Bad Piggies",
    "Bitlife", "Blackjack", "BloonsTD", "Bloxorz", "ButterDog Chat", "CookieClicker", "CrossyRoad",
    "DonkeyKong", "DOOM", "DuckHunt", "Ducklife_1", "Ducklife_2", "Ducklife_3", "ElectricMan 2",
    "FNAF_1", "FNAF_2", "FNAF_3", "FNAW", "GoogleDino", "GoogleSnake", "Impossible Quiz", "Jacksmith",
    "Learn 2 Fly", "Minecraft_1.8.8", "MotoX3M", "MotoX3M 2", "Minesweeper", "Pacman", "PappaPizza", "wolfen",
    "Pong", "RetroBowl", "Run_1", "Run_3", "Robux Generator Clicker", "RiddleSchool", "Slope_1", "Slope_2", "StickmanHook", "SuperMario 63",
    "SuperMario 64", "SoobwaySurfers", "Tetris", "Worlds Hardest Game_1", "Worlds Hardest Game_2", "Wordle", "yohoho.io"];
apps.sort();

function openSite(url, title, icon) {
    var blank = window.open();
    var link = blank.document.createElement('link');
    var style = blank.document.createElement('style');
    var closeButton = blank.document.createElement('p');
    var iframe = blank.document.createElement('iframe');
    link.rel = "shortcut icon";
    link.href = icon || "";
    blank.document.title = title || "New Tab";
    closeButton.innerText = "BACK";
    style.innerHTML = `body { width: 100vw;height: 100vh;margin: 0; background: black; } iframe { width: 100vw;height: 100vh;border: none;outline: none;margin: 0;} p { cursor: pointer;font-family: monospace;position: fixed;z-index: 2;padding: 8px;left: 0;transform: translateX(-50%);transition: 0.2s ease;opacity: 0.5;background: black;border: 2px solid lime;color: lime;} p:hover { left: 8px;transform: translateX(0);opacity: 1;}`;
    closeButton.addEventListener('click', function() {
        iframe.src = "https://joebidenrealomg.github.io/da-hub/index.html?iframe=true";
        if (hubWindow) {
            hubWindow.close();
        }
    });
    iframe.src = `${url}`;
    blank.document.head.appendChild(style);
    blank.document.head.appendChild(link);
    blank.document.body.appendChild(iframe);
    if (!url.includes("/da-hub/")) {
        blank.document.body.appendChild(closeButton);
    } else {
        hubWindow = blank;
    }
}

function searchApp(name) {
    var foundApps = [];
    var results = 0;
    appsDiv.innerHTML = "";
    if (name != undefined) {
        apps.forEach(function (app, i) {
            if (app.toLowerCase().includes(name.toLowerCase())) {
                foundApps.push(app);
                results++;
            }
        });
        foundApps.sort();
        foundApps.forEach(createApps);
        if (results == 1) {
            resultsText.innerHTML = `${results} result for '${name}'`;
        } else {
            resultsText.innerHTML = `${results} results for '${name}'`;
        }
    } else {
        apps.forEach(createApps);
        resultsText.innerHTML = "";
    }
}

function createApp(name, hint, url) {
    const b = document.createElement("button");
    b.innerHTML = name;
    b.title = hint;
    b.onclick = function () {
        openSite(`${url}`);
    };
    document.getElementById("apps").appendChild(b);
}

function createApps(app, i) {
    if (app.includes("_")) {
        var a = app.split("_");
        createApp(a[0] + " " + a[1], "Play " + a[0] + " " + a[1], "https://joebidenrealomg.github.io/da-hub/apps/" + a[0] + "/" + a[1] + "/index.html");
    } else {
        createApp(app, "Play " + app, "https://joebidenrealomg.github.io/da-hub/apps/" + app + "/index.html");
    }
}

function handleSearch(e) {
    e.preventDefault();
    if (searchInput.value != "") {
        searchApp(searchInput.value);
        searchInput.value = "";
    }
}

searchForm.addEventListener("submit", handleSearch);
clear.addEventListener("click", function () { searchApp() });
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
    if (iframe != "true" || iframe == null || iframe == undefined) {
        document.body.innerHTML = "";

        const apps = document.createElement('div');
        apps.className = "apps";
        apps.id = "apps";

        const app = document.createElement('button');
        app.onclick = function() {
            openSite("https://joebidenrealomg.github.io/da-hub/index.html?iframe=true");
            window.location.replace("https://google.com");
        };
        app.title = "Click to open";
        app.innerText = "Open";

        apps.appendChild(app);
        document.body.appendChild(apps);
    }
}

if (!InIframe()) {
    whenNotIframe();
}
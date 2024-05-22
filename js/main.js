/* 
NOTE TO ANYONE READING THE CODE:
I know most of this code sucks, I made it close to a year ago.
I'm currently trying to convert this garbage code into something reasonable. In the meantime, I'm doing goofy things to ensure this doesn't break with constant updates.
*/

const appsDiv = document.getElementById("apps");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsText = document.getElementById("results");
const clear = document.getElementById("clear");
const apps = ["1v1.LOL", "2048", "Aquapark",
    "Bitlife", "Blackjack", "BloonsTD", "Bloxorz", "ButterDog Chat", "CookieClicker", "CrossyRoad",
    "Cubefield", "DonkeyKong", "DOOM", "DuckHunt", "Ducklife_1", "Ducklife_2", "Ducklife_3", "ElectricMan 2",
    "FNAF_1", "FNAF_2", "FNAF_3", "FNAW", "GoogleDino", "GoogleSnake", "Impossible Quiz",
    "Learn 2 Fly", "Minecraft_1.8.8", "MotoX3M", "MotoX3M 2", "Minesweeper", "Pacman", "PappaPizza", "wolfen",
    "Pong", "RetroBowl", "Run_1", "Run_3", "Robux Generator Clicker", "RiddleSchool", "Slope", "StickmanHook", "SuperMario 63",
    "SuperMario 64", "SoobwaySurfers", "Tetris", "Worlds Hardest Game_1", "Worlds Hardest Game_2"];
apps.sort();

function openSite(url, title, icon) {
    var blank = window.open();
    var link = document.createElement('link');
    var iframe = blank.document.createElement('iframe');
    link.rel = "shortcut icon";
    link.href = icon || "";
    blank.document.body.style.margin = '0';
    blank.document.body.style.height = '100vh';
    blank.document.title = title || "New Tab";
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = `${url}`;
    blank.document.head.appendChild(link);
    blank.document.body.appendChild(iframe);
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

function Browser() {
    var blank = window.open();
    blank.document.body.style.margin = '0';
    blank.document.body.style.height = '100vh';
    blank.document.title = 'New Tab';
    var iframe = blank.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = 'https://google.com?igu=1';
    blank.document.body.appendChild(iframe);
    blank.document.body.querySelectorAll("iframe").contentWindow.openSite("https://google.com?igu=1");
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
    if (iframe != "true" || iframe == null || iframe == undefined) {
        document.body.innerHTML = "";

        const apps = document.createElement('div');
        apps.className = "apps";
        apps.id = "apps";

        const app = document.createElement('button');
        app.onclick = function() {
            openSite("https://joebidenrealomg.github.io/da-hub/index.html?iframe=true");
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
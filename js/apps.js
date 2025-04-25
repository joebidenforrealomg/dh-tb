const apps = [
  {
    Name: "1v1.LOL",
    Thumbnail: "thumbnail.jpg",
    Genres: ["fps", "shooter", "pvp"],
    Related: ["guns", "guns", "fortnite"],
    Broken: true,
    Hidden: true,
  },
  {
    Name: "2048",
    Mobile: true,
    Thumbnail: "thumbnail.png",
  },
  {
    Name: "A Dark Room",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("November 20, 2024")
  },
  {
    Name: "a game inside a game inside a game",
    Thumbnail: "thumbnail.png",
    Added: new Date("Febuary 13, 2025")
  },
  {
    Name: "Among Us",
    Folder: "AmongUs/",
    Hidden: true,
  },
  {
    Name: "Angry Birds",
    Mobile: true,
    Thumbnail: "thumbnail.png",
    Related: ["rovio", "Bad Piggies"]
  },
  {
    Name: "Anxiety",
    Added: new Date("November 20, 2024")
  },
  {
    Name: "Aquapark",
    Mobile: true,
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Bad Piggies",
    Mobile: true,
    Thumbnail: "thumbnail.jpg",
    Related: ["Angry Birds", "rovio"]
  },
  {
    Name: "Basket Random",
    Mobile: true,
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("December 18, 2024"),
  },
  {
    Name: "Basketball Stars",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("September 30, 2024"),
  },
  {
    Name: "Batman (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=batman",
    Thumbnail: "thumbnails/batman.jpg",
    Added: new Date("December 18, 2024"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Bitlife",
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Blackjack",
    Mobile: true,
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Block Blast",
    Added: new Date("April 20, 2025"),
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Block Break",
    Mobile: true,
    Added: new Date("April 5, 2025"),
    Thumbnail: "thumbnail.jpg",
    Related: ["block blast"]
  },
  {
    Name: "Bloons TD 1",
    Folder: "BloonsTD/1/",
    Mobile: true,
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Bloons TD 4",
    Folder: "BloonsTD/4/",
    Mobile: true,
    Thumbnail: "thumbnail.png",
    Added: new Date("Febuary 13, 2025")
  },
  {
    Name: "Bloxorz",
    Thumbnail: "thumbnail.jpeg"
  },
  {
    Name: "ButterDog Chat",
    Mobile: true,
    Thumbnail: "thumbnail.png",
    Added: new Date("January 22, 2025"),
    Hidden: true,
  },
  {
    Name: "Chess",
    Mobile: true,
    Thumbnail: "thumbnail.png",
    Added: new Date("September 30, 2024"),
  },
  {
    Name: "Cluster Rush",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("November 18, 2024"),
  },
  {
    Name: "Color Tunnel",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("November 18, 2024"),
  },
  {
    Name: "Cookie Clicker",
    Folder: "CookieClicker",
    Mobile: true,
    Thumbnail: "thumbnail.png",
    Updated: new Date("November 5, 2024")
  },
  {
    Name: "Crossy Road",
    Folder: "CrossyRoad",
    Mobile: true,
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Cubefield",
    Thumbnail: "thumbnail.png",
    Hidden: true,
  },
  {
    Name: "Cut the Rope",
    Thumbnail: "thumbnail.jpeg",
    Mobile: true,
    Added: new Date("November 20, 2024"),
    Notice: "This app may take a moment or two to load. (it gets stuck at a percent for a little while)"
  },
  {
    Name: "Donkey Kong",
    Folder: "DonkeyKong",
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "DOOM",
    Thumbnail: "thumbnail.jpeg"
  },
  {
    Name: "Double Dragon (NES)",
    Thumbnail: "thumbnails/doubledragon.png",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=Double_dragon",
    Added: new Date("December 20, 2024"),
    Genres: ["classic", "nintendo"],  
  },
  {
    Name: "Drift Boss",
    Thumbnail: "thumbnail.jpg",
    Mobile: true,
    Added: new Date("November 18, 2024"),
  },
  {
    Name: "Drift Hunters",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("January 8, 2025"),
  },
  {
    Name: "Drive Mad",
    Added: new Date("April 23, 2025")
  },
  {
    Name: "Duck Hunt",
    Folder: "DuckHunt",
    Mobile: true,
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Ducklife 1",
    Folder: "Ducklife/1/",
    Thumbnail: "thumbnail.jpeg"
  },
  {
    Name: "Ducklife 2",
    Folder: "Ducklife/2/",
    Thumbnail: "thumbnail.jpeg"
  },
  {
    Name: "Ducklife 3",
    Folder: "Ducklife/3/",
    Thumbnail: "thumbnail.jpeg"
  },
  {
    Name: "Ducklife 4",
    Folder: "Ducklife/4/",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("October 10, 2024"),
  },
  {
    Name: "Duck Tales (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=ducktales",
    Thumbnail: "thumbnails/ducktales.jpg",
    Added: new Date("December 20, 2024"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Electric Man 2",
    Folder: "ElectricMan 2",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Fancy Pants 1",
    Folder: "Fancy Pants/1/",
    Added: new Date("November 12, 2024"),
    Hidden: true,
  },
  {
    Name: "Fire Boy and Water Girl 1",
    Folder: "Fire Boy and Water Girl/1/",
    Added: new Date("April 23, 2025")
  },
  {
    Name: "Fire Boy and Water Girl 2",
    Folder: "Fire Boy and Water Girl/2/",
    Added: new Date("April 23, 2025")
  },
  {
    Name: "FNAF 1",
    Folder: "FNAF/1/",
    Related: ["port"],
    Mobile: true,
    Thumbnail: "thumbnail.jpeg"
  },
  {
    Name: "FNAF 2",
    Folder: "FNAF/2/",
    Thumbnail: "thumbnail.jpeg",
    Related: ["scratch", "recreation"],
    Notice: "This app take a while to load, please be patient.",
  },
  {
    Name: "FNAF 3",
    Folder: "FNAF/3/",
    Mobile: true,
    Thumbnail: "thumbnail.webp",
    Related: ["scratch", "recreation"],
    Notice: "This app take a while to load, please be patient.",
  },
  {
    Name: "FNAF 4",
    Folder: "FNAF/4/",
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "FNAW",
    Thumbnail: "thumbnail.jpg",
    Mobile: true,
  },
  {
    Name: "Friday the 13th (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=fridaythe13th",
    Thumbnail: "thumbnails/fridaythe13th.webp",
    Added: new Date("December 18, 2024"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Fruit Ninja",
    Folder: "FruitNinja",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Getaway Shootout",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("November 22, 2024")
  },
  {
    Name: "Google Baseball",
    Hidden: true,
  },
  {
    Name: "Google Dino",
    Folder: "GoogleDino",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Google Snake",
    Folder: "GoogleSnake",
    Mobile: true,
    Thumbnail: "thumbnail.png",
    Fixed: new Date("October 10, 2024")
  },
  {
    Name: "Gunblood",
    Added: new Date("April 4, 2025"),
    Thumbnail: "thumbnail.jpg",
    Genres: ["shooter", "pvp"],
    Related: ["ragdoll archers"]
  },
  {
    Name: "Half Life 1",
    Folder: "Half Life/1/",
    Added: new Date("Febuary 12, 2025"),
    Thumbnail: "thumbnail.jpg",
    Notice: "To launch this app, simply press the first \"Start\" button, then \"Launch Xash3D!\"."
  },
  {
    Name: "Slow Roads modded (Hell Roads)",
    Folder: "Hell Roads/",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("October 15, 2024")
  },
  {
    Name: "Hole.io",
    Thumbnail: "thumbnail.avif",
    Added: new Date("January 22, 2025"),
  },
  {
    Name: "House of Horers Simulator 🥶",
    Folder: "House of Horers Simulator",
    Thumbnail: "thumbnail.png",
    Related: ["locked", "unavailable"]
  },
  {
    Name: "Hunger Games",
    Thumbnail: "thumbnail.jpeg",
    Mobile: true,
    Added: new Date("January 8, 2025"),
  },
  {
    Name: "Idle Breakout",
    Thumbnail: "thumbnail.png",
    Added: new Date("October 15, 2024")
  },
  {
    Name: "Idle Dice",
    Thumbnail: "thumbnail.png",
    Added: new Date("January 8, 2025")
  },
  {
    Name: "Impossible Quiz",
    Mobile: true,
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Jacksmith",
    Mobile: true,
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Jetpack Joyride",
    Thumbnail: "splash.jpg",
    Mobile: true,
    Added: new Date("January 22, 2025")
  },
  {
    Name: "Johnny Upgrade",
    Added: new Date("April 5, 2025"),
    Thumbnail: "thumbnail.jpg",
    Genres: ["platformer"],
  },
  {
    Name: "Learn 2 Fly",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
  },
  {
    Name: "Learn To Fly 3",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("January 22, 2025"),
    Genres: ["flash"],
  },
  {
    Name: "Madalin Stunt Cars 2",
    Folder: "Madalin Stunt Cars/2/",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("November 5, 2024"),
    Hidden: true,
    Genres: ["driving", "car", "open world"]
  },
  {
    Name: "Madalin Stunt Cars 3",
    Folder: "Madalin Stunt Cars/3/",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("November 5, 2024"),
    Hidden: true,
    Genres: ["driving", "car", "open world"]
  },
  {
    Name: "Madalin Stunt Cars Multiplayer",
    Folder: "Madalin Stunt Cars/Multiplayer/",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("November 5, 2024"),
    Notice: "Despite multiplayer being in this app's name, multiplayer doesn't currently function. Sorry bro.",
    Genres: ["driving", "car", "open world"]
  },
  {
    Name: "Mario Kart DS",
    Hidden: true,
    Genres: ["driving", "car", "racing", "race"]
  },
  {
    Name: "MegaMan 2 (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=megaman2",
    Thumbnail: "thumbnails/MegaMan 2.jpg",
    Added: new Date("December 18, 2024"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Minecraft 1.8",
    Folder: "Minecraft/1.8.8",
    Thumbnail: "thumbnail.png",
    Notice: "Opening in another window...",
    Genres: ["open world"],
    Updated: new Date("January 15, 2025"),
    OpenWithCode: true
  },
  {
    Name: "Minecraft 1.12",
    Folder: "Minecraft/1.12",
    Thumbnail: "thumbnail.png",
    Notice: "Opening in another window...",
    Genres: ["open world"],
    Added: new Date("March 10, 2025"),
    OpenWithCode: true
  },
  {
    Name: "Minesweeper",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Moomoo.io Sandbox",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("January 22, 2025"),
    Hidden: true
  },
  {
    Name: "Monkey Mart",
    Thumbnail: "thumbnai.jpg",
    Hidden: true,
    Added: new Date("December 16, 2024")
  },
  {
    Name: "MotoX3M",
    Thumbnail: "thumbnail.jpg",
    Genres: ["driving", "bike", "racing", "race"]
  },
  {
    Name: "MotoX3M 2",
    Thumbnail: "thumbnail.jpg",
    Genres: ["driving", "bike", "racing", "race"]
  },
  {
    Name: "MotoX3M Pool",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("April 23, 2025"),
  },
  {
    Name: "n-gon",
    Thumbnail: "thumbnail.png",
    Added: new Date("December 16, 2024")
  },
  {
    Name: "Pacman",
    Thumbnail: "thumbnail.jpg",
    Genres: ["classic"]
  },
  {
    Name: "Papa's Burgeria",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
    Added: new Date("October 15, 2024")
  },
  {
    Name: "Papa's Freezeria",
    Thumbnail: "thumbnail.jpeg",
    Genres: ["flash"],
    Added: new Date("October 15, 2024")
  },
  {
    Name: "Papa's Pancakeria",
    Thumbnail: "thumbnail.jpeg",
    Genres: ["flash"],
    Added: new Date("October 15, 2024")
  },
  {
    Name: "Papa's Pizzeria",
    Folder: "PapaPizza",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
  },
  {
    Name: "Paper.io 2",
    Folder: "Paper.io/2/",
    Thumbnail: "thumbnail.avif",
    Added: new Date("January 22, 2025")
  },
  {
    Name: "Plants Vs. Zombies",
    Folder: "Plants vs Zombies",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("January 22, 2025"),
    Fixed: new Date("April 23, 2025"),
    Related: ["pvz"],
  },
  {
    Name: "Punchout (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=punchout",
    Thumbnail: "thumbnails/punchout.webp",
    Added: new Date("January 6, 2025"),
    Genres: ["classic", "nintendo"],
    Broken: true,
  },
  {
    Name: "Punchout 2 (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=punchouttwo",
    Thumbnail: "thumbnails/punchout 2.jpg",
    Added: new Date("January 6, 2025"),
    Genres: ["classic", "nintendo"],
    Broken: true,
  },
  {
    Name: "Polytrack",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("January 8, 2025"),
    Genres: ["driving", "car", "racing", "race"],
    Related: ["trackmania"],
  },
  {
    Name: "Pong",
    Thumbnail: "thumbnail.png",
    Genres: ["classic"],
  },
  {
    Name: "Portal (Flash)",
    Folder: "Portal%20WCS2/",
    Thumbnail: "thumbnail.png",
    Added: new Date("November 1, 2024"),
    Genres: ["remake", "flash"],
    Related: ["valve", "half life"]
  },
  {
    Name: "q1k3",
    Thumbnail: "thumbnail.png",
    Added: new Date("Febuary 13, 2025"),
    Genres: ["fps", "shooter"],
  },
  {
    Name: "Ragdoll Archers",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("Febuary 13, 2025")
  },
  {
    Name: "Retro Bowl",
    Folder: "RetroBowl",
    Thumbnail: "thumbnail.png",
  },
  {
    Name: "Retro Bowl College",
    Folder: "RetroBowl/College/",
    Thumbnail: "thumbnail.png",
    Added: new Date("November 18, 2024")
  },
  {
    Name: "Riddle School 1",
    Folder: "RiddleSchool/1/",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
  },
  {
    Name: "Riddle School 2",
    Folder: "RiddleSchool/2/",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
  },
  {
    Name: "Riddle School 3",
    Folder: "RiddleSchool/3/",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
  },
  {
    Name: "Roblox Remake",
    Folder: "RobloxRemake/",
    Thumbnail: "thumbnail.png",
    Hidden: true
  },
  {
    Name: "Robux Generator Clicker",
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Run 1",
    Folder: "Run/1/",
    Thumbnail: "thumbnail.png",
    Genres: ["flash"],
  },
  {
    Name: "Run 2",
    Folder: "Run/2/",
    Thumbnail: "thumbnail.jpg",
    Genres: ["flash"],
  },
  {
    Name: "Run 3",
    Folder: "Run/3/",
    Thumbnail: "thumbnail.png",
    Genres: ["flash"],
  },
  {
    Name: "Sand Tetris",
    Added: new Date("April 20, 2025"),
    Thumbnail: "thumbnail.jpg",
  },
  {
    Name: "Shell Shockers",
    Added: new Date("Febuary 13, 2025"),
    Hidden: true
  },
  {
    Name: "Sling Drift",
    Thumbnail: "thumbnail.jpg",
    Genres: ["driving"],
    Hidden: true,
    Added: new Date("December 18, 2024")
  },
  {
    Name: "Rooftop Snipers",
    Folder: "Rooftop Snipers/",
    Thumbnail: "thumbnail.jpeg",
    Added: new Date("October 2, 2024")
  },
  {
    Name: "Slope",
    Folder: "Slope/1/",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Slope Ass",
    Folder: "Slope/Ass/",
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Slow Roads",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("April 23, 2025")
  },
  {
    Name: "Soccer Random",
    Thumbnail: "thumbnail.webp",
    Added: new Date("December 18, 2024"),
  },
  {
    Name: "Solitare",
    Thumbnail: "thumbnail.avif",
    Added: new Date("November 18, 2024")
  },
  {
    Name: "Soobway Surfers",
    Folder: "SoobwaySurfers",
    Thumbnail: "thumbnail.png",
    Genres: ["remake"],
    Related: ["subway surfers"]
  },
  {
    Name: "Super Mario Bros. 1 (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=supermariobros",
    Thumbnail: "thumbnails/smb1.png",
    Added: new Date("January 6, 2025"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Super Mario Bros. 2 (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=supermariobros2",
    Thumbnail: "thumbnails/smb2.jpg",
    Added: new Date("January 6, 2025"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Super Mario Bros. 3 (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=supermariobros3",
    Thumbnail: "thumbnails/smb3.jpg",
    Added: new Date("January 6, 2025"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Super Mario 63",
    Folder: "SuperMario 63/",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Super Mario 64",
    Folder: "SuperMario 64/",
    Thumbnail: "thumbnail.jpg",
    Genres: ["classic"]
  },
  {
    Name: "Stickman Hook",
    Folder: "StickmanHook/",
    Thumbnail: "thumbnail.png",
    Fixed: new Date("October 2, 2024")
  },
  {
    Name: "Subway Surfers",
    Thumbnail: "thumbnail.png",
    Added: new Date("October 2, 2024")
  },
  {
    Name: "Tanuki Sunset",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("Febuary 13, 2025")
  },
  {
    Name: "Temple Run 1",
    Folder: "Temple Run/1/",
    Added: new Date("April 5, 2025"),
    Hidden: true
  },
  {
    Name: "Temple Run 2",
    Folder: "Temple Run/2/",
    Added: new Date("April 5, 2025"),
    Hidden: true
  },
  {
    Name: "Tetris",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "There is no game",
    Thumbnail: "thumbnail.jpg",
    Added: new Date("April 23, 2025")
  },
  {
    Name: "Tomb of the Mask",
    Thumbnail: "thumbnail.png",
    Added: new Date("January 8, 2025"),
  },
  {
    Name: "The Legend of Zelda (NES)",
    Folder: "../resources/jsnes/",
    Index: "nes.html?file=zelda",
    Thumbnail: "thumbnails/zelda.jpg",
    Added: new Date("December 18, 2024"),
    Genres: ["classic", "nintendo"],
  },
  {
    Name: "Ultimate Flash Sonic",
    Thumbnail: "thumbnail.jpg",
    Genres: ["remake"]
  },
  {
    Name: "Vex 3",
    Folder: "Vex/3/",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Wolfenstein 3D",
    Folder: "wolfen/",
    Thumbnail: "thumbnail.png"
  },
  {
    Name: "Wordle",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "World's Hardest Game 1",
    Folder: "Worlds Hardest Game/1/",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "World's Hardest Game 2",
    Folder: "Worlds Hardest Game/2/",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "yohoho.io",
    Thumbnail: "thumbnail.jpg"
  },
  {
    Name: "Yorg.io 3",
    Folder: "Yorg.io/3/",
    Added: new Date("Febuary 13, 2025"),
    Hidden: true
  },
  {
    Name: "YouTube",
    Added: new Date("Febuary 13, 2025"),
    Hidden: true
  },

  // Begin Emulators
  {
    Name: "GBA Emulator",
    Folder: "GBA-gh-pages/",
    Thumbnail: "Binaries/gb.ico",
    Section: "emulators",
    Notice: "This app has issues with lag, we currently don't have a fix for this."
  },
];

apps.sort(function (a, b) {
  if (a.Name < b.Name) {
    return -1;
  }
  if (a.Name > b.Name) {
    return 1;
  }
  return 0;
});
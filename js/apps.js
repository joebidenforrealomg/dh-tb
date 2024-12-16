const apps = [
  {
    Name:"1v1.LOL",
    Thumbnail:"thumbnail.jpg",
    Genres:["fps","shooter"],
    Related:["guns","guns"]
  },
  {
    Name:"2048",
    Thumbnail:"thumbnail.png",
  },
  {
    Name:"A Dark Room",
    Thumbnail:"thumbnail.jpg",
    Added: new Date("November 20, 2024")
  },
  {
    Name:"Among Us",
    Folder:"AmongUs/",
    Hidden:true,
  },
  {
    Name:"Angry Birds",
    Thumbnail:"thumbnail.png",
    Related:["rovio","Bad Piggies"]
  },
  {
    Name:"Anxiety",
    Added:new Date("November 20, 2024")
  },
  {
    Name:"Aquapark",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Bad Piggies",
    Thumbnail:"thumbnail.jpg",
    Related:["Angry Birds","rovio"]
  },
  // {
  //   Name:"Bad Time Simlator",
  //   Index:"",
  //   Added: new Date("October 17, 2024")
  // },
  {
    Name:"Basketball Stars",
    Thumbnail:"thumbnail.jpg",
    Added: new Date("September 30, 2024"),
  },
  {
    Name:"Bitlife",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Blackjack",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Bloons TD",
    Folder:"BloonsTD",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Bloxorz",
    Thumbnail:"thumbnail.jpeg"
  },
  {
    Name:"Chess",
    Thumbnail:"thumbnail.png",
    Added: new Date("September 30, 2024"),
  },
  {
    Name:"Cluster Rush",
    Thumbnail:"thumbnail.jpeg",
    Added: new Date("November 18, 2024"),
  },
  {
    Name:"Color Tunnel",
    Thumbnail:"thumbnail.jpeg",
    Added: new Date("November 18, 2024"),
  },
  {
    Name:"Cookie Clicker",
    Folder:"CookieClicker",
    Thumbnail:"thumbnail.png",
    Updated: new Date("November 5, 2024")
  },
  {
    Name:"Crossy Road",
    Folder:"CrossyRoad",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Cubefield",
    Thumbnail:"thumbnail.png",
    Hidden:true
  },
  {
    Name:"Cut the Rope",
    Thumbnail:"thumbnail.jpeg",
    Added:new Date("November 20, 2024"),
    Notice:"This app may take a moment or two to load. (it gets stuck at a percent for a little while)"
  },
  {
    Name:"Donkey Kong",
    Folder:"DonkeyKong",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"DOOM",
    Thumbnail:"thumbnail.jpeg"
  },
  {
    Name:"Drift Boss",
    Thumbnail:"thumbnail.jpg",
    Added:new Date("November 18, 2024")
  },
  {
    Name:"Duck Hunt",
    Folder:"DuckHunt",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Ducklife 1",
    Folder:"Ducklife/1/",
    Thumbnail:"thumbnail.jpeg"
  },
  {
    Name:"Ducklife 2",
    Folder:"Ducklife/2/",
    Thumbnail:"thumbnail.jpeg"
  },
  {
    Name:"Ducklife 3",
    Folder:"Ducklife/3/",
    Thumbnail:"thumbnail.jpeg"
  },
  {
    Name:"Ducklife 4",
    Folder:"Ducklife/4/",
    Thumbnail:"thumbnail.jpg",
    Added: new Date("October 10, 2024"),
  },
  {
    Name:"Electric Man 2",
    Folder:"ElectricMan 2",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Fancy Pants 1",
    Folder:"Fancy Pants/1/",
    Added:new Date("November 12, 2024"),
    Hidden: true,
  },
  {
    Name:"FNAF 1",
    Folder:"FNAF/1/",
    Thumbnail:"thumbnail.jpeg"
  },
  {
    Name:"FNAF 2",
    Folder:"FNAF/2/",
    Thumbnail:"thumbnail.jpeg",
    Broken:true,
    Notice: "This app may not load, we're currently searching for a new game file.",
  },
  {
    Name:"FNAF 3",
    Folder:"FNAF/3/",
    Thumbnail:"thumbnail.webp",
    Broken:true,
    Notice: "This app may not load, we're currently searching for a new game file.",
  },
  {
    Name:"FNAF 4",
    Folder:"FNAF/4/",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"FNAW",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Fruit Ninja",
    Folder:"FruitNinja",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Getaway Shootout",
    Thumbnail:"thumbnail.jpg",
    Added: new Date("November 22, 2024")
  },
  {
    Name:"Google Baseball",
    Hidden:true,
  },
  {
    Name:"Google Dino",
    Folder:"GoogleDino",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Google Snake",
    Folder:"GoogleSnake",
    Thumbnail:"thumbnail.png",
    Fixed: new Date("October 10, 2024")
  },
  {
    Name:"Slow Roads (Modded)",
    Folder:"Hell Roads/",
    Thumbnail:"thumbnail.jpg",
    Added: new Date("October 15, 2024")
  },
  {
    Name:"House of Horers Simulator",
    Thumbnail:"thumbnail.png",
    Related:["locked","unavailable"]
  },
  {
    Name:"Idle Breakout",
    Thumbnail:"thumbnail.png",
    Added: new Date("October 15, 2024")
  },
  {
    Name:"Impossible Quiz",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Jacksmith",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Learn 2 Fly",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Madalin Stunt Cars 2",
    Folder:"Madalin Stunt Cars/2/",
    Thumbnail:"thumbnail.jpeg",
    Added: new Date("November 5, 2024"),
    Hidden: true,
    Genres:["driving","car","open world"]
  },
  {
    Name:"Madalin Stunt Cars 3",
    Folder:"Madalin Stunt Cars/3/",
    Thumbnail:"thumbnail.jpeg",
    Added: new Date("November 5, 2024"),
    Hidden: true,
    Genres:["driving","car","open world"]
  },
  {
    Name:"Madalin Stunt Cars Multiplayer",
    Folder:"Madalin Stunt Cars/Multiplayer/",
    Thumbnail:"thumbnail.jpeg",
    Added: new Date("November 5, 2024"),
    Notice:"Despite multiplayer being in this app's name, multiplayer doesn't currently function. Sorry bro.",
    Genres:["driving","car","open world"]
  },
  {
    Name:"Mario Kart DS",
    Hidden:true,
    Genres:["driving","car","racing","race"]
  },
  {
    Name:"Minecraft 1.8",
    Folder:"Minecraft/1.8.8/",
    Thumbnail:"thumbnail.jpg",
    Notice: "This app is known to occasionally not allow keyboard input, we're working on a fix for this. Also, the site may be frozen for a few seconds when loading this.",
    Genres:["open world"],
    // Fixed: new Date("November 15, 2024"),
    // OpenWithCode: true
  },
  {
    Name:"Minesweeper",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Monkey Mart",
    Thumbnail:"thumbnai.jpg",
    Hidden:true,
    Added:new Date("December 16, 2024")
  },
  {
    Name:"MotoX3M",
    Thumbnail:"thumbnail.jpg",
    Genres:["driving","bike","racing","race"]
  },
  {
    Name:"MotoX3M 2",
    Thumbnail:"thumbnail.jpg",
    Genres:["driving","bike","racing","race"]
  },
  {
    Name:"n-gon",
    Thumbnail:"thumbnail.png",
    Added:new Date("December 16, 2024")
  },
  {
    Name:"Pacman",
    Thumbnail:"thumbnail.jpg",
    Genres:["classic"]
  },
  {
    Name:"Papa's Burgeria",
    Thumbnail:"thumbnail.jpg",
    Genres:["flash"],
    Added: new Date("October 15, 2024")
  },
  {
    Name:"Papa's Freezeria",
    Thumbnail:"thumbnail.jpeg",
    Genres:["flash"],
    Added: new Date("October 15, 2024")
  },
  {
    Name:"Papa's Pancakeria",
    Thumbnail:"thumbnail.jpeg",
    Genres:["flash"],
    Added: new Date("October 15, 2024")
  },
  {
    Name:"Papa's Pizzeria",
    Folder:"PapaPizza",
    Thumbnail:"thumbnail.jpg",
    Genres:["flash"],
  },
  {
    Name:"Pong",
    Thumbnail:"thumbnail.png",
    Genres:["classic"],
  },
  {
    Name:"Portal (Flash)",
    Folder:"Portal%20WCS2/",
    Thumbnail:"thumbnail.png",
    Added: new Date("November 1, 2024"),
    Genres:["remake","flash"],
    Related:["valve", "half life"]
  },
  {
    Name:"Retro Bowl",
    Folder:"RetroBowl",
    Thumbnail:"thumbnail.png",
  },
  {
    Name:"Retro Bowl College",
    Folder:"RetroBowl/College/",
    Thumbnail:"thumbnail.png",
    Added: new Date("November 18, 2024")
  },
  {
    Name:"Riddle School 1",
    Folder:"RiddleSchool/1/",
    Thumbnail:"thumbnail.jpg",
    Genres:["flash"],
  },
  {
    Name:"Riddle School 2",
    Folder:"RiddleSchool/2/",
    Thumbnail:"thumbnail.jpg",
    Genres:["flash"],
  },
  {
    Name:"Riddle School 3",
    Folder:"RiddleSchool/3/",
    Thumbnail:"thumbnail.jpg",
    Genres:["flash"],
  },
  {
    Name:"Roblox Remake",
    Folder:"RobloxRemake/",
    Thumbnail:"thumbnail.png",
    Hidden:true
  },
  {
    Name:"Robux Generator Clicker",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Run 1",
    Folder:"Run/1/",
    Thumbnail:"thumbnail.png",
    Genres:["flash"],
  },
  {
    Name:"Run 2",
    Folder:"Run/2/",
    Thumbnail:"thumbnail.jpg",
    Genres:["flash"],
  },
  {
    Name:"Run 3",
    Folder:"Run/3/",
    Thumbnail:"thumbnail.png",
    Genres:["flash"],
  },
  {
    Name:"Rooftop Snipers",
    Folder:"Rooftop Snipers/",
    Thumbnail:"thumbnail.jpeg",
    Added:new Date("October 2, 2024")
  },
  {
    Name:"Slope",
    Folder:"Slope/1/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Slope Ass",
    Folder:"Slope/Ass/",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Solitare",
    Thumbnail: "thumbnail.avif",
    Added: new Date("November 18, 2024")
  },
  {
    Name:"Soobway Surfers",
    Folder:"SoobwaySurfers",
    Thumbnail:"thumbnail.png",
    Genres:["remake"],
    Related:["subway surfers"]
  },
  {
    Name:"Super Mario 63",
    Folder:"SuperMario 63/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Super Mario 64",
    Folder:"SuperMario 64/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Stickman Hook",
    Folder:"StickmanHook/",
    Thumbnail:"thumbnail.png",
    Fixed: new Date("October 2, 2024")
  },
  {
    Name:"Subway Surfers",
    Thumbnail:"thumbnail.png",
    Added: new Date("October 2, 2024")
  },
  {
    Name:"Tetris",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Ultimate Flash Sonic",
    Thumbnail:"thumbnail.jpg",
    Genres:["remake"]
  },
  {
    Name:"Vex 3",
    Folder:"Vex/3/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Wolfenstein 3D",
    Folder:"wolfen/",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Wordle",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"World's Hardest Game 1",
    Folder:"Worlds Hardest Game/1/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"World's Hardest Game 2",
    Folder:"Worlds Hardest Game/2/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"yohoho.io",
    Thumbnail:"thumbnail.jpg"
  },

  // Begin Emulators
  {
    Name:"GBA Emulator",
    Folder: "GBA-gh-pages/",
    Thumbnail: "Binaries/gb.ico",
    Section: "emulators",
    Notice: "This app has issues with lag, we currently don't have a fix for this."
  },
];
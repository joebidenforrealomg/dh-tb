const apps = [
  {
    Name:"1v1.LOL",
    Thumbnail:"thumbnail.jpg",
  },
  {
    Name:"2048",
    Thumbnail:"thumbnail.png",
  },
  {
    Name:"Among Us",
    Folder:"AmongUs",
    Hidden:true,
  },
  {
    Name:"Angry Birds",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Aquapark",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Bad Piggies",
    Thumbnail:"thumbnail.jpg"
  },
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
    Name:"Cookie Clicker",
    Folder:"CookieClicker",
    Thumbnail:"thumbnail.png"
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
    Name:"Donkey Kong",
    Folder:"DonkeyKong",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"DOOM",
    Thumbnail:"thumbnail.jpeg"
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
    Name:"Electric Man 2",
    Folder:"ElectricMan 2",
    Thumbnail:"thumbnail.jpg"
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
  },
  {
    Name:"FNAF 3",
    Folder:"FNAF/3/",
    Thumbnail:"thumbnail.webp",
    Broken:true,
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
    Name:"Google Baseball",
    Hidden:true,
  },
  {
    Name:"Google Dino",
    Hidden:true,
  },
  {
    Name:"Google Snake",
    Folder:"Google Snake",
    Thumbnail:"thumbnail.png"
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
    Name:"Mario Kart DS",
    Hidden:true,
  },
  {
    Name:"Minecraft 1.8",
    Folder:"Minecraft/1.8.8/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Minesweeper",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"MotoX3M",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"MotoX3M 2",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Pacman",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Papa's Pizzeria",
    Folder:"PapaPizza",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Pong",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Retro Bowl",
    Folder:"RetroBowl",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Riddle School 1",
    Folder:"RiddleSchool/1/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Riddle School 2",
    Folder:"RiddleSchool/2/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Riddle School 3",
    Folder:"RiddleSchool/3/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Robux Generator Clicker",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Run 1",
    Folder:"Run/1/",
    Thumbnail:"thumbnail.png"
  },
  {
    Name:"Run 2",
    Folder:"Run/2/",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Run 3",
    Folder:"Run/3/",
    Thumbnail:"thumbnail.png"
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
    Name:"Soobway Surfers",
    Folder:"SoobwaySurfers",
    Thumbnail:"thumbnail.png"
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
    Fixed:true
  },
  {
    Name:"Subway Surfers",
    Folder:"Subway Surfers/",
    Thumbnail:"thumbnail.png",
    Added: new Date("October 2, 2024")
  },
  {
    Name:"Tetris",
    Thumbnail:"thumbnail.jpg"
  },
  {
    Name:"Ultimate Flash Sonic",
    Thumbnail:"thumbnail.jpg"
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
];

/* "1v1.LOL", "2048", "Aquapark", "Angry Birds", "Bad Piggies", "Basketball Stars",
    "Bitlife", "Blackjack", "BloonsTD", "Bloxorz", "CookieClicker", "CrossyRoad",
    "DonkeyKong", "DOOM", "DuckHunt", "Ducklife_1", "Ducklife_2", "Ducklife_3", "ElectricMan 2", "FruitNinja",
    "FNAF_1", "FNAF_2", "FNAF_3", "FNAF_4", "FNAW", "GoogleSnake", "House of Horers Simulator", "Impossible Quiz", "Jacksmith",
    "Learn 2 Fly", "Minecraft_1.8.8", "MotoX3M", "MotoX3M 2", "Minesweeper", "Pacman", "PapaPizza", "wolfen",
    "Pong", "RetroBowl", "Run_1", "Run_3", "Robux Generator Clicker", "RiddleSchool_1", "RiddleSchool_2", "RiddleSchool_3",
     "Slope_1", "Slope_Ass", "StickmanHook", "SuperMario 63", "SuperMario 64", "SoobwaySurfers", "Tetris", 
     "Vex_3" ,"Worlds Hardest Game_1", "Worlds Hardest Game_2", "Wordle", "yohoho.io" */
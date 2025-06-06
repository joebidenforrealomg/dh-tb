function game_rom(text = "", file = "") {
  return {
    "text": text,
    "file": file
  }
}

function rom_list_element(text = "", file = "") {
  const li = document.createElement("li");

  const button = document.createElement("button");
  button.classList.add("romLoad");
  button.setAttribute("data-rom", file);
  button.innerText = "Start";
  li.appendChild(button);

  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);

  return li;
}

let _biosLoaded = false;
function load_rom(file = "", callback = () => { }) {
  tempCanvasMessage.style = "";
  tempCanvasMessage.innerText = "Loading...";

  // Load the BIOS
  if (_biosLoaded == false) {
    const BIOS = "./Binaries/gba_bios.bin";
    fetch(BIOS)
      .then(response => response.blob())
      .then(blob => {
        const loadedFile = new File([blob], 'gba_bios.bin');
        fileLoadShimCode([loadedFile], attachBIOS);
        _biosLoaded = true;
      });
  }

  // Load the game ROM
  const ROM = `./Binaries/${file}`;
  fetch(ROM)
    .then(response => response.blob())
    .then(blob => {
      const loadedFile = new File([blob], 'rom.gba');
      fileLoadShimCode([loadedFile], attachROM);
      tempCanvasMessage.innerText = "";
      tempCanvasMessage.style = "display: none;"
      callback();
    });
}

const romList = [
  game_rom("Doom", "dm.gba"),
  game_rom("Donkey Kong Country", "dkc.gba"),
  game_rom("Ecks vs. Sever", "EcksvsSever.gba"),
  game_rom("Pokemon Emerald", "pokemonemerald.gba"),
  game_rom("Pokemon Green", "pokemongreen.gba"),
  game_rom("Pokemon Ruby", "pokemonruby.gba"),
  game_rom("Pokemon Sapphire", "pokemonsapphire.gba"),
  game_rom("Super Street Fighter", "super_street_fighter_3_alpha.gba"),
  game_rom("Super Mario 2", "supermarioadvance2.gba"),
];

// Sort romList by game name
romList.sort(function (a, b) {
  if (a.text < b.text) {
    return -1;
  }
  if (a.text > b.text) {
    return 1;
  }
  return 0;
});

const romListElement = document.getElementById("romList");
let romListElements = [];

// Create rom buttons
romList.forEach((game) => {
  const li = rom_list_element(game.text, game.file);
  romListElement.appendChild(li);
  romListElements.push(li.querySelector("button"));
});

const tempCanvasMessage = document.getElementById("tempCanvasMessage");
const playButton = document.getElementById("play");
try {
  romListElements.forEach(function (button) {
    const game = button.getAttribute("data-rom");
    button.onclick = function () {
      if (game) {
        const initialButtonText = button.innerText;
        button.classList.add("loading");
        button.innerText = "Loading";
        load_rom(game, () => {
          // Slight delay just for it to load (not always gonna work, but it works for me so yeah)
          setTimeout(function () {
            button.classList.remove("loading");
            button.innerText = initialButtonText;
            // IodineGUI.Iodine.play();
            playButton.click();
          }, 800);
        });
      } else {
        button.innerText = "Failed";
      }
    }
  });
} catch (err) {
  console.error(err);
  alert("Something went wrong while loading the game list.");
}

// Check for a file name in the URL params
const urlParams = new URLSearchParams(window.location.search);
const file_param = urlParams.get("file");

if (file_param && file_param.trim() != "") {
  setTimeout(() => {
    load_rom(file_param, () => {
      alert("Game loaded! To start, click the \"Play\" button in the top menu.");
      // For some reason, attempting to load in any way at this point literally does not work.
      // IodineGUI.Iodine.play();
      // playButton.click();
    });
  }, 600);
}
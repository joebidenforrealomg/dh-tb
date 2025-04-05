// Settings Handler
let settingsFrame = document.getElementById("settingsFrame");
let settingsList = document.getElementById("settingsList");
let settingsOpen = false;

let settings = {
  /*["Particles"]: {
    SetTo: "false",
    Options: ["true", "false"], // The default option is expected to be the first
    UpdateFunction: function(val) {
      particlesEnabled = val == "true" && true || false;
      if (particlesEnabled == true) {
        createParticles();
      }
    }
  },*/
  
  ["Grid Mode"]: {
    SetTo: "Default",
    Options: ["Default", "Square", "LargeTiles"],
    UpdateFunction: function (newSize) {
      appsDiv.classList.remove(currentAppSize);
      appsDiv.classList.add(newSize);
      currentAppSize = newSize;
    },
  },

  ["Export Saved Data"]: {
    RunFunction: exportData,
  },

  ["Import Saved Data"]: {
    RunFunction: loadData,
    FileInput: true,
  },

  ["Weekly Recommendations"]: {
    SetTo: "true",
    Options: ["true", "false"],
    UpdateFunction: function(val) {
      const enabled = (val == "true" || val == true) && true || false;
      localStorage.setItem("_DH-Setting_WeeklyRecommend", enabled);
      document.querySelectorAll(".weeklyRecommendations").forEach((element) => {
        element.style.display = enabled == true && "block" || "none";
      });
    }
  }
}

function toggleSettings() {
  settingsFrame.classList.toggle("open");
  settingsOpen = settingsFrame.classList.contains("open");
}

function checkIfOptionIsValid(options, value) {
  return options.includes(`${value}`);
}

function updateSetting(name, newValue, save) {
  const option = settings[name];
  if (option && checkIfOptionIsValid(option.Options, newValue)) {
    option["SetTo"] = newValue;
    if (save) { alert(newValue + typeof(newValue)); }
    if (save == true) {
      saveSetting(name);
    }
    
    const func = settings[name]["UpdateFunction"];
    if (func) {
      func(option.SetTo);
    }
  }
}

function saveSetting(name) {
  if (settings[name] != null) {
    localStorage.setItem(`settings-${name}`, settings[name]["SetTo"]);
  }
}

function getSavedSetting(name) {
  if (settings[name] != null) {
    return localStorage.getItem(`settings-${name}`);
  }
}

function createOptionButton(name) {
  const option = settings[name];
  if (option != null) {
    // Check if the default value is a boolean
    const isABoolean = option.SetTo == "true" || option.SetTo == "false";
    const availableOptions = option.Options;
    
    const frame = document.createElement("li");
    frame.classList.add("option");
    const label = document.createElement("p");
    label.innerText = name;
    label.classList.add("label");
    frame.appendChild(label);
    
    if (isABoolean == true) {
      const checkbox = document.createElement("input");
      checkbox.classList.add("checkbox");
      checkbox.type = "checkbox";
      checkbox.checked = option.SetTo == "true" && true || false;
      checkbox.onclick = () => {
        updateSetting(name, checkbox.checked, true);
      }
      frame.appendChild(checkbox);
    } else if (availableOptions) {
      const dropdown = document.createElement("select");
      dropdown.classList.add("dropdown");
      dropdown.name = name;
      dropdown.onchange = (event) => {
        updateSetting(name, event.target.value, true);
      }

      availableOptions.forEach(function(optionValue) {
        const optionElement = document.createElement("option");
        optionElement.value = optionValue;
        optionElement.innerText = optionValue;
        if (option.SetTo == optionValue) {
          optionElement.selected = "selected";
        }
        dropdown.appendChild(optionElement);
      });
      frame.appendChild(dropdown);
    } else if (option.RunFunction) {
      const buttonElement = document.createElement("button");
      buttonElement.innerText = "";
      frame.appendChild(buttonElement);

      if (option.FileInput) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.onchange = (event) => {
          option.RunFunction(event);
        }
        buttonElement.onclick = () => {
          inputElement.click();
        }
        frame.appendChild(inputElement);
      } else [
        buttonElement.onclick = () => {
          option.RunFunction();
        }
      ]
    }

    settingsList.appendChild(frame);
  }
}

for (let key in settings) {
  if (settings.hasOwnProperty(key)) {
    const saved = getSavedSetting(key);
    if (saved) {
      updateSetting(key, saved, false);
    }

    createOptionButton(key);
  }
}
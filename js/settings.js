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
    Category: "Visual",
    DisplayName: "App Grid Mode",
    SetTo: "Default",
    Options: ["Default", "Square", "LargeTiles"],
    UpdateFunction: function (newSize) {
      appsDiv.classList.remove(currentAppSize);
      appsDiv.classList.add(newSize);
      currentAppSize = newSize;
    },
  },

  ["Weekly Recommendations"]: {
    Category: "Features",
    SetTo: "true",
    Options: ["true", "false"],
    UpdateFunction: function(val) {
      const enabled = (val == "true" || val == true) && true || false;
      document.querySelectorAll(".weeklyRecommendations").forEach((element) => {
        if (enabled) {
          element.style = "";
        } else {
          element.style.display = "none";
        }
      });
    }
  },

  ["Settings In-Game"]: {
    DisplayName: "Settings while in-game",
    Category: "Features",
    SetTo: "true",
    Options: ["true", "false"],
    UpdateFunction: function(val) {
      const enabled = (val == "true" || val == true) && true || false;
      updateVisibilityOfSettingsButton(enabled);
      if (settingsOpen && !enabled && appOpen) {
        toggleSettings();
      }
    }
  },

  ["Speedrun Timer"]: {
    Category: "Features",
    SetTo: "false",
    Options: ["false", "true"],
    UpdateFunction: function(val) {
      const enabled = (val == "true" || val == true) && true || false;
      timerEnabled = enabled;
      if (!enabled) {
        closeSpeedrunTimer();
      }
      updateVisibilityOfToggleButton();
    }
  },

  ["MobileMode"]: {
    Category: "Features",
    DisplayName: "Hide non-mobile-supported apps",
    SetTo: "false",
    Options: ["false", "true"],
    UpdateFunction: function(val) {
      const enabled = (val == "true" || val == true) && true || false;
      document.body.classList.toggle("mobileMode", enabled);
      document.querySelectorAll(".apps").forEach(div => {
        const placeholder = div.querySelector(".placeholder");
        const allHidden = [...div.querySelectorAll(".appsButton")].every((button) => button.classList.contains("mobileApp") == false);
        if (placeholder) {
          if (allHidden == false && enabled == true && div.childElementCount > 1) { // Force hide placeholder since CSS won't handle this due to the child count
            placeholder.style.display = "none";
          } else if (allHidden == true && enabled == true && div.childElementCount > 1) { // Force show placeholder since CSS won't handle this due to the child count
            placeholder.style.display = "block";
          } else { // Don't override (let CSS handle it)
            placeholder.style = "";
          }
        }
      });
    },
  },

  ["Transparent background blurring"]: {
    Category: "Performance",
    SetTo: "false",
    Options: ["false", "true"],
    UpdateFunction: function(val) {
      const enabled = (val == "true" || val == true) && true || false;
      document.body.classList.toggle("blurEnabled", enabled);
    }
  },

  ["Export Saved Data"]: {
    DisplayName: "Export Saved Data (Includes ALL data and settings)",
    Category: "Advanced",
    Icon: "download.svg",
    RunFunction: exportData,
  },

  ["Import Saved Data"]: {
    DisplayName: "Import Saved Data (Overwrites ALL data and settings)",
    Category: "Advanced",
    Icon: "upload.svg",
    RunFunction: loadData,
    FileInput: true,
  },
}

function toggleSettings() {
  settingsFrame.classList.toggle("open");
  settingsOpen = settingsFrame.classList.contains("open");
}

function updateVisibilityOfSettingsButton(value) {
  const toggleButton = document.querySelector(".appSettingsButton");
  if (toggleButton) {
    toggleButton.style.display = value ? "block" : "none";
  }
}

function checkIfOptionIsValid(options, value) {
  return options.includes(`${value}`);
}

function updateSetting(name, newValue, save) {
  const option = settings[name];
  if (option && checkIfOptionIsValid(option.Options, newValue)) {
    option["SetTo"] = newValue;
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
    label.innerText = option.DisplayName || name;
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
      buttonElement.style.backgroundImage = `url(img/icons/${option.Icon})`;
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

let categories = [];

for (let key in settings) {
  if (settings.hasOwnProperty(key)) {
    const saved = getSavedSetting(key);
    if (saved) {
      updateSetting(key, saved, false);
    }

    const category = settings[key]["Category"] || "General";
    if (!categories.some(cat => cat.name === category)) {
      categories.push({name: category, options: [key]});
    } else {
      categories[categories.length - 1].options.push(key);
    }
  }
}

categories.forEach((category) => {
  const categoryElement = document.createElement("h3");
  categoryElement.innerText = category.name;
  settingsList.appendChild(categoryElement);
  category.options.forEach((option) => {
    createOptionButton(option);
  });
});

setupSettingsSocialLinks(); // Add social links to settings menu
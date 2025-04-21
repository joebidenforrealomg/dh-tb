let currentLanguage = localStorage.getItem("settings-Language") || "English";
let currentLanguageData;
let languages = {
  Afrikaans: "af",
  ButterDog: "butterdog",
  English: "en",
  Español: "es",
  Emoji: "emoji",
};

async function getElementLanguageData(name) {
    while (currentLanguageData == null) {
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    return currentLanguageData[name] || null;
}

function unsafeGetElementLanguageData(name) {
    return currentLanguageData[name] || null;
}

async function updateLanguageElements() {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(async (element) => {
        const key = element.getAttribute("data-lang");
        const text = await getElementLanguageData(key);
        if (text) {
            element.innerText = text;
        }
    });
    console.log("Successfully updated page language");
}

async function updateLanguage(lang = "en") {
    // Fetch the language JSON file
    const langShort = languages[lang] || lang;
    const langJSON = `locales/${langShort}.json`;
    return fetch(langJSON)
        .then(response => response.json())
        .then(data => {
            console.log("Language data loaded");
            currentLanguageData = data;
            updateLanguageElements();
        })
        .catch(error => {
            console.error('Error loading language file:', error);
            try {
                notify({Text: "Failed to load language file"});
            } catch (err) {}
        });
}

const userLang = navigator.language.toLowerCase().split('-')[0];
const index = Object.values(languages).indexOf(userLang);

if (index !== -1) {
    const keyAtIndex = Object.keys(languages)[index];
    if (currentLanguage !== keyAtIndex) {
        currentLanguage = keyAtIndex;
    }
}
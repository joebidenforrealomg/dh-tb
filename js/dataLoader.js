function exportData() {
  // Gather localStorage data
  const storageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    storageData[key] = value;
  }

  // Gather cookies data
  const cookies = document.cookie.split(';');
  const cookieData = {};
  cookies.forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    cookieData[name] = value;
  });

  // Combine both data into a single object
  const combinedData = {
    localStorage: storageData,
    cookies: cookieData
  };

  // Convert the object to a JSON string
  const jsonData = JSON.stringify(combinedData);

  // Encode the JSON string to Base64
  const base64Data = btoa(jsonData); // btoa() converts the string to Base64

  // Create a Blob with Base64 data and prepare for download
  const blob = new Blob([base64Data], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const currentDate = new Date();
  const date = `${currentDate.getMonth() + 1}_${currentDate.getDate()}_${currentDate.getHours()}${currentDate.getMinutes()}`;
  a.download = `data_backup_${date}.b64`;
  a.click();
  URL.revokeObjectURL(url);
}

function loadData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    // Decode Base64 data
    const base64Data = e.target.result;
    const jsonData = atob(base64Data); // atob() decodes the Base64 string

    try {
      // Parse the decoded JSON data
      const parsedData = JSON.parse(jsonData);

      // Load localStorage data
      for (const key in parsedData.localStorage) {
        if (parsedData.localStorage.hasOwnProperty(key)) {
          localStorage.setItem(key, parsedData.localStorage[key]);
        }
      }

      // Load cookies data
      for (const name in parsedData.cookies) {
        if (parsedData.cookies.hasOwnProperty(name)) {
          document.cookie = `${name}=${parsedData.cookies[name]}; path=/`;
        }
      }

      notify({ ShowTime: 6000, Text: "Successfully loaded saved data! It's recommended you reload to load the new data." });
    } catch (error) {
      notify({ Text: "Failed to load or parse data" });
      console.error("Error loading or parsing saved data:", error);
    }
  };
  reader.readAsText(file);
}
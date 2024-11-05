try {
  const playButton = document.getElementById("play");

  document.querySelectorAll(".romLoad").forEach(function(button) {
    let game = button.getAttribute("data-rom");
    button.onclick = function() {
      if (game) {
        // Load the BIOS
        const BIOS = "./Binaries/gba_bios.bin";
        fetch(BIOS)
          .then(response => response.blob())
          .then(blob => {
            const file = new File([blob], 'gba_bios.bin');
            fileLoadShimCode([file], attachBIOS);
          });

        // Load the game ROM
        const ROM = `./Binaries/${game}`;
        fetch(ROM)
          .then(response => response.blob())
          .then(blob => {
            const file = new File([blob], 'rom.gba');
            fileLoadShimCode([file], attachROM);

            // Slight delay just for it to load (not always gonna work, but it works for me so yeah)
            setTimeout(function() { playButton.click()}, 800) ;
          });
      }
    }
  });
} catch (err) {
  alert(err);
}
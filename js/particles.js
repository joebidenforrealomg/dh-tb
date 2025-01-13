let particlesOnScreen = 0;
let maxParticles = 12;
let _particlesContainer = null;

function setupParticles() {
  _particlesContainer = document.createElement("div");
  _particlesContainer.id = "particlesContainer";
  document.body.appendChild(_particlesContainer);
}

setupParticles();

function createParticles() {
  for (let i = 0; i < Math.round(Math.random() * 5); i++) {
    if (particlesOnScreen + 1 <= maxParticles) {
      particlesEnabled += 1;
      const img = document.createElement("img");
      const randomSize = Math.random() * (50 - 20) + 20;
      let animTime = Math.random() * 10;
      if (animTime < 3) {
        animTime = 3
      }
      
      img.style.width = `${randomSize}px`;
      img.style.height = `${randomSize}px`;
      img.src = "https://raw.githubusercontent.com/butterdogco/da-hub/refs/heads/main/img/snow 2.png";
      img.classList.add("particle");
      img.style.animation = `particleAnimation ${animTime}s linear`;
      img.style.left = `${Math.floor(Math.random() * (screen.availWidth + 100))}px`;
      _particlesContainer.appendChild(img);
      setTimeout(function() {
        img.remove();
        particlesEnabled -= 1;
      }, animTime * 1000);
    }
  }
  if (particlesEnabled) {
    setTimeout(createParticles, 150);
  }

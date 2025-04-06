function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let currentTimer = null;
let timerEnabled = false;
let timerStarted = false;
let startTime = null;
function makeTimer() {
  if (timerEnabled == false) { return; }
  const div = document.createElement("div");
  div.className = "speedrunTimer";
  let timeText = document.createElement("p")
  timeText.innerText = "00:00:00";
  timeText.className = "timerText";
  let startButton = document.createElement("button");
  startButton.innerText = "Start";
  let resetButton = document.createElement("button");
  resetButton.innerText = "Reset";

  startButton.addEventListener('click', function() {
    timerStarted = !timerStarted;
    if (timerStarted == true) {
      startButton.innerText = "Pause";
      startTime = startTime || new Date();
      function loop() {
        if (timerStarted) {
          const seconds = (new Date().getTime() - startTime.getTime()) / 1000;
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = Math.floor(seconds % 60);
          const milliseconds = Math.floor((seconds % 1) * 100);
          const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
          timeText.innerText = formattedTime;
          setTimeout(loop, 10);
        } else {
          startButton.innerText = "Start";
        }
      }
      loop();
    } else {
      startButton.innerText = "Start";
    }
  });

  resetButton.addEventListener('click', function() {
    timeText.innerText = "00:00:00";
    timerStarted = false;
    startTime = null;
  });
  
  div.appendChild(timeText);
  div.appendChild(startButton);
  div.appendChild(resetButton);

  currentTimer = div;
  document.body.appendChild(div);
  dragElement(div);
}

function closeSpeedrunTimer() {
  if (currentTimer != null) {
    currentTimer.remove();
    currentTimer = null;
  }
}

function toggleSpeedrunTimer() {
  if (currentTimer != null) {
    closeSpeedrunTimer();
  } else {
    makeTimer();
  }
}

function updateVisibilityOfToggleButton() {
  const toggleButton = document.querySelector(".speedrunTimerButton");
  if (toggleButton) {
    toggleButton.style.display = timerEnabled ? "block" : "none";
  }
}
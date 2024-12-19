let contextOpen = false;
let contextMenu = undefined;

function openContextMenu(event) {
  if (contextMenu) {
    contextMenu.classList.remove("hide");
    contextMenu.style.top = event.pageY + "px";
    contextMenu.style.left = event.pageX + "px";

    if (event.target.tagName == "img") {
      // alert("image");
    }
  }
}

function closeContextMenu() {
  if (contextMenu) {
    contextMenu.classList.add("hide");
  }
}

function toggleContextMenu(event) {
  contextOpen = !contextOpen;
  if (contextOpen) {
    // openContextMenu(event);
  } else {
    closeContextMenu();
  }
}

function createContextMenu() {
  if (contextMenu) { contextMenu.remove(); }
  contextMenu = document.createElement("div");
  contextMenu.classList.add("contextMenu");
  contextMenu.classList.add("hide");

  let button = document.createElement("button");
  button.classList.add("option");
  button.innerText = "Favorite this app";

  contextMenu.appendChild(button);
  document.body.appendChild(contextMenu);

  document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(contextMenu)
  
    if (!withinBoundaries) {
      closeContextMenu();
    }
  })
}

// createContextMenu();
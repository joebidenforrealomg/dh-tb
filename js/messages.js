function notify(info) {
  info.Text = info.Text || "No text for notification.";
  info.ShowTime = info.ShowTime || 3000;

  const p = document.createElement("p");
  p.classList.add("notification");
  p.innerHTML = info.Text;

  document.getElementById("notifications").appendChild(p);

  setTimeout(function () {
    p.style.animation = "notificationFadeOut 0.5s ease";
    setTimeout(function () { p.remove() }, 500);
  }, info.ShowTime);
}

function unlockAchievement(text) {
  notify({
    Text: `Achievement Unlock<br>${text}`,
    ShowTime: 5000,
  });
}
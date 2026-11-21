const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

// Xtvshort video configuration
const videoId = "olNgMeLZBa0";

const player = document.getElementById("youtubePlayer");
const watchButton = document.getElementById("watchButton");

if (player) {
  player.src =
    https://www.youtube.com/embed/${videoId}?rel=0;
}

if (watchButton) {
  watchButton.addEventListener("click", () => {
    if (player) {
      player.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
}

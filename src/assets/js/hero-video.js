document.addEventListener("DOMContentLoaded", function () {
  const picture = document.querySelector("#hero-2042 .cs-video-wrapper");
  const playButton = document.querySelector("#hero-2042 .cs-play");
  const video = document.querySelector("#hero-2042 video");

  function togglePlayButton() {
    playButton.classList.toggle("cs-hide");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  picture.addEventListener("click", togglePlayButton);
  playButton.addEventListener("click", togglePlayButton);
  setTimeout(() => {
    // Call the function to activate the event listeners
    togglePlayButton();
  }, 300);
});

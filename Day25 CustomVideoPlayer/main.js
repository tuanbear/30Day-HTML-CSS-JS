const video = document.querySelector("video");
const play = document.querySelector(".play");
const timer = document.querySelector(".timer");
const progress = document.querySelector(".progress");
const progressFill = document.querySelector(".progress_fill");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const volumeIcon = document.querySelector(".volume i");
const volumeInput = document.querySelector(".volume input");
var volCache = volumeInput.value;

function togglePlay() {
  if (video.paused) {
    video.play();
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

function handleTime() {
  timer.innerHTML =
    secToMMSS(video.currentTime) + " / " + secToMMSS(video.duration);
  let percentProgressFill = Math.round(
    (video.currentTime / video.duration) * 100
  );
  updateProgressFill(percentProgressFill);
  if (video.currentTime == video.duration) {
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

function secToMMSS(sec) {
  let min = Math.round(sec / 60);
  let second = Math.round(sec % 60);
  if (min < 10 && second < 10) return `0${min}:0${second}`;
  if (min < 10 && second >= 10) return `0${min}:${second}`;
  if (min >= 10 && second >= 10) return `${min}:${second}`;
}

function skip(skipTime) {
  video.currentTime += skipTime;
}

function updateIcon() {
  if (volumeInput.value <= 0) {
    video.volume = 0;
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-xmark");
  } else {
    video.volume = volumeInput.value;
    volCache = volumeInput.value;
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-high");
  }
}

function updateProgressFill(percentProgressFill) {
  progressFill.style.width = `${percentProgressFill}%`;
}

play.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleTime);
progress.addEventListener("mousedown", function (e) {
  let percentProgressFill = Math.round((e.offsetX / this.offsetWidth) * 100);
  video.currentTime = Math.round((video.duration / 100) * percentProgressFill);
  updateProgressFill(percentProgressFill);
});
prev.addEventListener("click", () => {
  skip(-5);
});
next.addEventListener("click", () => {
  skip(5);
});
volumeInput.addEventListener("change", updateIcon);
volumeIcon.addEventListener("click", () => {
  if (video.volume == 0) {
    video.volume = volCache;
    volumeInput.value = volCache;
  } else {
    video.volume = 0;
    volumeInput.value = 0;
  }
  updateIcon();
});

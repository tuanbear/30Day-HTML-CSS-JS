const btns = document.querySelectorAll(".wrapper button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const audio = e.currentTarget.querySelector("audio");
    playSound(audio);
  });
});

const playSound = (audio) => {
  const clone = audio.cloneNode();
  clone.play();
};

document.addEventListener("keydown", (e) => {
  const btn = document.querySelector(`.key-${e.key}`);
  btn && btn.click();
});

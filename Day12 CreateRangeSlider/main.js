const range = document.querySelector(".range");
const process = document.querySelector(".process");
const body = document.querySelector("body");

range.addEventListener("mousemove", function (e) {
  let percent = Math.round(
    ((e.pageX - this.offsetLeft) / this.offsetWidth) * 100
  );
  updateProcess(percent);
});

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  process.innerText = `${percent}%`;
  if (percent < 10) {
    body.style.backgroundColor = `rgba(0, 0, 0, 0.${percent / 10})`;
  } else if (percent >= 100) {
    body.style.backgroundColor = "rgba(0, 0, 0, 1)";
  } else {
    body.style.backgroundColor = `rgba(0, 0, 0, 0.${percent})`;
  }
}
updateProcess(50);

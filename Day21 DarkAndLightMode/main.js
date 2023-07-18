const body = document.querySelector("body");
const btn = document.querySelector(".btn-mode");

btn.onclick = () => {
  body.classList.toggle("dark");
  let mode = body.getAttribute("class") ? "dark" : "";
  localStorage.setItem("mode", mode);
};

function init() {
  let mode = localStorage.getItem("mode") ? "dark" : "";
  body.setAttribute("class", mode);
}

init();

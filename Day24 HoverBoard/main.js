const container = document.querySelector(".container");
const quantity = 200;

for (let i = 0; i < quantity; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("mouseenter", (e) => {
    let color = randomColor();
    e.currentTarget.style.background = color;
    e.currentTarget.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
  });
  box.addEventListener("mouseleave", (e) => {
    e.currentTarget.style.background = "#444";
    e.currentTarget.style.boxShadow = "0 0 5px #000";
  });
}

function randomColor() {
  let charColor = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }
  return color;
}

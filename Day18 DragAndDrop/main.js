const boxes = document.querySelectorAll(".box");
const targets = document.querySelectorAll(".target");

let curentTarget = null;

targets.forEach((target) => {
  target.addEventListener("dragstart", function (e) {
    curentTarget = target;
  });
});
boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!box.querySelector(".target")) {
      box.appendChild(curentTarget);
    }
  });
  box.addEventListener("drop", function (e) {
    let parentCurrentTarget = curentTarget.parentElement;
    if (!this.querySelector(".target")) {
      this.appendChild(curentTarget);
    } else {
      let stemp = this.querySelector(".target");
      this.innerHTML = "";
      this.appendChild(curentTarget);
      parentCurrentTarget.appendChild(stemp);
    }
  });
});

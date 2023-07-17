const color = document.getElementById("color");
const eraser = document.getElementById("eraser");
const minus = document.getElementById("minus");
const size = document.getElementById("size");
const plus = document.getElementById("plus");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const canvasBox = document.querySelector("#canvas");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const widthScreen = Math.round((window.innerWidth / 100) * 80);
const heightScreen = Math.round((window.innerHeight / 100) * 80);
canvas.width = widthScreen;
canvas.height = heightScreen;
canvasBox.appendChild(canvas);

let pos1 = {
  x: 0,
  y: 0,
};
let pos2 = {
  x: 0,
  y: 0,
};

let isDrawing = false;
let colorPaint = "#000000";
let sizePaint = Math.round(size.innerText);

document.addEventListener("mousedown", (e) => {
  pos1.x = e.offsetX;
  pos1.y = e.offsetY;
  isDrawing = true;
});
document.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    pos2.x = e.offsetX;
    pos2.y = e.offsetY;

    ctx.beginPath();
    ctx.arc(pos1.x, pos1.y, sizePaint, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.lineWidth = sizePaint * 2;
    ctx.strokeStyle = colorPaint;
    ctx.stroke();
    pos1.x = pos2.x;
    pos1.y = pos2.y;
  }
});
document.addEventListener("mouseup", (e) => {
  isDrawing = false;
});
color.addEventListener("change", (e) => {
  colorPaint = e.target.value;
});
eraser.onclick = () => {
  colorPaint = "#ffffff";
};
minus.onclick = () => {
  sizePaint = sizePaint <= 5 ? sizePaint : sizePaint - 5;
  size.innerText = sizePaint;
};
plus.onclick = () => {
  sizePaint = sizePaint >= 50 ? sizePaint : sizePaint + 5;
  size.innerText = sizePaint;
};
clear.onclick = () => {
  let canvasStatus = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasStatus.width, canvasStatus.height);
};
save.onclick = () => {
  let output = canvas.toDataURL("image/png");
  save.setAttribute("href", output);
};

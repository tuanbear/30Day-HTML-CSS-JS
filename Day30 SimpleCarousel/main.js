const wrapper = document.getElementById("wrapper");
let isMouseDown = false;
let startX, scrollLeft;

wrapper.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
  console.log(startX);
});

wrapper.addEventListener("mouseleave", function (e) {
  isMouseDown = false;
});

wrapper.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});

wrapper.addEventListener("mousemove", function (e) {
  if (isMouseDown) {
    let x = e.pageX - wrapper.offsetLeft;

    //tốc độ scroll
    let speed = 1.8;

    let walk = (x - startX) * speed;

    wrapper.scrollLeft = scrollLeft - walk;
  }
});

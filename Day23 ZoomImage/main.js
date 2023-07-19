const result = document.querySelector(".result");
const imgs = document.querySelectorAll(".img img");

imgs.forEach((img) => {
  img.addEventListener("mousemove", function (e) {
    result.style.backgroundImage = `url(${img.src})`;
    result.classList.remove("hide");

    let percentWidth = (e.offsetX / this.offsetWidth) * 100;
    let percentHeight = (e.offsetY / this.offsetHeight) * 100;

    result.style.backgroundPosition = `${percentWidth}% ${percentHeight}%`;
    result.style.top = `${e.pageY}px`;
    result.style.left = `${e.pageX}px`;
  });

  img.addEventListener("mouseleave", () => {
    result.classList.add("hide");
    result.style = "none";
  });
});

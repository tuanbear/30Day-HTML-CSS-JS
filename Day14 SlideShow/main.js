const imgShow = document.querySelector(".slide_show img");
const imgList = document.querySelectorAll(".slide_list img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function handleImgShow(index) {
  currentIndex = index;
  imgShow.src = imgList[currentIndex].src;
  const active = document.querySelector(".active");
  active.classList.remove("active");
  imgList[currentIndex].parentElement.classList.add("active");
}

imgList.forEach((item, index) => {
  item.onclick = (e) => {
    handleImgShow(index);
  };
});
prevBtn.onclick = (e) => {
  if (currentIndex === 0) {
    currentIndex = imgList.length - 1;
  } else {
    currentIndex = --currentIndex;
  }
  handleImgShow(currentIndex);
};
nextBtn.onclick = (e) => {
  if (currentIndex === imgList.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = ++currentIndex;
  }
  handleImgShow(currentIndex);
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    if (currentIndex === 0) {
      currentIndex = imgList.length - 1;
    } else {
      currentIndex = --currentIndex;
    }
    handleImgShow(currentIndex);
  }
  if (e.keyCode === 39) {
    if (currentIndex === imgList.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex = ++currentIndex;
    }
    handleImgShow(currentIndex);
  }
});

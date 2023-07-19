const btnList = document.querySelectorAll(".food_menu button");
const foodList = document.querySelector(".food_list");
const imgList = document.querySelectorAll(".food_list img");

var imgs = [];

imgList.forEach((img) => {
  imgs.push({
    src: img.src,
    type: img.getAttribute("type"),
  });
});

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    let type = e.currentTarget.getAttribute("type");
    if (type === "all") {
      init(imgs);
      return;
    }
    const typeList = imgs.filter((item) => {
      return item.type === type;
    });
    init(typeList);
  });
});

init = (data) => {
  foodList.innerHTML = "";
  data.forEach((item) => {
    let foodItem = document.createElement("div");
    let foodImg = document.createElement("img");

    foodImg.src = item.src;
    foodImg.setAttribute("type", item.type);
    foodItem.classList.add("food-item");

    foodItem.append(foodImg);
    foodList.append(foodItem);
  });
};

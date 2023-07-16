const h1Home = document.querySelector("#home h1");
const descHome = document.querySelector("#home .description");
const boxAboutLeft = document.querySelector("#about .box:first-child");
const boxAboutRight = document.querySelector("#about .box:last-child");
const memberTeam = document.querySelectorAll("#team .member");
const heightScreen = window.innerHeight;

window.onload = () => {
  animationShow(h1Home, "leftToRight 0.5s ease-in-out forwards");
  animationShow(descHome, "leftToRight 0.7s ease-in-out forwards");
};

window.onscroll = function () {
  animationShow(h1Home, "leftToRight 0.5s ease-in-out forwards");
  animationShow(descHome, "leftToRight 0.7s ease-in-out forwards");
  animationShow(boxAboutLeft, "leftToRight 0.5s ease-in-out forwards");
  animationShow(boxAboutRight, "rightToCenter 0.5s ease-in-out forwards");
  memberTeam.forEach((item) => {
    animationShow(item, "enlarge 0.6s ease-in-out forwards");
  });
};

function animationShow(item, animation) {
  if (item.style.animation !== "none") {
    var rectH1 = item.getClientRects();
    if (!(rectH1[0].bottom < 0 || rectH1[0].top > heightScreen)) {
      item.style.animation = animation;
    } else {
      item.style.animation = "none";
    }
  }
}

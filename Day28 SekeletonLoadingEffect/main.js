const img = document.querySelector(".card_img");
const title = document.querySelector(".card_info h2");
const text = document.querySelector(".card_info p");
const btn = document.querySelector(".card_info button");
const loadings = document.querySelectorAll(".loading");

setTimeout(() => {
  img.innerHTML = '<img src="https://picsum.photos/500/500" alt="" />';
  title.innerHTML = "Nodemy";
  text.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Evenietarchitecto distinctio nam incidunt veritatis magni illo, ipsam quas.";
  btn.innerHTML = "Read More";

  loadings.forEach((loading) => {
    loading.classList.remove("loading");
  });
}, 4000);

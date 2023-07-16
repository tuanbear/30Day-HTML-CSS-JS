// var mockData = [
//   {
//     name: "Fjallraven - Foldsack No. 1 Ba",
//     price: "$109.95",
//     picture: "../Img/Day1.png",
//   },
// ];
const productApi = "https://fakestoreapi.com/products";
const products = document.querySelector(".product");
const searchInput = document.querySelector(".input input");

fetch(productApi)
  .then((response) => response.json())
  .then((data) => {
    products.innerHTML = "";
    data.forEach((item) => {
      const product = document.createElement("div");
      product.classList.add("product__item");
      product.innerHTML = `
          <img src="${item.image}" alt="" />
            <div class="product__info">
            <h4>${item.title}</h4>
            <p>$${item.price}</p>
            </div>`;
      products.appendChild(product);
    });
  });

searchInput.addEventListener("input", (e) => {
  let txtSearch = e.target.value.trim().toLowerCase();
  const productDom = document.querySelectorAll(".product__item");

  productDom.forEach((item) => {
    if (!item.innerText.toLowerCase().includes(txtSearch)) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
});

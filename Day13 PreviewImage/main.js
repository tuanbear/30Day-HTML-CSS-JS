const upload = document.getElementById("image");
const preview = document.querySelector(".preview");

upload.addEventListener("change", (e) => {
  let file = upload.files[0];

  if (!file) return;
  if (!file.type.endsWith("/jpeg")) {
    alert("Chỉ được nhập file jpeg");
    return;
  }
  if (file.size / (1024 * 1024) > 5) {
    alert("Chỉ được nhập file <= 5mb");
    return;
  }

  preview.innerHTML = `
    <img src="${URL.createObjectURL(file)}" alt="">`;
});

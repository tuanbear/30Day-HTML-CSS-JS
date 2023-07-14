const btn = document.querySelectorAll(".btn_show");
const toastBlock = document.getElementById("toast");

btn.forEach((item) => {
  item.onclick = () => {
    switch (item.getAttribute("name")) {
      case "success":
        addToast(
          {
            message: "This is a success message!",
            status: "success",
            iconClass: "fa-solid fa-circle-check",
          },
          8,
          1.5
        );
        break;
      case "warning":
        addToast(
          {
            message: "This is a warning message!",
            status: "warning",
            iconClass: "fa-solid fa-circle-exclamation",
          },
          8,
          1.5
        );
        break;
      case "error":
        addToast(
          {
            message: "This is a error message!",
            status: "error",
            iconClass: "fa-solid fa-triangle-exclamation",
          },
          8,
          1.5
        );
        break;
    }
  };
});

function addToast(
  { message = "", status = "", iconClass = "" },
  duration = 5,
  speed = 2
) {
  let toast = document.createElement("div");

  toast.setAttribute("class", `toast_mess mess_${status}`);

  toast.innerHTML = `
  <i class="${iconClass}"></i>
  ${message}
  <span class="count_down count_down-${status}"></span>`;

  toast.style.animation = `slideShow ${speed}s ease-in-out forwards`;

  let countDown = toast.querySelector(".toast_mess .count_down");
  countDown.style.animation = `countDown ${duration}s ${
    speed - 0.5
  }s linear forwards`;

  toastBlock.appendChild(toast);

  setTimeout(() => {
    toast.style.animationName = "slideHide";
    setTimeout(() => {
      toast.remove();
    }, speed * 800);
  }, duration * 1000 + (speed - 0.5) * 1000);
}

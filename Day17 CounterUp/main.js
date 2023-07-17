const counterUp = document.querySelectorAll(".box .number");

counterUp.forEach((item) => {
  let count = 0;
  let number = Math.round(item.innerText);
  let step = Math.round(number / 100);

  const counting = setInterval(() => {
    count += step;
    if (count >= number) {
      item.innerText = number;
      clearInterval(counting);
    } else {
      item.innerText = count;
    }
  }, 5);
});

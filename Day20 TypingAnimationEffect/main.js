const typing = document.querySelector("#typing_text p");

var typingText = typing.innerHTML;
var index = 0;
var lengthText = typingText.length;
var isForward = true;
var time = 200;

function handleText(time) {
  const myVar = setInterval(() => {
    if (isForward) {
      index++;
      if (index >= lengthText) {
        clearInterval(myVar);
        setTimeout(() => {
          isForward = false;
          handleText(50);
        }, 2000);
      }
    } else {
      index--;
      if (index <= 0) {
        isForward = true;
        clearInterval(myVar);
        handleText(200);
      }
    }
    typing.innerHTML = typingText.substring(0, index);
  }, time);
}
handleText(time);

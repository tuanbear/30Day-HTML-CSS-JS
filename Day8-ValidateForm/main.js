const form = document.querySelector("form");
const formGroup = document.querySelectorAll(".form__group");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let password = "";

  formGroup.forEach((item, index) => {
    let input = item.querySelector("input");
    let inputEmail = item.querySelector('input[type="text"][name="email"]');
    let inputPassword = item.querySelector(
      'input[type="password"][name="password"]'
    );
    let inputConfirmPassword = item.querySelector(
      'input[type="password"][name="confirm password"]'
    );

    input.oninput = () => showSuccess(item);

    if (!input.value.trim()) {
      showError(item, "Vui lòng nhập đầy đủ thông tin");
    } else {
      showSuccess(item);

      if (inputEmail) {
        checkEmail(
          inputEmail.value.trim(),
          item,
          "Vui lòng nhập đúng trường email"
        );
      }

      if (inputPassword) {
        password = inputPassword.value.trim();
        let min = 6;
        let max = 20;
        checkPassword(
          inputPassword.value.trim(),
          item,
          min,
          max,
          `Mật khẩu chứa ${min} đến ${max} ký tự`
        );
      }

      if (inputConfirmPassword) {
        checkConfirmPassword(
          password,
          inputConfirmPassword.value.trim(),
          item,
          "Mật khẩu không trùng khớp"
        );
      }
    }
  });
});

showSuccess = (formGroup) => {
  formGroup.classList.remove("error");
  formGroup.querySelector(".messenger").innerText = "";
};

showError = (formGroup, messenger) => {
  formGroup.classList.add("error");
  formGroup.querySelector(".messenger").innerText = messenger;
};

checkEmail = (emailValue, formGroup, messenger) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(emailValue)
    ? showSuccess(formGroup)
    : showError(formGroup, messenger);
};

checkPassword = (passwordValue, formGroup, min, max, messenger) =>
  passwordValue.length < min || passwordValue.length > max
    ? showError(formGroup, messenger)
    : showSuccess(formGroup);
checkConfirmPassword = (password, passwordConfirm, formGroup, messenger) =>
  password === passwordConfirm
    ? showSuccess(formGroup)
    : showError(formGroup, messenger);

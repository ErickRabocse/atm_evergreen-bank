const userCheck = "erick";
const passwordCheck = "111";
const form = document.querySelector(".form");

function showError(typeOfError) {
  let error = document.querySelector(`.${typeOfError}__error `);

  error.classList.remove("hide");
  error.classList.add("error");
  setTimeout(() => {
    error.classList.remove("error");
    error.classList.add("hide");
  }, 2000);
}

let submit = (evento) => {
  evento.preventDefault();
  let userInput = document.querySelector(".form__username").value;
  let passwordInput = document.querySelector(".form__password").value;
  // validar(user, password);
  if (validar(userInput, passwordInput)) {
    let userBox = document.querySelector(".form__username");
    let passwordBox = document.querySelector(".form__password");
    userBox.value = "";
    passwordBox.value = "";
    window.open("./atm.html", "_blank");
    // window.location.href = "./atm.html";
  }
};

let validar = (us, pass) => {
  if (us === userCheck && pass === passwordCheck) {
    console.log("Welcome!");
    return true;
  } else if (us !== userCheck && pass === passwordCheck) {
    showError("username");
    return;
  } else if (pass !== passwordCheck && us === userCheck) {
    showError("password");
    return;
  } else {
    showError("username");
    showError("password");
    return;
  }
};

form.addEventListener("submit", submit);

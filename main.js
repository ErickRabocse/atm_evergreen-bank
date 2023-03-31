const users = [
  {
    userCheck: "erick",
    passCheck: "001",
  },
  {
    userCheck: "tatto",
    passCheck: "002",
  },
  {
    userCheck: "kuma",
    passCheck: "003",
  },
  {
    userCheck: "hana",
    passCheck: "004",
  },
  {
    userCheck: "guri",
    passCheck: "005",
  },
];
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
  for (let i = 0; i < users.length; i++) {
    if (us === users[i].userCheck && pass === users[i].passCheck) {
      console.log("Welcome!");
      return true;
    } else if (us !== users[i].userCheck && pass === users[i].passCheck) {
      showError("username");
      break;
    } else if (pass !== users[i].passCheck && us === users[i].userCheck) {
      showError("password");
      break;
    }
  }
};

form.addEventListener("submit", submit);

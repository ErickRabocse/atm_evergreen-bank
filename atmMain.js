//GREETING LOGIC
const partOfDay = document.querySelector(".header");
const usuario = localStorage.getItem("user");
//JS TIME TELLER
const options = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "America/Mexico_City",
};
let formatter = new Intl.DateTimeFormat([], options);
let currentTime = formatter.format(new Date()).toString().slice(0, 2);

//GREETING LOGIC
function greetingMessage() {
  if (currentTime < 12) {
    partOfDay.innerText = `Good morning ${
      usuario.slice(0, 1).toUpperCase() + usuario.slice(1)
    }`;
  } else if (currentTime >= 12 && currentTime <= 19) {
    partOfDay.innerText = `Good afternoon ${
      usuario.slice(0, 1).toUpperCase() + usuario.slice(1)
    }`;
  } else if (currentTime > 19) {
    partOfDay.innerText = `Good evening ${
      usuario.slice(0, 1).toUpperCase() + usuario.slice(1)
    }`;
  }
}
greetingMessage();

//ATM LOGIC
let movementNotification = document.querySelector(".notification");
let balance = document.querySelector(".section__balance--input");
let depositBtn = document.querySelector(".section__deposit");
let drawBtn = document.querySelector(".section__withdrawal");

class Account {
  constructor(balance) {
    this.balance = balance;
  }
  details() {
    return this.balance;
  }
  add(amount) {
    return (this.balance += Number(amount));
  }
  rest(amount) {
    return (this.balance -= Number(amount));
  }
}
const dinero = parseInt(localStorage.getItem("money"));
const account1 = new Account(dinero);

//Initializing balance initial amount
// balance.value = account1.details();
balance.value = localStorage.getItem("money");

function add() {
  let depositBox = document.querySelector(".section__deposit--input");
  let deposit = document.querySelector(".section__deposit--input").value;

  if (Number(account1.details()) + Number(deposit) <= 990) {
    account1.add(deposit);
    balance.value = account1.details();
    localStorage.setItem("money", balance.value);
    movementNotification.innerText = `You made a deposit of ${deposit} pesos.`;
    depositBox.value = "";
    return;
  } else {
    movementNotification.innerText = `Your balance cannot exceed 990 pesos.`;
    depositBox.value = "";
  }
}
function reduce() {
  let drawBox = document.querySelector(".section__withdrawal--input");
  let draw = document.querySelector(".section__withdrawal--input").value;
  if (balance.value - draw < 10) {
    movementNotification.innerText = `Your balance cannot be less than 10 pesos.`;
    drawBox.value = "";
    return;
  } else {
    account1.rest(draw);
    drawBox.value = "";
    balance.value = account1.details();
    localStorage.setItem("money", balance.value);
    movementNotification.innerText = `You made a withdrawal of ${draw} pesos.`;
    drawBox.value = "";
    return;
  }
}

depositBtn.addEventListener("click", add);
drawBtn.addEventListener("click", reduce);

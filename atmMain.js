//GREETING LOGIC
const partOfDay = document.querySelector(".header");

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
    partOfDay.innerText = "Good morning";
  } else if (currentTime >= 12 && currentTime <= 19) {
    partOfDay.innerText = "Good afternoon";
  } else if (currentTime > 19) {
    partOfDay.innerText = "Good evening";
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
    // console.log(this.balance);
    return this.balance;
  }
  add(amount) {
    return (this.balance += Number(amount));
  }
  rest(amount) {
    return (this.balance -= Number(amount));
  }
}

const account1 = new Account(100);
// account1.add(1000);
// account1.rest(500);
// account1.details();

//Initializing balance initial amount
balance.value = account1.details();

function add(e) {
  //   e.preventDefault();
  let depositBox = document.querySelector(".section__deposit--input");
  let deposit = document.querySelector(".section__deposit--input").value;

  if (Number(account1.details()) + Number(deposit) <= 990) {
    account1.add(deposit);
    balance.value = account1.details();
    movementNotification.innerText = `You made a deposit of ${deposit} pesos.`;
    depositBox.value = "";
    return;
  } else {
    movementNotification.innerText = `Your balance cannot exceed 990 pesos.`;
    depositBox.value = "";
  }
}
function reduce(e) {
  //   e.preventDefault();
  let drawBox = document.querySelector(".section__withdrawal--input");
  let draw = document.querySelector(".section__withdrawal--input").value;

  if (balance.value - draw < 10) {
    movementNotification.innerText = `You balance cannot be less than 10 pesos.`;
    drawBox.value = "";
    return;
  } else {
    account1.rest(draw);
    drawBox.value = "";
    balance.value = account1.details();
    movementNotification.innerText = `You made a withdrawal of ${draw} pesos.`;
    drawBox.value = "";
    return;
  }
}

depositBtn.addEventListener("click", add);
drawBtn.addEventListener("click", reduce);

//GREETING LOGIC
const partOfDay = document.querySelector(".header__dayTime");
console.log(partOfDay);

//ATM LOGIC

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
  account1.add(deposit);
  depositBox.value = "";
  balance.value = account1.details();
  return;
}
function reduce(e) {
  //   e.preventDefault();
  let drawBox = document.querySelector(".section__withdrawal--input");
  let draw = document.querySelector(".section__withdrawal--input").value;
  account1.rest(draw);
  drawBox.value = "";
  balance.value = account1.details();
  return;
}

depositBtn.addEventListener("click", add);
drawBtn.addEventListener("click", reduce);

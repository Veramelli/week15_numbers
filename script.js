const btn = document.querySelector("button");
const numbers = document.querySelector(".number");
const numbersItem = document.querySelector(".numbers");
const countItem = document.querySelector(".count");
const totalItem = document.querySelector(".total");
const reverseItem = document.querySelector(".reverse");

btn.addEventListener("click", (e) => {
  numbersItem.textContent = "";
  countItem.textContent = "";
  totalItem.textContent = "";

  let arr = numbers.value.split("");

  let sum = 0;

  arr.forEach((el) => {
    numbersItem.textContent += ` ${el}`;

    sum += +el;
  });

  let count = numbers.value.length;
  countItem.textContent += ` ${count}`;

  totalItem.textContent += ` ${sum}`;

  reverseItem.textContent = arr.reverse();

  numbers.value = "";
});

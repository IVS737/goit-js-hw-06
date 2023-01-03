let counterValue = 0;

const btnInc = document.querySelector('button[data-action ="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');
const counterNum = document.querySelector("#value");

btnInc.addEventListener("click", () => {
  counterValue += 1;
  counterNum.textContent = counterValue;
});

btnDec.addEventListener("click", () => {
  counterValue -= 1;
  counterNum.textContent = counterValue;
});

const numberString = document.querySelector("#value");
const btnInc = document.querySelector('button[data-action ="increment"]');
const btnDec = document.querySelector('button[data-action="decrement"]');

btnInc.addEventListener("click", () => {
  Number((numberString.textContent += 1));
});
btnDec.addEventListener("click", () => {
  Number((numberString.textContent -= 1));
});

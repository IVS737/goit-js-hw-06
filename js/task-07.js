const input = document.querySelector("#font-size-control");
console.log(input);
const text = document.querySelector("#text");
console.log(text.textContent);

input.addEventListener("change", (event) => {
   text.style.fontSize = event.currentTarget.value + "px";
});
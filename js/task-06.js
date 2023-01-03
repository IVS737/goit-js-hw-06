const input = document.querySelector("#validation-input");
console.log(input);
const dataLength = 6;

input.addEventListener("blur", borderChange);

function borderChange() {
  if (input.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

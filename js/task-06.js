const input = document.querySelector("#validation-input");
console.log(input);
const dataLength = 6;
console.log(dataLength);
input.addEventListener("blur", borderChange);

function borderChange() {
  if (input.value.length <= dataLength) {
    input.style.borderColor = "#4caf50";
  } else {
    input.style.borderColor = "#f44336";
  }
}

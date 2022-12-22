const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");

input.addEventListener("input", textChange);

function textChange() {
  text.textContent = input.value;
  if (input.value === "") {
    text.textContent = "Anonymus";
  }
}

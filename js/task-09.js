const button = document.querySelector(".change-color");
console.log(button);
const color = document.querySelector(".color");
console.log(color);
const body = document.querySelector("body");
console.log(body);

button.addEventListener("click", bgChange);

function bgChange() {
  const bgColor = (body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
  color.textContent = bgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
console.log(button);
const area = document.querySelector(".widget");
console.log(area);
const color = document.querySelector(".color");
console.log(color);

button.addEventListener("click", bgChange);

function bgChange() {
  const bgColor = (area.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
  color.textContent = bgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

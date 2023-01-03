const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listItems = [];
const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const listItem = document.createElement("li");

  listItem.textContent = element;
  listItem.style = "item";

  listItems.push(listItem);
});

list.append(...listItems);

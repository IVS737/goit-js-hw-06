const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listItems = document.createElement("li");
const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const listItems = document.createElement("li");
  listItems.textContent = element;
  listItems.style = "item";
  list.append(listItems);
});

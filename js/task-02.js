const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const listItem = document.createElement("li");
listItem.textContent = "Potatoes";
list.prepend(listItem);

const secondListItem = document.createElement("li");
secondListItem.textContent = "Mushrooms";
list.prepend(secondListItem);

const thirdListItem = document.createElement("li");
thirdListItem.textContent = "Garlic";
list.prepend(thirdListItem);

const fourthListItem = document.createElement("li");
fourthListItem.textContent = "Tomatos";
list.prepend(fourthListItem);

const fifthListItem = document.createElement("li");
fifthListItem.textContent = "Herbs";
list.prepend(fifthListItem);

const sixsListItem = document.createElement("li");
sixsListItem.textContent = "Condiments";
list.prepend(sixsListItem);
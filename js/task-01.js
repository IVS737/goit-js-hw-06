const list = document.querySelector("#categories");
const categoriesLength = list.childElementCount;
console.log("Number of categories:", categoriesLength);
const li = document.querySelectorAll(".item");

for (const item of li) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.childElementCount);
}

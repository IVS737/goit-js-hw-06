const list = document.querySelector("ul");
console.log("Number of categories:", list.childElementCount);

//1 child
const firstChild = list.firstElementChild;
const firstChildArticle = firstChild.firstElementChild.textContent;
console.log("Category:", firstChildArticle);
const firstChildElements = firstChild.lastElementChild.childElementCount;
console.log("Elements:",firstChildElements);
 
//2 child
const secondChild = list.firstElementChild.nextElementSibling;
const secondChildArticle = secondChild.firstElementChild.textContent;
console.log("Category:", secondChildArticle);
const secondChildElements = secondChild.lastElementChild.childElementCount;
console.log("Elements:", secondChildElements);

//3 child
const thirdChild = list.lastElementChild;
const thirdChildArticle = thirdChild.firstElementChild.textContent;
console.log("Category:", thirdChildArticle);
const thirdChildElements = thirdChild.lastElementChild.childElementCount;
console.log("Elements:",thirdChildElements);

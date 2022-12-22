const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector(".gallery");
console.log(list);

//1
const firstImg = document.createElement("img");
firstImg.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
firstImg.alt = 'White and Black Long Fur Cat';
console.log(firstImg);
const listItemFirst = document.createElement("li");
list.append(listItemFirst);
listItemFirst.append(firstImg);

//2
const secondImg = document.createElement("img");
secondImg.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
secondImg.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
const listItemSecond = document.createElement("li");
list.append(listItemSecond);
listItemSecond.append(secondImg);

//3
const thirdImg = document.createElement("img");
thirdImg.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
thirdImg.alt = 'Group of Horses Running';
const listItemThird = document.createElement("li");
list.append(listItemThird);
listItemThird.append(thirdImg);

//css
firstImg.style.width = "400px";
secondImg.style.width = "400px";
thirdImg.style.width = "400px";
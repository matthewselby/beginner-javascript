console.log(`creating.js is working 🎉`);

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a brand new p 🎉';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.alt = 'my super cool image';
myImage.src = 'https://source.unsplash.com/random/100x100';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// appendChild
// method that adds a node to the end of a list
// document.body.appendChild(myParagraph);

// ideally append/create your HTML here in memory and then append in one command
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const myHeading = document.createElement('h2');
myHeading.textContent = '🔥 cool h2 heading 🔥';
myDiv.insertAdjacentElement('beforebegin', myHeading);

// List creation challenge
// create the ul
const myList = document.createElement('ul');
// create the items
const listOne = document.createElement('li');
listOne.textContent = '🎳 1 🎳';
const listTwo = document.createElement('li');
listTwo.textContent = '🥕 2 🥕';
const listThree = document.createElement('li');
listThree.textContent = '🦄 3 🦄';
const listFour = document.createElement('li');
listFour.textContent = '🐳 4 🐳';
const listFive = document.createElement('li');
listFive.textContent = '🚀 5 🚀';
// add them in order to the page
myList.append(listThree);
myList.insertAdjacentElement('afterbegin', listTwo);
myList.insertAdjacentElement('beforeend', listFour);
myList.insertAdjacentElement('afterbegin', listOne);
myList.append(listFive);
document.body.appendChild(myList);

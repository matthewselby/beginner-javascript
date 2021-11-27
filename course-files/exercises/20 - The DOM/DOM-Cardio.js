// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('.wrapper');

// put it into the body
document.body.append(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const itemOne = document.createElement('li');
itemOne.textContent = 'One';
const itemTwo = document.createElement('li');
itemTwo.textContent = 'Two';
const itemThree = document.createElement('li');
itemThree.textContent = 'Three';
myList.append(itemThree);
myList.insertAdjacentElement('afterbegin', itemOne);
itemThree.insertAdjacentElement('beforebegin', itemTwo);

// put that list into the above wrapper
myDiv.append(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://source.unsplash.com/random/500x500';

// set the width to 250
myImg.width = 250;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.append(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div>
    <p>p1</p>
    <p>p2</p>
  </div>
`;

// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
myDiv.firstElementChild.lastElementChild.classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
    const html = `
        <div class="playerCard">
          <h2>${name} - ${age}</h2>
          <p>They are ${height} and ${age} years old. In dog years this person would be ${
        age * 7
    }. That would be a tall dog!</p>
          <button class="removeMe" type=button">delete</button>
        </div>
    `;
    return document.createRange().createContextualFragment(html);
}

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const jerry = generatePlayerCard('Jerry', 32, '6 feet');
const barry = generatePlayerCard('Barry', 28, '5 foot, 6 inches');
const ryan = generatePlayerCard('Ryan', 22, 'short');
const bob = generatePlayerCard('Bob', 44, '7 feet');

// append those cards to the div
newDiv.append(jerry, barry, ryan, bob);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.removeMe');
console.log(buttons);

// make out delete function
function deleteCard() {
    this.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttons.forEach((button) => {
    button.addEventListener('click', deleteCard);
});

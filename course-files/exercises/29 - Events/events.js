console.log('🦄 events.js is working 🦄');

const butts = document.querySelector('.butts');

// this creates a callback function
// a function that we pass to a method that will be called at a later time
// three steps
// get something, listen for something, do something
butts.addEventListener(`click`, () => {
    console.log('it got clicked!');
});

// can create the function outside the event listener and then call it

function myClickFunction() {
    console.log('my new and improved clicker!!!!');
}

butts.addEventListener('click', myClickFunction);

// remove an event listener
// notice how only the first one shows now
// if you ever want to remove the event listener function then it must be a named function or an arrow function
butts.removeEventListener('click', myClickFunction);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyLog() {
    const item = this.innerText.replace('buy ', '');
    console.log(`💰 Buying ${item}! 💰`);
}

buyButtons.forEach((button) => {
    button.addEventListener('click', buyLog);
});

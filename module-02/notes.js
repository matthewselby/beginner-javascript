// testing arrow functions

// og anonomous function
function add(a, b = 3) {
    const total = a + b;
    return total;
}
// refactor to arrow function
const arrowAdd = (a, b = 3) => a + b;

// return an object
// anonomous function
function makeABaby(first, last) {
    return {
        name: `${first} ${last}`,
        age: 0,
    };
}
// refactor to arrow function
const newMakeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
//
(function () {
    console.log(`something super cool to share immediately.`);
    return `you are so cool.`;
})();

// METHODS!!
// methods are functions that live inside of an object
const matt = {
    name: `Matt Selby`,
    // method
    sayHi() {
        console.log(`Hey Matt`);
        return `Hey Matt`;
    },
    // short hand method
    shortHi() {
        console.log(`hey`);
    },
    // arrow function
    arrowHi: () => {
        console.log(`hey matt, i'm an arrow`);
    },
};

// CALLBACK FUNCTIONS
// something that will happen when something is done
// when something is clicked, run this
// when something is done, run this
const button = document.querySelector('.clickme');

function handleClick() {
    console.log(`Great Clicking!`);
}

button.addEventListener('click', handleClick);

// timer callback'
setTimeout(matt.sayHi, 1000);

setTimeout(() => {
    console.log(`Time to eat!`);
}, 2000);

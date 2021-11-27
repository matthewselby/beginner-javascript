/// /// selecting HTML Elements
// we first need to select the element
// then we can do all sorts of stuff with it - modify the content, add stuff, remove stuff, etc.
// we can select with two differnt methods on the document
// querySelector will grab the first instance of the selector
// querySelectorAll will grab all the instances of the selector
// const p = document.querySelector('p');
// console.log(p);
// const allP = document.querySelectorAll('p');
// console.log(p);

/// /// once you have an element, what can you do with it?
// const heading = document.querySelector('h2');
// heading.textContent = 'I am so cooooool.';
// console.log(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textcontent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍔');
// pizzaList.insertAdjacentText('afterbegin', '🚀');
// pizzaList.insertAdjacentText('beforeend', '🌭');

/// /// working with Classes!
// const pic = document.querySelector('.nice');
// pic.classList.add('new');
// pic.classList.remove('nice');
// // pic.classList.toggle('round');
// console.log(pic.classList);

// toggle a class on click!
// function toggleRound() {
//     pic.classList.toggle('round');
// }
// pic.addEventListener('click', toggleRound);

// find out if something is active or not - true/false
// pic.classList.contains('round')

/// /// working with Attributes
// anything added to an element as additional info
// const pic2 = document.querySelector('img.nice');
// console.log(pic2);
// pic2.alt = 'cool pic2';
// console.log(`strait asking for the naturalWidth = ${pic2.naturalWidth}`);
// pic2.addEventListener('load', () => {
//     console.log(`naturalWidth after listinging for load = ${pic2.naturalWidth}`);
// });

// set non0standard attributes
// these are attributes that are not HTML standard attributes
// pic2.setAttribute('cool-new-atr', 'really really cool atr');

// don't make up your own attributs
// use data attributes
// data-anythingHere
// console.log(pic2.dataSet);

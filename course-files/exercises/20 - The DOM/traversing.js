console.log('🚀🚀 traversing.js is working 🚀🚀');

const wes = document.querySelector('.wes');

console.log(wes.children);
console.log(wes.childNodes);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// remobing elements
wes.remove();

// but it's still here - it's not gone forever
console.log(wes);

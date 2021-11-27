console.log(`🔥 this is creating-with-strings.js 🔥`);

const width = 500;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `random unsplash image`;
const myHTML = `
  <div class ='wrapper'>
    <h2>Awesome ${desc}</h2>
    <img src='${src}' alt='${desc}'/>
  </div>
`;

// const item = document.querySelector('.item');

// item.innerHTML = myHTML;

// `const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');`

// turn a string into a DOM Element
const myFragment = document.createRange().createContextualFragment(myHTML);

// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

document.body.appendChild(myFragment);

/// /// Security and Sanitization
// XSS vulnerbility
// ...gonna go into it in the security video

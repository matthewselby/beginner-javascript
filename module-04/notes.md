# The DOM - working with HTML and CSS

[simple Dad Tax Calculator](https://codepen.io/matthewselby/pen/dyPNoPp)
[The DOM - Cardio](https://codepen.io/matthewselby/pen/qBdZxod?editors=0011)
[MDN Document API](https://developer.mozilla.org/en-US/docs/Web/API/Document)

We talked about the `window` which handles what's going on in the browser or the global scope. The `document` or Document Object Model handles everything on the page or document.

## Selecting Elements

[MDN QuerySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
[MDN getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

Ensure that JS fires after the DOM is loaded. Could also wrap code in an `eventListener` if the DOM won't be ready before JS runs.

```js
// get all p elements
const p = document.querySelectorAll(`p`);
// get the first p element
const firstP = document.querySelector(`p`);
// get all p elements with the class of .cool
const allCoolP = document.querySelectorAll(`p.cool`);
// get element with the id #cool
const cool = document.querySelector(`#cool`);
// or
const stillCool = document.getElementById(`cool`);
```

## Element Properties and Methods

[MDN DOM Property Viewer](https://developer.mozilla.org/en-US/docs/Tools/DOM_Property_Viewer)
[MDN Element - see Methods for list of what we can use to modify elements with JS](https://developer.mozilla.org/en-US/docs/Web/API/Element)
[MDN Node - some Mehtods can be found here as they are also availble to the node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

Really interesting `textContent` vs `innerText`:

**`textContent`** will give us all elements in the node including code.
**`innerText`** will only give us human readable elements. Will also exclude hidden elements.

## Working with Classes

[MDN Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

```js
// add a class
someElement.classList.add(`new`);
// remve a class
someElement.classList.remove(`lame`);
// toggle a class
someElement.classList.toggle(`cool`);
// add an evenetListener so that the class toggles on click 🔥
// function for toggle
const toggleCool = => someElement.classList.toggle(`cool`);
// click eventListener
someElement.addEventListener(`click`, toggleCool);
```

## Build in and Custom Data Attributes

[MDN Attribute Refrence](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

[MDN Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

You can modify element attributes like you can with classes. If you need to use custom attributes then you should create a new `data` attribute - `data-customName`. You can then get an object of all the data attibutes on an element with `element.dataset`.

## Creating HTML

[MDN create element](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)

```js
// create and element
const myElement = document.createElement(`p`);
// ...now we have an empty element...lets add some more stuff to it
// add some content
myElement.textContent = `I am a new element created with Javascript!`
// add a class
myElement.classList.add(`neat`);

// create an image
const myImage = document.createElement(`img`);
myImage.src = `https://somedomain.com/mycoolimage.jpeg`;
myImage.alt = `cool photo`;

// actually add it to the HTML
document.body.appendChild(`myImage`);
```

challenge - create an unordered list with five list items:

```js
const ul = document.createElement(`ul`);

const one = document.createElement(`li`);
one.textContent = `One`;

const two = document.createElement(`li`);
two.textContent = `Two`;

const three = document.createElement(`li`);
three.textContent = `Three`;

const four = document.createElement(`li`);
four.textContent = `Four`;

const five = document.createElement(`li`);
five.textContent = `Five`;

ul.appendChild(one);
ul.appendChild(five);
one.insertAdjacentElement(`beforeend`, two)
two.insertAdjacentElement(`afterend`, three);
five.insertAdjacentElement(`beforebegin`, four);

document.body.appendChild(ul);
```

## HTML from Strings and XSS

You can create HTML or templates with strings using backticks. These can be added to the documnent but will be a string and not selectable elements...to get the HTML into the document as elements you can `createContextualFragment()`.

```js
// let's create our template string
const title = `My cool title!`;
const imgURL = `https://picsum.photos/500`;
const imgAlt = `yummy food`;
const myHTML = `
  <div class="cool">
    <h2>${title}</h2>
    <p>Pretty Neat!</p>
    <img src="${imgURL}" alt="${imgAlt}"/>
  </div>
`;
// now we can add this to our document
const placeToInject = document.querySelector(`#someID`);
placeToInject.innerHTML = myHTML;
console.log('myHTML');
// ok great, we've replaced the innerHTML of that element with that ID with the string template we created...but it's still just a string.
// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
// now they are DOM elements within a document-fragment
console.log(myFragment.querySelector(`img`));
// returns the img element within our myHTML 🎉
// we can now do all the other JS things on these DOM elements
const imgInMyHTML = myFragment.querySelector(`img`);
imgInMyHTML.classList.add(`round`);
```

## Traversing and Removing Nodes

[MDN Node Web API](https://developer.mozilla.org/en-US/docs/Web/API/Node)
[MDN Elment Web API](https://developer.mozilla.org/en-US/docs/Web/API/Element)
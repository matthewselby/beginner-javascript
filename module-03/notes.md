# The Tricky Bits

## Scope

[MDN Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
[Demystifying Variable Scope](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)

### Global Scope

Variables in the Global Scope usually isn't a good idea. Totally fine for playground/codepen work but variables on the global scope can overlap each other.

### Block Scope

[what is a Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

Variables inside a block are only available to the block. Good to note that only `const` and `let` variables are Block Scoped, `var` variables are Function Scoped.

### Function Scope

[MDN Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)

Just like variables, functions are scoped to their block.

## Hoisting

[MDN Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

Allows you to access functions and variables before they've been created. Side note - only works with normal function declarations...not functions in variables, not arrow functions, etc.

```js
// running a function before it exists...it works because JS hoists functions to the top of your file
sayHi();

function sayHi() {
  conosle.log(`Hey!`);
}
```

## Closures

[MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

The ability to access a parent level scope from a child scope even after the parent function has been closed/terminated. What that means is that when you have a function within a function, the inner function still has access to the scope of the outer function. A Closure can make the creation of very similar functions ultra-efficient.

```js
function createGreeting(greeting = ``) {
  const myGreeting = greeting.toUpperCase();
  return function(name) {
    return `${myGreeting} ${name}`;
  }
}

const sayHello = createGreeting(`hello`);
const sayHey = createGreeting(`hey`);
console.log(sayHello(`bob`));
console.log(sayHey(`bob`));
```

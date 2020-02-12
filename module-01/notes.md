# The Basics

1. [How to run Javascript](#running-and-loading-javascript)
2. [Variables and Statements](#variables)
3. [Tooling - Prettier and ESLint](#tooling-with-prettier-and-eslint)
4. [Types](#types)

---

## Running and loading Javascript

[JavaScript Where To](https://www.w3schools.com/js/js_whereto.asp)

- in a browser's **Console**
- inside a **script tag** in the body of an HTML doccument
  - probably best to run scripts at the end, just before the closing `body` tag
- in an internal or external **Javascript file**
  - refrence a script: `<script src="./example.js"></script>`
- in **NodeJS**

### Notes about `script` tags

- probably best to place just before the closing `body` tag
  - so your scripts may refrence the dome that has loaded before it
    - this is also render blocking, your scripts will load even if they do nothing and will hold up other parts of your page to laod
- `script` tags are not self closing like other HTML elements
  - please don't put any Javascript inside a script tag that is refrencing external Javascript

```html
<html>
  <head>

  <title>The Basics</title>

  // js can go here
  <script>
    console.log("js in head");
  </script>

  </head>

  <body>

  <h1>hello world</h1>

  // JS before the closing body tag
  <script src="javascript.js"></script>
  </body>
</html>

```

---

## Variables

[JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

### Variable Declaration

>Creating a variable in JavaScript is called "declaring" a variable.

### Different ways to declare a variable

TL;DR - use `const` by default, `let` when you need to and use camelCase notation.

- `var`
- `let`
- `const`

```js
// function scoped
var name = "Matt";
// block scoped
let age = 300;
const cool = true;

// camelCase
const iLovePizza = true;
// UpperCamelCase
const ILoveToEatHotDogs = false;
// snake case
const this_is_snake_case = "cool";

// update variables
// you cannot update const variables like we do below for var and let
name = "definitely not Matt";
age = 200;
```

### Statements

[JavaScript Statements](https://www.w3schools.com/js/js_statements.asp)

---

## Tooling with Prettier and ESLint

[GitHub - wesbos/eslint-config-wesbos: No-Sweat™ Eslint and Prettier Setup - with or without VS Code](https://github.com/wesbos/eslint-config-wesbos)

Super helpful when working with others to enforce/keep uniform code. Also great on your own to format and troubleshoot conflicts in code.

### ESLint

[ESLint - Pluggable JavaScript linter](https://eslint.org/)

>Find and fix problems in your JavaScript code

### Prettier

[Prettier · Opinionated Code Formatter](https://prettier.io/)

---

## Types

>SNOB'N'US

- [String](#string)
- [Number](#number)
- [Boolean](#boolean)
- [Null](#null)
- [Undefined](#undefined)
- [Symbol](#symbol)
- [Object](#object)

### String

>used for holding text

strings can use:

- single quotes `''`
- double quotes `""`
- backticks ``` `` ```

Escape using `\` - in those cases, might be best to use backticks.

#### Concatination

> joining two or more things together

#### interpolation

> inserting a variable into a string

```js
const string1 = 'single quotes';
const string2 = "double quotes";
const string3 = `backticks`;

// concatination
const newString = string1 + string2;
const string4 = "Pizza is rad." + " " + "Hot dogs are not.";

// interpolation
const nameFirst = "Matthew";
const greeting = `Good morning ${nameFirst}.`;
```

### Number

Javascript only has one type of Number "some other languages have different types for integers, floats, etc."

Be careful with addition...if one of the values is a string then it will concatinate them together instead of adding.

```js
const addition = 1 + 1;

// = 2

const concatination = 1 + "1";

// = 11
```

Hot tip: When working with money, don't use decimals/floats but rather convert everything into cents. So if the number you are working with is `$12.48` convert that to `1248` before working with it and add the decimal back when you're done.

```js
// working with money

// don't do this

let price = 10.24;

// do this - store money in whole numbers (cents)

let price = 1024;

```

Also good to know...all of these are numbers in JS:

- integers
- floats
- infinity
- -infinity
- NaN

#### Basic Operators

- addition `+` `+=`
- subtraction `-` `-=`
- multiplication `*` `*=`
- division `/` `/=`
- modulous "remainder of something" `%` `%=`
- incrimentor `++`
- decrimator `--`

#### Comparison operators

- equal to `==`
- equal value and equal type "strict" `===`
- not equal `!=`
- not equal value and not equal type `!==`
- greater than `>`
- less than `<`
- greater than or equal to `>=`
- less than or equal to `<=`
- and `&&`
- or `||`
- not `!`

### Boolean

### Null

### Undefined

Used to express *nothing* in Javascript. When you try to access a variable that has been created but not set. It is not defined or does not exist.

```js

const person = {
  first: 'hot';
  last: 'dog';
  age: '2';
}

// accessing a variable that does not exist
console.log(hamburger);
// returns undefined

// accessing properties on something that doesn't exist
console.log(person.dog);
// returns undefinded

```

### Symbol

### Object

[JavaScript Objects](https://www.w3schools.com/jS/js_objects.asp)

Objects are the biggest building block in Javascript. When you use an object in Javascript, you're wanting to group things together

```js
const obj = {"key": "value", "key2": "another value"};

const person = {"name": "matthew", "age": 27, "eyeColor": "blue"};
```

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

  // js goes here

  </head>

  <body>
  // top of body

  <h1>hello world</h1>

  // JS at the bottom or footer
  // loading external JS
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

```javascript
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

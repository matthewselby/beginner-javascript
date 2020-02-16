// Dad Tax Calculator
// https://codepen.io/matthewselby/pen/dyPNoPp
// full view - https://codepen.io/matthewselby/full/dyPNoPp

// document.getElementById("demo").addEventListener("click", myFunction);

let numberKids = 0;
let candyPieces = 0;
let dadTax = 0;
let candyLeftOver = candyPieces - dadTax;
let candyForEachKid = candyLeftOver / numberKids;

function shareResults() {
  alert(
    `Dad Tax = ${dadTax}.
    That means dad gets ${dadTax} pieces of candy and there is ${candyLeftOver} pieces left over for the kids. Each Kid gets ${candyForEachKid} piece of candy.`
  );
}

function updateVars(kids, candy, tax) {
  candyLeftOver = candy - tax;
  candyForEachKid = candyLeftOver / kids;
  return [candyLeftOver, candyForEachKid];
}

function calculateDadTax(kids = numberKids, candy = candyPieces) {
  console.log(`Calculating Dad Tax "candy for Dad"!`);
  if (candy % kids === 0) {
    dadTax = kids;
    updateVars(kids, candy, dadTax);
    return [dadTax, shareResults()];
  }
  if (candy % kids !== 0) {
    dadTax = kids + (candy % kids);
    updateVars(kids, candy, dadTax);
    return [dadTax, shareResults()];
  }
  console.log(
    `This shouldn't happen...neither condition was met in calculateDadTax()!`
  );
}

function clicked() {
  console.log(`clicked`);
  numberKids = parseInt(document.getElementById(`kids`).value);
  candyPieces = parseInt(document.getElementById(`candy`).value);
  calculateDadTax();
}

document.getElementById(`calculate`).addEventListener('click', clicked);

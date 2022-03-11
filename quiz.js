let num1 = 8;
let num2 = 5;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// create four function: add(), subtract(), divide(), multiply()
// call the correct function when the user clicks on one of the buttons
// Perfom the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")
let symbolEl = document.getElementById("symbol-el")

function add() {
     let result = num1 + num2
     sumEl.textContent = "Sum: " + result
     symbolEl.textContent = "+"
} 

function subtract() {
     let result = num1 - num2
     sumEl.textContent = "Sum: " + result
     symbolEl.textContent = "-"
} 

function divide() {
     let result = num1 / num2
     sumEl.textContent = "Sum: " + result
     symbolEl.textContent = "/"
} 

function multiply() {
     let result = num1 * num2
     sumEl.textContent = "Sum: " + result
     symbolEl.textContent = "*"
} 

function remainder() {
     let result = num1 % num2
     sumEl.textContent = "Sum: " + result
     symbolEl.textContent = "%"
} 

function x() {
     let result = " "
     sumEl.textContent = "Sum: " + result
     symbolEl.textContent = "and"
}




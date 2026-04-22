/**
 * JavaScript variables are containers for data.
 *  JavaScript variables can be declared in 4 ways:
 *  Using let
 * Using const
 * Variables are labels for data values.
 * Variables are containers for storing data.

 * When to Use var, let, or const?
 * 1. Always declare variables
 *
 * 2. Always use const if the value should not be changed
 *
 * 3. Always use const if the type should not be changed (Arrays and Objects)
 *
 * 4. Only use let if you cannot use const
 *
 * 5. Never use var if you can use let or const.
  */

//Using the let
let x = 8;
let y = 8;
let z = x + y
console.log("the total is " + " " + z);

//using const
const a = 21;
const b = 20;
const  c = a + b;
console.log(c);


// =::: > Declaring JavaScript Variables
//creating a variable in js is called decaring

//declaration
let carName;

//Assigning
carName = "Volvo";

console.log(carName);

//const value does not change
const dataForCar = 'Toyota';
console.log(dataForCar);
//Attempt to assign to const or readonly variable
// dataForCar = carName;

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);
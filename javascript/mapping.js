//Closure in js is when a function "remembers variables from its outer scope even after that outer function has finished executing"

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());

function explainBetter() {
  let stringNum = "dalton";

  return function () {
    stringNum;
    return stringNum;
  };
}

const repeatIt = explainBetter();
console.log(repeatIt());

//This word
const user = {
  name: "Dalton",
  greet: function () {
    console.log(`Hi I am ${this.name}`);
  },
};

user.greet();

//This returns undefined value
const greetFunc = user.greet;
greetFunc();

//fixing with binding
const boundGreet = user.greet.bind(user);
boundGreet();

//call
const person = {
  name: "Sarah",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, Iam ${this.name}${punctuation}`);
  },
};
const anotherPerson = { name: "Mike" };
person.greet.call(anotherPerson, "Hi", "!");

//event loop
console.log("Hello World!");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("Third");

//Output first, third, second
// => setTimeout goes to task queue, runs after the main code

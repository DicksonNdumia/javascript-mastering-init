/// Array destructuring

const colors = ["Red", "green", "Yellow", "blue"];
const [first, second] = colors;

console.log(first);

/// Object destructuring
const person = {
  name: "John",
  age: 22,
  city: "Nairobi ",
};
const { name, age } = person;
console.log(name);

//wit function parameter
function printUser({ name, age }) {
  console.log(`My name ${name} and am ${age} years old`);
}
printUser(person);

//spread and rest operators
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

const person = {
  name: "John",
  age: 22,
  city: "Nyeri",
};

const updatedUser = { ...person, age: 30 };
console.log(updatedUser);

//Rest
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

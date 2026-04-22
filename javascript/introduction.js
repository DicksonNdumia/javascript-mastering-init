//Logging hello World!

console.log("Hello World!");



//adding and removing elements to arrays []


const  fruits = ['apple', 'Mangoes', 'Bananas'];
//checking if an element exists
console.log(fruits.includes('Bananas'))
console.log(fruits.includes('grapes'));
console.log("before adding", fruits);

//checking the index of an element
console.log(fruits.indexOf('Bananas'));
console.log(fruits.indexOf('Mangoes'));


//removing an element from the array
//Removing last element
fruits.pop();
console.log("after removing element at the end",fruits);

//removing the first element
fruits.shift();
console.log("after removing element at the start",fruits);




//add an element to the end
fruits.push("Grapes");

console.log("after  adding to the end",fruits);

//adding an element to the start of an element
fruits.unshift("Pear");
console.log("after  adding to the start",fruits);

//Iteration in arrays
const numbers = [1, 2, 3,  4];
//forEach() does not return anything
numbers.forEach(number => {
    console.log(number);
});

//map () returns the array of the result
const results = numbers.map(number => number + 2);
console.log(results);

const testData = ['John doe', "Mary Doe", "Mark Doug"]
//finding exact element
const index = testData.indexOf('John doe')
console.log(index); //0

const found = numbers.find(function (number) {
    return number > 3;
});

console.log(found);



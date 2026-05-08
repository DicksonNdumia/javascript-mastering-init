const numbers = [1, 2, 3, 4, 5, 6];

//Map methods
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

//fileter
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

//reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

//Synchronous code runs first
//The microtask like the promise runs second
//Then  the macrotask like the timeout run last
console.log("Starting....");

//Then  the macrotask like the timeout run last
setTimeout(function () {
    console.log("Loading...");
},0);

//The microtask like the promise runs second
Promise.resolve().then(()=> {
    console.log("This  is a promise");
});
//Synchronous code runs first
console.log("Finished!");
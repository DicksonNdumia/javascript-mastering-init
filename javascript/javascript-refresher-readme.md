# JavaScript Refresher 🚀

A simple guide to refresh core JavaScript concepts.

---

## 📌 Variables

JavaScript uses:

```js
let name = "Dalton";
const age = 20;
var oldWay = true;
```

- `let` → value can change
- `const` → value cannot change
- `var` → old way (avoid in modern JS)

---

## 📌 Data Types

```js
let username = "John"; // String
let age = 25; // Number
let isOnline = true; // Boolean
let hobbies = ["Coding", "Music"]; // Array
let user = { name: "John" }; // Object
```

---

## 📌 Functions

### Normal Function

```js
function greet() {
  console.log("Hello");
}
```

### Arrow Function

```js
const greet = () => {
  console.log("Hello");
};
```

---

## 📌 Conditionals

```js
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## 📌 Loops

### For Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

## 📌 Arrays

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
```

### Array Methods

```js
fruits.push("Mango");
fruits.pop();
```

---

## 📌 Objects

```js
const user = {
  name: "Dalton",
  age: 20,
};

console.log(user.name);
```

---

## 📌 DOM Manipulation

```js
const title = document.getElementById("title");

title.innerText = "Updated Title";
```

---

## 📌 Events

```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

## 📌 Async JavaScript

### Promises

```js
const fetchData = new Promise((resolve, reject) => {
  resolve("Data loaded");
});
```

### Async/Await

```js
async function getData() {
  const response = await fetch("https://api.example.com");
  const data = await response.json();

  console.log(data);
}
```

---

## 📌 ES6 Features

### Destructuring

```js
const user = {
  name: "Dalton",
  age: 20,
};

const { name, age } = user;
```

### Spread Operator

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
```

---

## 📌 Modules

### Export

```js
export const name = "Dalton";
```

### Import

```js
import { name } from "./file.js";
```

# 📚 Resources

- MDN Docs
- JavaScript.info
- FreeCodeCamp

---

# 👨‍💻 Author

Made while refreshing JavaScript fundamentals.

# Async JS 
## JS Callbacs basics
 - In JavaScript callbacs are simple functions which are passed as an argument to another function.
 -  It's a function that is passed as an argument to another function and is executed once the first function * is done. The callback function allows you to do something after the first function has finished running.
 -  The priamry purpose of a callback function is to allow you to execute code asynchronosly. which means that
 -  the code can run in the background while other code continues to execute.
 -  Callbacks are an essential part of asynchronous programming in JavaScript. They allow you to execute code * asynchronously and can be used in many different ways: 
   -  handling events, 
  - making HTTP requests, 
 ...and more.

```js

/**
 * Logs a greeting  and executes a callback function
 * 
 * @param {string} name 
 * @param {function} callback 
 */
function sayHello(name, callback) {
  console.log(`Hello, ${name} !`);
  callback();
}

function logMessage() {
  console.log('The greeting was logged.');
}

sayHello('Plamen', logMessage);

// -> Hello, Plamen!
// -> The greeting was logged.
```
---

## Promises 
In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
Promises allow you to write asynchronous code that is more readable and easier to reason about than using callbacks. They also make it easier to handle errors that may occur during asynchronous operations.
// ==================== JS Callbacs bsics ==================== \\
/**
 * In JavaScript callbacs are simple functions which are passed as an argument to another function.
 * It's a function that is passed as an argument to another function and is executed once the first function * is done. The callback function allows you to do something after the first function has finished running.
 * The priamry purpose of a callback function is to allow you to execute code asynchronosly. which means that
 * the code can run in the background while other code continues to execute.
 * Callbacks are an essential part of asynchronous programming in JavaScript. They allow you to execute code * asynchronously and can be used in many different ways: 
 *    -  handling events, 
 *    - making HTTP requests, 
 * ...and more.
 */

/**
 * Logs a greeting  and calls a callback function
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

 
 
// const names: Array<string> = [];
// // names[0].split('');
// const promise: Promise<number> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(10);
//   }, 2000)
// })


// promise.then(data => {
//   data.split('');
// })

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({name: "Plamen"}, {age: 32});

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
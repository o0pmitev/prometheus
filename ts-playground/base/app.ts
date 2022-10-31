function merge<T,U>(arg1: T, arg2: U) {
  return {...arg1, ...arg2}
  
}
const nameObj = {name: "Plamen"}
const ageObj = {age: 32}
const mergeObj = merge(nameObj, ageObj);
console.log(mergeObj.name);
console.log(mergeObj.age);

mergeObj.name = 'Mitev'
console.log(mergeObj.name)
console.log(nameObj.name)

function newMerge<T>(arg1:T, arg2: T) {
  return {arg1, arg2};
}

const newObject = newMerge({name:"Plamen", age: 32}, {name: "Velichka", age: 30})
console.log(newObject.arg1);
console.log(newObject.arg2.name);
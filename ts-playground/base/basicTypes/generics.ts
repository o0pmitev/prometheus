function merge<T extends object,U extends object>(arg1: T, arg2: U) {
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

interface Lenghty {
  length: number;
}
function countAndDescribe<T extends Lenghty>(element: T):[T, string] {
  let descriptionText = 'Got no value';
  if(element.length === 1) {
    descriptionText = "Got 1 element";
  }
 else if(element.length > 0) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText]
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key]
}

console.log(
  extractAndConvert({name: "Plamnen"}, "name")
);


class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

 const textStorage = new DataStorage<string>();
 textStorage.addItem("Plamen");
 textStorage.addItem("Mitev");
 textStorage.removeItem("Plamen");
 console.log(textStorage.getItems());

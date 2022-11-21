"use strict";
function merge(arg1, arg2) {
    return Object.assign(Object.assign({}, arg1), arg2);
}
const nameObj = { name: "Plamen" };
const ageObj = { age: 32 };
const mergeObj = merge(nameObj, ageObj);
console.log(mergeObj.name);
console.log(mergeObj.age);
mergeObj.name = 'Mitev';
console.log(mergeObj.name);
console.log(nameObj.name);
function newMerge(arg1, arg2) {
    return { arg1, arg2 };
}
const newObject = newMerge({ name: "Plamen", age: 32 }, { name: "Velichka", age: 30 });
console.log(newObject.arg1);
console.log(newObject.arg2.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Plamnen" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Plamen");
textStorage.addItem("Mitev");
textStorage.removeItem("Plamen");
console.log(textStorage.getItems());
//# sourceMappingURL=generics.js.map
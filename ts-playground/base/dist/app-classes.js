"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}, ${this.age} years old`);
    }
}
const person1 = new Person('Plamen', 32);
person1.greet('Hello ');
//# sourceMappingURL=app-classes.js.map
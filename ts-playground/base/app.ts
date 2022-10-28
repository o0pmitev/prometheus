// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Plamen",
//   age: 32,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`)
//   }
// }

// user1.greet('Hello');
interface Greetable {  
  name: string;
  greet(phrase: string): void;
}
  
class Person implements Greetable {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}, ${this.age} years old`)
  }
}

const person1 = new Person('Plamen', 32);
person1.greet('Hello ')
function Logger(constructor: Function) {
  console.log("Logging....")
  console.log(constructor);
  
}
@Logger
class Person {
  name = "Plamen"

  constructor() {
    console.log('Crastiong person object')
  }
}

const pers = new Person();
console.log(pers);

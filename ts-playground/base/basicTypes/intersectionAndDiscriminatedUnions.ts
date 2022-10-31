type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Plamen",
  privileges: ['create-server'],
  startDate: new Date(),
}

console.log(e1);


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if(typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfromation(emp: UnknownEmployee) {
  console.log("Name " + emp.name);
  if('privileges' in emp) {
    console.log(emp.privileges);
  }
  if('startDate' in emp) {
    console.log(emp.startDate);    
  }
}

printEmployeeInfromation(e1);

class Car {
  drive() {
    console.log("Driving");
    
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
    
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle( vehicle: Vehicle) {
  vehicle.drive();
  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

enum AnimalEnum {
  BIRD = 'bird',
  HORSE = 'horse'
}

function moveAnimal(animal: Animal) {
  switch(animal.type) {
    case AnimalEnum.BIRD: 
      console.log("Flying with speed: " + animal.flyingSpeed)
      break;
    case AnimalEnum.HORSE:
      console.log("Running speed: " + animal.runningSpeed);
      break;
  }
} 

moveAnimal({type: AnimalEnum.BIRD, flyingSpeed: 10});
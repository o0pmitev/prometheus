"use strict";
const e1 = {
    name: "Plamen",
    privileges: ['create-server'],
    startDate: new Date(),
};
console.log(e1);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfromation(emp) {
    console.log("Name " + emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
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
    loadCargo(amount) {
        console.log('Loading cargo ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
var AnimalEnum;
(function (AnimalEnum) {
    AnimalEnum["BIRD"] = "bird";
    AnimalEnum["HORSE"] = "horse";
})(AnimalEnum || (AnimalEnum = {}));
function moveAnimal(animal) {
    switch (animal.type) {
        case AnimalEnum.BIRD:
            console.log("Flying with speed: " + animal.flyingSpeed);
            break;
        case AnimalEnum.HORSE:
            console.log("Running speed: " + animal.runningSpeed);
            break;
    }
}
moveAnimal({ type: AnimalEnum.BIRD, flyingSpeed: 10 });
//# sourceMappingURL=intersection.js.map
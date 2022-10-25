"use strict";
class Department {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log(`Department ${this.name}, id: ${this.id}`);
    }
    set setEmployee(employee) {
        this.employees.push(employee);
    }
    get getEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
        return this.employees;
    }
}
const accounting = new Department('Accounting', 1);
accounting.setEmployee = 'Plamen';
accounting.setEmployee = 'Velichka';
accounting.setEmployee = 'Stefan';
accounting.setEmployee = 'Teodor';
console.log(accounting);
accounting.describe();
accounting.getEmployeesInformation;
//# sourceMappingURL=app.js.map
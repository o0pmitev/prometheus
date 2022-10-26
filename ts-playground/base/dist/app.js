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
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super("Accounting", id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set setEmployee(name) {
        if (name.length < 3) {
            return;
        }
        this.employees.push(name);
    }
    setReports(text) {
        this.lastReport = text;
        this.reports.push(text);
    }
    get getReports() {
        console.log(this.reports);
        return this.reports;
    }
}
const it = new ITDepartment(22, ["Plamen", "Mitev"]);
console.log(it);
it.describe();
const accounting = new Accounting(12, []);
accounting.setReports('Something get wrong');
accounting.setEmployee = 'Plamen';
accounting.setEmployee = 'Velichka';
accounting.setEmployee = 'Stefan';
accounting.setEmployee = 'Teodor';
accounting.setEmployee = 'se';
let reports = accounting.getReports;
console.log(accounting.mostRecentReport);
console.log('reports ---->', reports);
console.log(accounting);
accounting.describe();
accounting.getEmployeesInformation;
//# sourceMappingURL=app.js.map
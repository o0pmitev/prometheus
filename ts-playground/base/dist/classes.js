"use strict";
class Department {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    describe() {
        console.log("It Department - ID:" + this.id);
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
    static getInstance() {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting(12, []);
        return this.instance;
    }
    describe() {
        console.log("THIS IS ACCOUNTING:" + this.id);
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
const employee1 = Department.createEmployee('Plamen');
console.log("Employee 1 ====> ", employee1);
console.log(Department.fiscalYear);
const it = new ITDepartment(22, ["Plamen", "Mitev"]);
console.log(it);
it.describe();
const accounting = Accounting.getInstance();
const accounting2 = Accounting.getInstance();
console.log('they are the same object', accounting, accounting2);
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
//# sourceMappingURL=classes.js.map
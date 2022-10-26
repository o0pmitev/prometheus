class Department {
    name: string;
    protected employees: string[] = [];
    readonly id: number;
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    /** 
     * (this: Department)
     * Enforces that the object that is calling this method
     * to have the same structure as the class
     * example:
     *   const accCopy = {describe: accounting.describe}
     *   accCopy.describe()
     * ts will complain that the accCopy is missing the name field 
     * so we need to pass it as well
     *   const accCopy = {name: "Department Name", describe: accounting.describe}
     *   accCopy.describe()
     */
    public describe(this: Department): void {
        console.log(`Department ${this.name}, id: ${this.id}`);
    }

    public set setEmployee(employee: string) {
        this.employees.push(employee);
    }

    public get getEmployeesInformation(): string[] {
        console.log(this.employees.length);
        console.log(this.employees);
        return this.employees;
    }
}


class ITDepartment extends Department {
    public admins: string[];
    constructor(id: number, admins: string[]) {
        super("IT", id);
        this.admins = admins;
    }
}


class Accounting extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    private reports: string[];
    constructor(id: number, reports: string[]) {
        super("Accounting", id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //ovverides Department setter
    public set setEmployee(name: string) {
        if (name.length < 3) {
            return;
        }
        this.employees.push(name);
    }
    setReports(text: string): void {
        this.lastReport = text;
        this.reports.push(text);
    }

    get getReports(): string[] {
        console.log(this.reports);
        return this.reports;
    }
}

const it = new ITDepartment(22, ["Plamen", "Mitev"]);
console.log(it)
it.describe();

const accounting = new Accounting(12, []);
accounting.setReports('Something get wrong');
accounting.setEmployee = 'Plamen';
accounting.setEmployee = 'Velichka';
accounting.setEmployee = 'Stefan';
accounting.setEmployee = 'Teodor';
accounting.setEmployee = 'se'
let reports = accounting.getReports;
console.log(accounting.mostRecentReport);
console.log('reports ---->', reports)
// accounting.employees[2] = "Mitev" -> error because employees is private
console.log(accounting);
accounting.describe();
accounting.getEmployeesInformation;



// const accountingCopy = {name: 'Accounting-copy', describe: accounting.describe};
// accountingCopy.describe() 
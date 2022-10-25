class Department {
    name: string;
    private employees: string[] = [];
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
    public describe(this: Department):void {
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

const accounting = new Department('Accounting', 1);
accounting.setEmployee = 'Plamen';
accounting.setEmployee = 'Velichka';
accounting.setEmployee = 'Stefan';
accounting.setEmployee = 'Teodor';

// accounting.employees[2] = "Mitev" -> error because employees is private
console.log(accounting);
accounting.describe();
accounting.getEmployeesInformation;



// const accountingCopy = {name: 'Accounting-copy', describe: accounting.describe};
// accountingCopy.describe() 
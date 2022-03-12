abstract class Department {
  //private name: string;
  private employees: string[] = [];

  constructor(private id:string, private name: string) {
  }

  abstract describe(this:Department):void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department{
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
  describe() {
    console.log("Described from ITDepartment")
  }
}

class MathDepartment extends Department{
  constructor(id: string, public admins: string[]) {
    super(id, 'Math');
  }
  describe() {
    console.log("Described from Math")
  }
}


const accounting = new ITDepartment('d1', ['IT Nerd']);
console.log(accounting);
accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Menu');
accounting.printEmployeeInformation();
console.log(accounting.admins)

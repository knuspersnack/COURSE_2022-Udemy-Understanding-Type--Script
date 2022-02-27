class Department {
  //private name: string;
  private employees: string[] = [];

  constructor(private id:string, private name: string) {
  }

  describe() {
    console.log('Department: name-> ' + this.name + ', id -> ' + this.id);
  }

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
}



const accounting = new ITDepartment('d1', ['IT Nerd']);
console.log(accounting);
accounting.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Menu');
accounting.printEmployeeInformation();
console.log(accounting.admins)

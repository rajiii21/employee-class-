
class Employe{
	
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}
	
	annualSalary(){
		console.log(`the Employe name is ${this.name} and salary is ${this.salary}`);
		console.log(`the annual salary is ${this.salary*12}`);
	}
}
let person=new Employe("Raji",40000);


class Manager extends Employe{
	
	constructor(name,salary,department,managerSalary){
		super(name,salary);
		this.department=department;
		this.managerSalary=managerSalary;
	}
	annualSalary(bonus){
		console.log(`the Employe name is ${this.name} and salary is ${this.salary}`);
		console.log(`the annual salary employee ${this.salary*12} and the bonus of manager is ${bonus});`);
	}
	annualSalaryManager(){
		console.log(`the manager annual salary is ${this.managerSalary*12}`);
	}
}
let person2=new Manager("Jey",70000,"Testing dpt");
let salary2=new Manager("JR",70000,"Testing dpt",100000);

person2.annualSalary(5000)
salary2.annualSalaryManager()


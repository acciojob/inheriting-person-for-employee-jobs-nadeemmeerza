// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(){
	return `Hello, my name is ${this.name}, I am ${this.age} years old`;
}

function Employee(name, age, jobTitle) {
	Person.call(this,name, age)
	this.jobTitle = jobTitle;

	this.jobGreet = ()=>{
		return this.greet() + `, and my job title is ${this.jobTitle}`
	}
}

Employee.prototype = Object.create(Person.prototype);

let empl = new Employee("Bob", 35, "Manager");
console.log(empl.jobGreet());
let per = new Person("Alice",25);
console.log(per.greet());

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

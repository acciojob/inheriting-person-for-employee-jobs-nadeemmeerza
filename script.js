// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = ()=>{
	return `Hello, my name is ${this.name}, I am ${this.age} years old`;
}

function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;

	this.jobGreet = ()=>{
		return this.greet() + `, and my job title is ${this.jobTitle}`
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// Classes this is a blueprint to create different instances from the same item

class Rectangle {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }

  size() {
    return `${this.length * this.height}m^2`;
  }
}

const Rect1 = new Rectangle(23, 34);

const sizeRect1 = Rect1.size();

console.log(sizeRect1);

class Car {
  constructor(model) {
    this.model = model;
    this.count = 0;
    this.year = 2023
  }
  printModel() {
    this.count++;
    this.year += 1
    console.log(this.model);
  }
  printThis() {
    console.log(this);
  }
}

const newCar = new Car("BMW");
const newCar2 = new Car("Audi");

newCar2.printModel()
newCar.printModel()
newCar2.printThis()
newCar.printThis();


console.log(typeof Car);


// Class as Expression

const Employee = class {
  constructor(name, age, position) {
    this.name = name
    this.age = age
    this.position = position
  }
  welcome() {
    console.log(`you are welcome to the company ${this.name}`);
  }
}

let things = {
  name: "prince",
  age: 23
}

const emp1 = new Employee("prince", 23, "magaer")

emp1.welcome()

class Rectangle {
  constructor(width, height, color) {
    //attributes of object ot instance properties
    console.log("The Rectangle is being created....");
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
    //methods 
    return this.width * this.height;
  }

  printDescription() {
    console.log(`I am a rectangle of ${this.width} * ${this.height} and i am ${this.color}`)
  }
}


let myRectangle = new Rectangle(3, 10, 'red');

let myRectangle2 = new Rectangle(10, 4, 'blue');

console.log(myRectangle.getArea());
console.log(myRectangle2.getArea());

myRectangle.printDescription()
myRectangle2.printDescription()

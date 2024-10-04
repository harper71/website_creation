class Square {
  constructor(width) {
    this._width = width;
    this._height = width;
    this.count = 0
  }

  get area () {
    //this be have like a property
    this.count++;
    return this._width * this._height;
  }

  set area (area) {
    this._width = Math.sqrt(area);
    this._height = this._width;
  }
}

let mySquare = new Square(4)

console.log(mySquare.area);

mySquare.area = 25
console.log(mySquare.area);
console.log(mySquare.area);
console.log(mySquare.area);
console.log(mySquare._width);
console.log(mySquare._height);

console.log(mySquare.count);




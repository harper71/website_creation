// class fields
class Phone {
  brand = "Apple"

  make() {
    console.log(this.brand);
  }
}


const phone = new Phone()

phone.make()


// Getters and Setters

class Animal {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return `your animal is a ${this._name}`
  }

  set name(value) {
    if (!value ) {
      console.warn("A name is Mandatory");
      return;
    }
    if (value.length <= 2) {
      console.warn("this name must be more than 2  characters");
      return

    }
    this._name = value
  }
}


const animal = new Animal("Tiger")
animal.name = "cat"

console.log(animal.name);


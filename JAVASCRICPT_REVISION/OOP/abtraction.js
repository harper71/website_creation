//Abstraction

/**
 * Definition: this is the process of
 * hiding some details and only show essencial features
 */

class Car {
  startEngine() {
    this.#injectFuel()
    this.#ignite();
    console.log("Engine started");

  }
  #injectFuel() {
    console.log("Fuel injected");
  }
  #ignite() {
    console.log("Ignite the fuel");
  }
}


const newCar = new Car()

newCar.startEngine()

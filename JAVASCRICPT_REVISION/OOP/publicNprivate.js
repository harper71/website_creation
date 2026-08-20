//Private and Public

// Public: these fields and methods are acccessible from anywhere
// Private: These fields and methods are accessable only from inside the class

class WashingMachine {
  //public feild
  brand;
  // private fields
  #powerStatus = false;
  #currentCycle = null;
  constructor(brand) {
    this.brand = brand;
  }

  start(cycle) {

    if (!this.#powerStatus) {
      this.#turnOn();
    }
    this.#currentCycle = cycle;

    console.log(`Starting ${cycle} cycle...`);

    this.#spin();
    this.#drain();
    this.stop();
  }

  #stop() {
    this.#turnOff();
  }

  #spin() {
    console.log("Spinning...");

  }
  #drain() {
    console.log("water is being drained....");

  }

  #turnOff() {
    this.#powerStatus = false
    console.log("power off");
  }
  #turnOn() {
    this.#powerStatus = true
    console.log("power on");

  }
}

const lgWasher = new WashingMachine("LG")


console.log(lgWasher);
lgWasher.start("Quick Wash")


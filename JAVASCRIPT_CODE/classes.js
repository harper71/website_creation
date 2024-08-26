class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }

}
let zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);



class Book {
  constructor(author) {
    this._author = author;
  }

  /* getter are used to get the value of the private
  variable without the user directly acessing it */


}


function makeclass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updateTemp) {
      this._temp = updateTemp;
    }
  }
  return Thermostat;
}


const Thermostat = makeclass();
const thermos = new Thermostat(76);

console.log(thermos);

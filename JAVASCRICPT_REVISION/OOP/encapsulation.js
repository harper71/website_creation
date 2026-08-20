class Car {
  #speed = 0;

  accelerate() {
    this.#speed += 10;
  }
  getSpeed() {
    return this.#speed;
  }
}

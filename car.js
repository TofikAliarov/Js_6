const Car = class {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage;

  constructor() {
    this.#currentFuelVolume = 0;
    this.#isStarted = false;
    this.#mileage = 0;
  }

  set brand(value) {
    if (value.length > 50) {
      throw new Error("too long brand");
    }
    this.#brand = value;
  }
  get brand() {
    return this.#brand;
  }

  set model(value) {
    if (value.length > 50) {
      throw new Error("too long model");
    }
    this.#model = value;
  }
  get model() {
    return this.#model;
  }

  set yearOfManufacturing(value) {
    let today = new Date();
    let year = today.getFullYear();
    if (value < 1900 || value > year) {
      throw new Error("wrong yearOfManufacturing");
    }
    this.#yearOfManufacturing = value;
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (value < 100 || value > 300) {
      throw new Error("wrong maxSpeed");
    }
    this.#maxSpeed = value;
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(value) {
    if (value < 5 || value > 20) {
      throw new Error("wrong maxFuelVolume");
    }
    this.#maxFuelVolume = value;
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    this.#fuelConsumption = value;
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }
  get isStarted() {
    return this.#isStarted;
  }
  get mileage() {
    return this.#mileage;
  }
  start() {
    if (this.isStarted === true) {
      throw new Error("Машина уже заведена");
    }
    this.#isStarted = true;
  }
  shutDownEngine() {
    if (this.isStarted === false) {
      throw new Error("Машина ещё не заведена");
    }
    this.#isStarted = false;
  }
  fillUpGasTank(value) {
    if (isNaN(value) || value <= 0) {
      throw new Error("Неверное количество топлива для заправки");
    }
    if ((this.#currentFuelVolume += value) > this.maxFuelVolume) {
      throw new Error("Топливный бак переполнен");
    }
    this.#currentFuelVolume += value;
  }
  drive(speed, time) {
    if (isNaN(speed) || speed <= 0) {
      throw new Error("Неверная скорость");
    }
    if (isNaN(time) || time <= 0) {
      throw new Error("Неверное количество часов");
    }
    if (speed > this.maxSpeed) {
      throw new Error("Машина не может ехать так быстро");
    }
    if (this.isStarted === false) {
      throw new Error("Машина должна быть заведена, чтобы ехать");
    }
    const distance = speed * time;
    const distanceLeft = (this.currentFuelVolume / this.fuelConsumption) * 100;
    if (distanceLeft < distance) {
      throw new Error("Недостаточно топлива");
    }
    this.#mileage += distance;
  }
};

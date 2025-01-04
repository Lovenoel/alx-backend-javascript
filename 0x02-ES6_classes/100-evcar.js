import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Store range in a private property
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color); // Return a Car instance
  }
}

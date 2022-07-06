class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return this.sideA * this.sideB;
  }
  getPerimeter() {
    return (this.sideA + this.sideB) * 2;
  }
}

const PI = 3.14159265359;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return PI * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * PI * this.radius;
  }
}
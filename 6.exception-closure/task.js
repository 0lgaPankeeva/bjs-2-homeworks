//Задание 1

function parseCount(value) {
  let parsedValue = Number.parseInt(value);
  if(isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
  }

function validateCount(value) {
  try {
      return parseCount(value);
    } catch (error) {
      return error;
      }
}


//Задание 2

class Triangle {
  constructor(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;

  if (a + b < c || c + a < b || c + b < a) {
    throw new Error("Треугольник с такими сторонами не существует");
  }
}

getPerimeter() {
  return this.a + this.b + this.c;
}

getArea() {
  let semiperimeter = (this.a +this.b + this.c)/2;
  return parseFloat (
    Math.sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c)).toFixed(3)
    );
}
}

function getTriangle(a, b, c) {
try {
  return new Triangle(a, b, c);
} catch (error) {
  return {
    getArea: () => "Ошибка! Треугольник не существует",
    getPerimeter: () => "Ошибка! Треугольник не существует",
  }
}
}



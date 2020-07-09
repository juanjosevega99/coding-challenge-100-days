const side1 = parseFloat(prompt("Enter side 1"));
const side2 = parseFloat(prompt("Enter side 2"));
const side3 = parseFloat(prompt("Enter side 3"));

const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(
  perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3)
);

if (side1 === side2 && side2 === side3) {
  console.log(`The area of the equilateral triangle is ${area}`);
} else if (side1 != side2 && side2 != side3) {
  console.log(`The area of the scalene triangle is ${area}`);
} else {
  console.log(`The area of the isosceles triangle is ${area}`);
}

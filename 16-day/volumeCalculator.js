const add = numbers => numbers.reduce((a, b) => a + b)
const multiplication = numbers => numbers.reduce((a, b) => a + b)

let numbers = []

do {
  numbers.push(parseFloat(prompt('Enter a number: ')))
} while (prompt('There more numbers (y/n) ').toLowerCase() === 'y')

const operation = prompt('What do you want? (+/*) ').toLowerCase()
switch (operation) {
  case '+':
    alert(`The sum is: ${add(numbers)}`)
    break
  case '*':
    alert(`The Product is: ${multiplication(numbers)}`)
    break
  default:
    alert(`Error in operation selected`)
}
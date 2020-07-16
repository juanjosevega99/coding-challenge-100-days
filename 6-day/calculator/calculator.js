function calculator(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case '*':
      return number1 * number2
    case '/':
      return number1 / number2
    default:
      return 'Error'
  }
}

let number1 = parseFloat(prompt('Enter a number 1: '))
let number2 = parseFloat(prompt('Enter a number 2: '))
let operator = prompt('Enter operator: ')

let result = calculator(number1, number2, operator)
let outputMessage = result != 'Error' ? `${number1} ${operator} ${number2} = ${result}` : `There is an error`

alert(outputMessage)

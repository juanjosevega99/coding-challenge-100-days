const SECRET_NUMBER = Math.floor(Math.random() * 100) + 1
let numberAttempts = 0

numberAttempts++
let number = parseInt(prompt('Im thinking of a number between 1 and 100'))
while (number != SECRET_NUMBER) {
  if (number > SECRET_NUMBER) {
    numberAttempts++
    number = parseInt(prompt('Its a smaller number'))
  } else if (number < SECRET_NUMBER) {
    numberAttempts++
    number = parseInt(prompt('Its a bigger number'))
  }
}

alert(`Congratulations, you guessed the number (${SECRET_NUMBER}) in ${numberAttempts} attempts`)
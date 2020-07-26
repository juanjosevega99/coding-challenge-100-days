function isPrime(number) {
  for (let divider = 2; divider < Math.floor(Math.sqrt(number)) + 1; divider++) {
    if (number % divider == 0) {
      return false
    }
  }
  return true
}

function primeNumbers(limit) {
  let primes = []
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      primes.push(number)
    }
  }
  return primes
}

do {
  var limit = parseInt(prompt('Limit number to know primes? '))
  if (limit < 2) alert('Should enter a number greater than or equal to 2')
} while (limit < 2);

alert(`Primes numbers lower than ${limit}: ${primeNumbers(limit)}`)
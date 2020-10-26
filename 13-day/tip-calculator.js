function tipCalculator(values, percentage) {
  let sumValues = values.reduce((a, c) => a + c)
  return sumValues * percentage
}

let prices = []
let i = 0

do {
  i++
  let valuePlate = parseFloat(prompt(`Saucer ${i}: Price?`))
  prices.push(valuePlate)
} while (prompt('There are more plates? (yes/no): ').toLowerCase() == 'yes')

let tipPercentage = parseFloat(prompt('Tip percentage? (1 - 100%)? ')) / 100
alert(`The tip is ${tipCalculator(prices, tipPercentage)}`)
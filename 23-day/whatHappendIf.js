function finalAmount(capital, time, rate) {
  return capital * Math.pow(1 + rate, time)
}

const capital = parseFloat(prompt('How many do you save this month: '))
const time = parseInt(prompt('How many months: '))
const interest = parseFloat(prompt('How many is the interest for month (0 - 100%) ')) / 100

alert(`In ${time} months do you save $${finalAmount(capital, time, interest).toFixed(2)}`)
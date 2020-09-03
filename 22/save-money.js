function finalAmount(capital, time, rate) {
  return capital * Math.pow(1 + rate, time)
}

const capital = parseFloat(prompt('How much are you going to save this month?'))
const time = parseInt(prompt('For how many months?'))
const interest = parseFloat(prompt('How much is the monthly interest (0 - 100%)')) / 100

alert(`In ${time} month(s) you gonna save $${finalAmount(capital, time, interest).toFixed(2)}`)
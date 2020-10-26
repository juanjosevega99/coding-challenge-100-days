// save in other bank
function finalSavings(capital, months, bank) {
  let finalSaving = capital
  let interestActual = bank.interest
  let increasedInterest = bank.interestPlus
  while (months / 12 >= 1) {
    finalSaving *= Math.pow((1 + interestActual), 12)
    interestActual += increasedInterest
    months -= 12
  }
  finalSaving *= Math.pow((1 + interestActual), months)
  return finalSaving
}

// banks data
const BANK_1 = {
  interest: 0.04,
  interestPlus: 0
}
const BANK_2 = {
  interest: 0.03,
  interestPlus: 0.07
}

// user data
const initialSaving = 1000
const times = [1, 2, 3]

times.forEach(time => {
  let months = time * 12
  let finalSaving_bank1 = finalSavings(initialSaving, months, BANK_1)
  let finalSaving_bank2 = finalSavings(initialSaving, months, BANK_2)
  bestBank = finalSaving_bank1 > finalSaving_bank2 ? 1 : 2
  console.log(`In the 1 bank you save $${finalSaving_bank1.toFixed(2)}`)
  console.log(`In the 2 bank you save $${finalSaving_bank2.toFixed(2)}`)
  console.log(`For a time of ${time} years is better the bank ${bestBank}`)
})
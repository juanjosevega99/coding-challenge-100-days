const month = prompt('Enter the number of your birthday month: ')
const day = prompt('Enter the day of your birth: ')

const birthday = new Date(2000, month - 1, day)
const today = new Date()

function countdown(birthday, today) {
  if (today.getMonth() >= month - 1) {
    let nextBirthday1 = birthday.setFullYear(today.getFullYear() + 1)
    let missingTime1 = nextBirthday1 - today
    alert(`Your next birthday is in ${today.getFullYear() + 1}. Missing ${Math.floor(missingTime1 / (1000 * 60 * 60 * 24)) + 1} days`)
  } else {
    let nextBirthday2 = birthday.setFullYear(today.getFullYear())
    let missingTime2 = nextBirthday2 - today
    alert(`Missing ${Math.floor(missingTime2 / (1000 * 60 * 60 * 24)) + 1} days to your birthday`)
  }
}

countdown(birthday, today)
function randomChars(chars, number) {
  let charsList = []
  for (let i = 0; i < number; i++) {
    charsList.push(chars[Math.floor(Math.random() * chars.length)])
  }
  return charsList
}

const characters = ['"', '#', '$', '%', '(', ')', '/', '&']
console.log(randomChars(characters, 4))
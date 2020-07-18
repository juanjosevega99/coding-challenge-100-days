let characters
let password
let option = Number(prompt("1. All kinds of characters| 2. uppercase and lowercase| 3. just lowercase| 4. just uppercase| 5. just special characters"))
let lengthPassword = Number(prompt('What will be the length of your password? '))

function characterRandom(characters) {
  for (let i = 1; i <= lengthPassword.length; i++) {
    password = password + characters.charAt(Math.floor(Math.random() * ((characters.length + 1) - 0) + 0))
  }
  return console.log(password)
}

switch (option) {
  case 1:
    characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789abcdefghijklmnñopqrstuvwxyz*/()=&%$#!°|.-_:"
    characterRandom(characters)
  case 2:
    characters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789abcdefghijklmnñopqrstuvwxyz"
    characterRandom(characters)
    break
  case 3:
    characters = 'abcdefghijklmnñopqrstuvwxyz0123456789'
    characterRandom(characters)
  case 4:
    characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789'
    characterRandom(characters)
  case 5:
    characters = '*/()=&%$#!°|.-_:'
    characterRandom(characters)
    break
  default:
    alert('Invalid option')
    break
}
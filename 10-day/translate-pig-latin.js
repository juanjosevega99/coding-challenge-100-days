const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']

function translatorPigLatin(word) {
  let firstLetter = word.charAt(0)
  if (vowels.includes(firstLetter)) {
    return `${word}way`
  } else {
    let letters = word.split('')
    let posFirstVowel = 0
    for (const i of letters) {
      if (vowels.includes(i)) {
        posFirstVowel = word.indexOf(i)
        break
      }
    }
    let firstConsonants = word.substr(0, posFirstVowel)
    let rest = word.substr(posFirstVowel)
    return `${rest}${firstConsonants}ay`
  }
}

const word = prompt('What word do you wanna translate?')
alert(`Word translated: ${translatorPigLatin(word)}`)
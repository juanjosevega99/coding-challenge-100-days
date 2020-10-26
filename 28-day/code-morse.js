const morseCode = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];

function decode(string) {
  let codeMessage = ''

  for (let i = 0; i < string.length; i++) {
    const charPosition = string.toLowerCase().charCodeAt(i) - 97;
    codeMessage += morseCode[charPosition]
  }

  console.log(codeMessage)
}
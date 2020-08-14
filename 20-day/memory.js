function memory(number) {
  const result = ''
  const characters = '"#$%()/&'
  const charactersNumbers = characters.length

  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersNumbers))
  }
  return result
}

function order(parameter) {
  const menu = prompt(
    `Characters: ${memory(parameter)}
    Enter order characters to show: `
  )
  return menu
}

order(4)
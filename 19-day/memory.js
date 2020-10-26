function memory(numbers) {
  const result = ''
  const characters = '"#$%()/&'
  const charactersNumbers = characters.length

  for (let i = 0; i < numbers; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersNumbers))
  }

  register = ''
  set = Array.from(result)
  for (let i = 0; i < result.length; i++) {
    register += `
      ${i + 1} = ${arr[i]}
    `
  }
  alert(`Symbols: ${register}`)
}

memory(4)
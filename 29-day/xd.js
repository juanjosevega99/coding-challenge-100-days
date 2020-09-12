// Generate random numbers
const generateRandom = limit => {
  let numbers = []
  do {
    const random = Math.floor(Math.random() * limit + 1)
    if (numbers.length === 0 || numbers.indexOf(random) === - 1) {
      numbers.push(random)
    }
  } while (numbers.length < 10);
  return numbers
}

// Sort arrangement of numbers from least to greatest
const ascendingOrder = arrayRandom => {
  const order = [...arrayRandom]
  for (let i = 0; i < order.length; i++) {
    let length = order.length - 1
    for (let j = length; j >= i; j--) {
      if (order[j - 1] > order[j]) {
        const temp = order[j - 1]
        order[j - 1] = order[j]
        order[j] = temp
      }
    }
  }
  return order
}

// Sort arrangement of numbers from highest to lowest
const descendingOrder = arrayRandom => {
  const order = [...arrayRandom]
  for (let i = 0; i < order.length; i++) {
    let length = order.length - 1
    for (let j = length; j >= i; j--) {
      if (order[j - 1] < order[j]) {
        const temp = order[j - 1]
        order[j - 1] = order[j]
        order[j] = temp
      }
    }
  }
  return order
}

(function name(params) {
  const limit = 90
  let random = [...generateRandom(limit)]
  const majorMinor = ascendingOrder(random).join(', ')
  const minorMajor = descendingOrder(random).join(', ')
  console.log(`Original: ${random.join(', ')}`)
  console.log(`Sorted from lowest to highest: ${majorMinor}`)
  console.log(`Sorted from highest to lowest: ${(minorMajor)}`)
})()
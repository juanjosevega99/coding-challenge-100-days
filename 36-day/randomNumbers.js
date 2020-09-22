function randomNumbers2(dices, faces) {
    let results = new Array()
    for (let d = 0; d < dices; d++) {
        results.push(Math.ceil(Math.random() * faces))
    }
    return results
}

function throwDices(dices) {
    return randomNumbers2(dices, 6)
}

const numberDices = parseInt(prompt('How many dice are you going to roll? '))
alert(`Result: ${throwDices(numberDices)}`)
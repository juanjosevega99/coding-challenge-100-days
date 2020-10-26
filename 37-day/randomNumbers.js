function randomNumbers2(dices, faces) {
    let results = new Array()
    for (let d = 0; d < dices; d++) {
        results.push(Math.ceil(Math.random() * faces))
    }
    return results
}

const numberDices = parseInt(prompt('How many dice are you going to roll? '))
const numberFaces = parseInt(prompt('How many faces do they have? '))
alert(`Point: ${randomNumbers2(numberDices, numberFaces)}`)
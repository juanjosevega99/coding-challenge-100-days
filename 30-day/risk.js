function risk(attacker, defender) {
  let attackerSoldiersLost = 0
  let defenderSoldiersLost = 0

  attacker.sort((a, b) => b - a)

  for (let i = 0; i < 2; i++) {
    if (attacker[i] > defender[i]) {
      defenderSoldiersLost += 1
    } else if (attacker[i] < defender[i]) {
      defenderSoldiersLost += 1
    }
  }

  console.log(`Attacker soldiers lost: ${attackerSoldiersLost}`)
  console.log(`Defender soldiers lost: ${defenderSoldiersLost}`)
}

const attacker = [5, 3, 1]
const defender = [4, 4]
risk(attacker, defender)
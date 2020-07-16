function rps(opt1, opt2) {
  switch (opt1) {
    case 'rock':
      switch (opt2) {
        case 'rock': return 'rock vs rock -> Drawn'
        case 'paper': return 'rock vs paper -> Player 2 win'
        case 'scissors': return 'rock vs scissors -> Player 1 win'
        default: return 'Player 2, invalid option'
      }
    case 'paper':
      switch (opt2) {
        case 'rock': return 'paper vs rock -> Player 1 win'
        case 'paper': return 'paper vs paper -> Drawn'
        case 'scissors': return 'paper vs scissors -> Player 2 win'
        default: return 'Player 2, invalid option'
      }
    case 'scissors':
      switch (opt2) {
        case 'rock': return 'scissors vs rock -> Player 2 win'
        case 'paper': return 'scissors vs paper -> Player 1 win'
        case 'scissors': return 'scissors vs scissors -> Drawn'
        default: return 'Player 2, invalid option'
      }
    default:
      return 'Player 1, invalid option'
  }
}

let opt1 = prompt('Player 1: rock, paper or scissors?')
let opt2 = prompt('Player 2: rock, paper or scissors?')
alert(rps(opt1, opt2))
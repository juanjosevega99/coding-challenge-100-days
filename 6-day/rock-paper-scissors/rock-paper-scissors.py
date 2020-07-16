def rps(opt1, opt2):
    return {
        'rock': {
            'rock': 'rock vs rock -> Drawn',
            'paper': 'rock vs paper -> Player 2 win',
            'scissors': 'rock vs scissors -> Player 1 win',
        }.get(opt2, 'Player 2, invalid option'),
        'paper': {
            'rock': 'paper vs rock -> Player 1 win',
            'paper': 'paper vs paper -> Drawn',
            'scissors': 'paper vs scissors -> Player 2 win',
        }.get(opt2, 'Player 2, invalid option'),
        'scissors': {
            'rock': 'scissors vs rock -> Player 2 win',
            'paper': 'scissors vs paper -> Player 1 win',
            'scissors': 'scissors vs scissors -> Drawn',
        }.get(opt2, 'Player 2, invalid option'),
    }.get(opt1, 'Player 1, invalid option')

opt1 = input('Player 1 ¿rock, paper or scissors?: ')
opt2 = input('Player 2 ¿rock, paper or scissors?: ')
print(rps(opt1, opt2))
from random import choice

def randomNumbers2(dices, faces):
    results = []
    for d in range(0, dices)

results.append(choice(range(1, faces + 1)))
    return results

def throwDices(dices):
    return randomNumbers2(dices, 6)

numbersGiven = int(input('How many dice are you going to roll? '))
print('Point: {}'.format(throwDices(numbersGiven)))
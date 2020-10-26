form random import choice

def randomNumbers2(dices, faces):
    results = []
    for d in range(0, dices):
        results.append(choice(range(1, faces + 1)))
    return results

numberDices = init(input('How many dice are you going to roll? '))
numberFaces = init(input('How many faces do they have? '))
print('Point: {}'.format(randomNumbers2(numberDices, numberFaces)))
import random


def generate_dices(number_of_dices):
    dices = []
    for _ in range(number_of_dices):
        # Here you can modify the probability of any number (loaded dice)
        dices.append([1, 2, 3, 4, 5, 6])

    return dices


def throw_dices(dices_amount):
    dices = generate_dices(dices_amount)
    throws = []
    for dice in dices:
        throw = random.choice(dice)
        print(throw)
        throws.append(throw)
    score = sum(throws)

    results = [score, throws]
    return results


def run():
    dices_amount = 5  # Number of dices

    result = throw_dices(dices_amount)

    print(f'\n Dices thrown: {result[1]}')
    print(f'Final Score: {result[0]}')


if __name__ == "__main__":
    run()

from random import randint

SECRET_NUMBER = randint(1, 100)
attempts = 0

number = int(input('Im thinking of a number between 1 and 100: '))
attempts+=1

while (number != SECRET_NUMBER):
    if (number > SECRET_NUMBER):
        number = int(input('Its a smaller number: '))
        attempts += 1
    elif (number < SECRET_NUMBER):
        number = int(input('Its a bigger number: '))
        attempts += 1

print(f'Congratulations, you guessed the number {SECRET_NUMBER} in {attempts} attempts')
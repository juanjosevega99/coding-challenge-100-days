from random import choice

def randomChars(chars, number):
    charsList = []
    for i in range(0, number):
        charsList.append(choice(chars))
    return charsList

characters = ['"', '#', '$', '%', '(', ')', '/', '&']
print(randomChars(characters. 4))
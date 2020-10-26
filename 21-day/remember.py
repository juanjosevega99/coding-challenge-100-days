import random
characers = ['"','#','$','%','(',')','/','&']
message = '''We have this characters
    1-->"
    2-->#
    3-->$
    4-->%
    5-->(
    6-->)
    7-->/'''

selection = []
for s in range(4):
    print(message)
    elected = int(input('Choose  a number'))
    elected = elected - 1
    elected = characers[elected]
    selection.append(elected)


selection = ''.join(selection)
print(f'The characters chosen for you are: {selection}')

new = []
cont = 0

for i in range(4):
    cont = cont + 1
    random=random.choice(characers)
    print(f'In the position {cont} there are the characer: {random}')
    new.append(random)
    characers.remove(random)

new = ''.join(new)
print(f'The characters selected random are {new}')

if selection == new:
    print('You guessed!!!')
else:
    print('Sorry, try again')
import random

characters = ['"','#','$','%','(',')','/','&']
new = []
count = 0

for i in range(4):
    count = count + 1
    aleatory = random.choice(characters)
    print(f'In position {count there are character: {aleatory}')
    new.append.remove(aleatory)
    characters.remove(aleatory)

new = ''.join(new)
print(f'The characters selected are: {new}')
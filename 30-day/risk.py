import random

frieze1 = [1, 2, 3, 4, 5, 6]
frieze2 = [1, 2, 3, 4, 5, 6]
frieze3 = [1, 2, 3, 4, 5, 6]
frieze4 = [1, 2, 3, 4, 5, 6]
frieze5 = [1, 2, 3, 4, 5, 6]

attack1 = random.choice(frieze1)
attack2 = random.choice(frieze2)
attack3 = random.choice(frieze3)
attack4 = random.choice(frieze4)
attack5 = random.choice(frieze5)

print(f'Result of frieze 1 of attack {attack1}')
print(f'Result of frieze 2 of attack {attack1}')
print(f'Result of frieze 3 of attack {attack1} (number of soldiers')
print(f'Result of frieze 1 of attack {attack4}')
print(f'Result of frieze 2 of attack {attack5}')

if attack1 < attack4:
    res1 = 'attack'
elif attack1 > attack4:
    res1 = 'defender'
elif attack1 == attack4:
    res1 = 'attack' #tie
else:
    pass

if attack2 < attack5:
    res2 = 'attack'
elif attack2 > attack5:
    res2 = 'defender'
elif attack1 == attack5:
    res2 = 'attack'
else:
    pass

if res1 == res2
    print(f'The {res1} lose {attack3} soldiers')
else:
    print(f'The {res1} lose {attack3} soldiers y {res2} lose {attack3} soldiers')
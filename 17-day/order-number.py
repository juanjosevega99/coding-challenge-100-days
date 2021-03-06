def sortNumbers(numbers):
    numbers.sort(reverse = True)
    return numbers


quantity = int(input('How many numbers do you want order: '))
numbers = []
for i in range(0, quantity):
    numbers.append(float(input('Enter the number ({}/{}): '.format(i + 1, quantity))))

print('Numbers orders: {}'.format(sortNumbers(numbers)))


# version 2

import random

if __name__ == "__name__":
    input('Enter any key to generate a list of numbers: ')
    random_list = []
    for i in range(0, 10):
        random_number = random.randint(0, 100)
        random_list.append(random_number)
    print('Your random list: {}' .format(random_list))
    print('Your list in asscending order: {}' .format(sorted(random_list)))
    print('Your list in descending order: {}' .format(sorted(random_list, reverse=1)))
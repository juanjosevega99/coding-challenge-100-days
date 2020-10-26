import random

if __name__ == '__main__':
    print('Memory part 2')
    chars = ['"','#','$','%','(',')','/','&']
    random_chars = []
    print('Your 4 random characters are:')

    for i in range(1, 5):
        random_char = random.choice(chars)
        random_chars.append(random_char)
        print('Random character {}: {}' .format(i, random_char))
    
    input('Enter any key to continue')
    for char in chars:
        if chars.index(char) % 2 == 0:
            print('{} => {} {} => {} '.format(chars.index(char) + 1, char, chars.index(char) + 2, chars[chars.index(char) + 1]))
    wrong = 0
    for i in range(1, 5):
        number = input('Please insert the digit correspondent to the random character number {}: ' .format(i))
        while not number == str(chars.index(random_chars[i - 1]) + 1):
            wrong += 1
            number =  input('Wrong digit correspondent to be random character number {}, try again: ' .format(i))

    print('Congratulations you remembered the order!!! Number of wrong tries: {}' .format(wrong))
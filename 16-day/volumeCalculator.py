def receive_numbers():
    numbers = []
    stop_asking = 0
    count = 0
    while stop_asking == 0:
        count += 1
        number = input('Please insert number {}: '.format(count))
        if number == '=':
            stop_asking = 1
        else:
            try:
                numbers.append(float(number))
            except:
                while True:
                    number = input('Invalid entry. Please insert a number: ')
                    if number == '=':
                        stop_asking = 1
                        break
                    else:
                        try:
                            numbers.append(float(number))
                            break
                        except:
                            pass
    print(numbers)
    return numbers


if __name__ == "__main__":
    print('* Sum and Multiplication Calculator *')
    print('Select the operation you want to perform:\n  [+] Addition.\n  [*] Multiplication.')
    operator = ''
    while not (operator == '+'or operator == '*'):
        operator = input('Enter + or *: ')    
    if operator == '+':
        print('Please entry the numbers you want to add (use "." as decimal separator), to stop enter \"=\"')  
        result = sum(receive_numbers())
        print('The sum result of your numbers is: {}' .format(result))    
    else:
        print('Please entry the numbers you want to multiply (use "." as decimal separator), to stop enter \"=\"')
        result = 1
        for x in receive_numbers():
            result *= x
        print('The multiplication result of your numbers is: {}' .format(result))
def calculator(number1, number2, operator):
    if (number2 == 0 and operator == '/'):
        return 'Error'
    else:
        operators = {
            '+': number1 + number2,
            '-': number1 + number2,
            '*': number1 + number2,
            '/': number1 + number2,
        }
        return operators.get(operator, 'Error')

number1 = float(input('Enter number 1: '))
number2 = float(input('Enter number 2: '))
operator = input('Enter the operator: ')

result = calculator(number1, number2, operator)
if (result == 'Error'):
    print('There is an error')
else:
    print('{} {} {} = {}'.format(number1, operator, number2, result))
def tip_calculator(values, percentage):
    sumValues = 0
    for i in range(0, len(values)):
        sumValues += values[i]
    return sumValues * percentage

values = []
i = 0
anotherPlate = True

while(anotherPlate):
    i += 1
    value = float(input('Saucer {}: Price? '.format(i)))
    values.append(value)
    anotherPlate = (input('There are more plates? (yes/no): ') == 'yes')

percentage = float(input('Tip percentage? (1 - 100%)? ')) / 100
print('The tip is {}'.format(tipCalculator(values, percentage)))
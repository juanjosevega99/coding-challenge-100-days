def finalAmount(capital, time, rate):
    return capital * (1 + rate) ** time 


capital = float(input('How much are you going to save this month: '))
time = float(input('For how many months: '))
interest = float(input('How much is the monthly interest (0 - 100%) '))/100

print('In {} month(s) gonna save ${}'.format(time, round(finalAmount(capital, time, interest), 2)))
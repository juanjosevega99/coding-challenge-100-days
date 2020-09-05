menu = '''Interest Calculator'''

print(menu)

def run():
    capital = int(input('Enter the amount in Co: '))
    interest = 4
    months = 36
    intYear = 0
    bank = 'A'
    interest_calculator(capital, interest, months, intYear, bank)
    interest = 3
    intYear = 7 / 100
    bank = 'B'
    interest_calculator(capital, interest, months, intYear, bank)


def interest_calculator(capital, interest, months, intYear, bank):
    for month in range(months):
        capital = capital + capital * interest / 100
        if month == 11 or month == 23 or month == 35:
            capital = capital + intYear * capital
            capital = round(capital, 2)
            print(f'Your profit in {int((mes + 1) / 12)} years, interest of {interest}% is {capital} co in the bank {bank} with the plus interest {intYear}')
        else:
            pass


if __name__ == "__main__":
    run()
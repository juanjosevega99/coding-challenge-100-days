def isPrime(number):
    for divider in range(2, int(number ** .5) + 1):
        if (number % divider == 0):
            return False
    return True


def primeNumbers(limit):
    primes = []
    for number in range(2, limit + 1):
        if isPrime(number): 
            primes.append(number)
    return primes


n = int(input('Limit number to know primes? '))
while (n < 2):
    print('Should enter a number greater than or equal to 2')
    n = int(input('Limit number to know primes? '))

print(primeNumbers(n))
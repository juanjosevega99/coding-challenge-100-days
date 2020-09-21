def primeNumber(n):
    primeNumbers = []
    i = 2
    while len(primeNumbers) < n:
        isPrime = True
        for p in primeNumbers:
            if (i % p == 0):
                isPrime = False
                break
        if (isPrime):
            primeNumbers.append(i)
        i += 1
    return primeNumbers[-1]

print(primeNumber(100)) # 541
print(primeNumber(1000)) # 7919
print(primeNumber(10000)) # 104729
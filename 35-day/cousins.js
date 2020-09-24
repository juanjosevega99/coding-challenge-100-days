function PrimeNumber(n) {
    let PrimeNumbers = new Array()
    let i = 2
    while (PrimeNumbers.length < n) {
        if (PrimeNumbers.every(n => i % n !== 0)) {
            PrimeNumbers.push(i)
        }
        i++
    }
    return PrimeNumbers[n - 1]
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => nthPrimeNumber(n))) // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(nthPrimeNumber(100)) // 541
console.log(nthPrimeNumber(1000)) // 7919

console.time('Primo #1000')
console.log(nthPrimeNumber(10000)) // 104729
console.timeEnd('Primo #1000') // 200 - 800 ms
function quadraticEquationSolutions(A, B, C) {
    let solution = { x1: 0, x2: 0 }
    if (A === 0) {
        if (B === 0) {
            return C === 0
                ? 'There are infinite solutions'
                : 'There are no solutions'
        } else {
            return { x: -C / B }
        }
    } else {
        let dSquare = B ** 2 - 4 * A * C
        if (dSquare < 0) {
            return 'The solutions are imaginary'
        } else {
            let d = Math.sqrt(dSquare)
            return { x1: (-B + d) / (2 * A), x2: (-B - d) / (2 * A) }
        }
    }
}


// x^2 - 9x + 20 = 0
console.log(quadraticEquationSolutions(1, -9, 20))
// {x1: 5, x2: 4}

// x^2 - 4x + 5 = 0
console.log(quadraticEquationSolutions(1, -4, 5))
// The solutions are imaginary

// 5x - 15 = 0
console.log(quadraticEquationSolutions(0, 5, -10))
// {x: 2}

// 8 = 0
console.log(quadraticEquationSolutions(0, 0, 8))
// There are no solutions

// 0 = 0
console.log(quadraticEquationSolutions(0, 0, 0))
// There are infinite solutions
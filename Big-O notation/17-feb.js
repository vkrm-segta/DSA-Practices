// -------------- Big-O Rules --------------- //

// Calculation not dependent on input size - O(1)
// 1 loop -O(n)
// 2 nested loops - O(n^2)
// Input size reduced by half - O(logn)


// ---------------- Find factorial of n numbers -------------- //

function Factorial(n) {
    let result = 1
    for(i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(Factorial(0)) // 1
console.log(Factorial(1)) // 1
console.log(Factorial(4)) // 24
console.log(Factorial(5)) // 120

// Big-O = O(n)


// ---------------------Checking for Prime number--------------------------- //


function isPrime(n) {
    if(n < 2) {
        return false
    }

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(6)) // false
console.log(isPrime(19)) // true
console.log(isPrime(38)) // false

// Big-O = O(n)
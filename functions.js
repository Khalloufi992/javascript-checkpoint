/********************************************
 * STRING MANIPULATION FUNCTIONS
 ********************************************/

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Count characters in a string
function countCharacters(str) {
    return str.length;
}

// Capitalize first letter of each word
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


/********************************************
 * ARRAY FUNCTIONS
 ********************************************/

// Find maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Find minimum value in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Sum all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter array based on a condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}


/********************************************
 * MATHEMATICAL FUNCTIONS
 ********************************************/

// Calculate factorial of a number
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Generate Fibonacci sequence up to n terms
function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, n);
}


/********************************************
 * TESTING (you can remove this part if needed)
 ********************************************/

console.log("Reverse:", reverseString("hello"));
console.log("Count:", countCharacters("hello"));
console.log("Capitalize:", capitalizeWords("hello world"));

console.log("Max:", findMax([1, 5, 10, 3]));
console.log("Min:", findMin([1, 5, 10, 3]));
console.log("Sum:", sumArray([1, 2, 3, 4]));

console.log("Factorial:", factorial(5));
console.log("Is Prime (7):", isPrime(7));
console.log("Fibonacci:", fibonacci(6));
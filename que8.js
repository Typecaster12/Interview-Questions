//factorial function;
const factorial = (num) => {
    //number should be positive;
    if (num < 0) {
        return false;
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    //using recursion;
    return num * factorial(num - 1);
}


console.log(factorial(5));
console.log(factorial(-5));
console.log(factorial(3));
console.log(factorial(0));
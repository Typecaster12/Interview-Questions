//write a function that takes am integer num as input and returns true if num is a power of two, and false otherwise;

// eg => isPowerTwo(8) => true
// eg => isPowerTwo(7) => false 

//so we will run a for loop from 1 to input (number - 1) to check;
const isPowerTwo = (num) => {
    //will become true if num is in power of two;
    let power = false;

    for (let i = 1; i < num; i++) {
        if ((2 ** i) === num) {
            power = true;
        }
    }

    return power;
}

console.log(isPowerTwo(8)) //true
console.log(isPowerTwo(7)) //false
console.log(isPowerTwo(9)) //false
console.log(isPowerTwo(90)) //false
console.log(isPowerTwo(4)) //true
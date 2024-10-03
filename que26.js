//function to generate an array having number from a to b(inclusive);
//eg=> num(0, 5) => [0,1,2,3,4,5];

const generator = (firstNum, secondNum) => {
    let ansArray = [];

    //loop from firstNum to secondNum + 1;
    for (let i = firstNum; i <= secondNum; i++) {
        ansArray.push(i);
    }

    return ansArray;
}

console.log(generator(0, 5));
console.log(generator(-5, 5));
//function to calculate the sum of square of all elements in an array.
//eg => [1, 2, 3] => 1 + 4 + 9 => 14;

//first method;
const squareOfElemenmts = (arr1) => {
    let soltion = arr1.reduce((accum, item) => accum += item ** 2, 0);
    return soltion;
}

console.log(squareOfElemenmts([1, 2, 3]));


//second method;
const secondMethod = (arr2) => {
    let answer = 0;

    for (let i = 0; i < arr2.length; i++) {
        answer += arr2[i] ** 2;
    }

    return answer;
}

console.log(secondMethod([1, 2, 3]));
//? program for atm card number validation using luhn algorith;
//! luhn algorithm =>

// //* 1: reverse the digit which we are using;
// let atmNumber = [7, 3, 0, 7, 6, 6, 7, 2, 8, 3];

// //to store reversed str;
// let reversedNum = []; //! 3827667037;
// //loop to get the revesed digit;
// for (j = atmNumber.length - 1; j >= 0; j--) {
//     reversedNum.push(atmNumber[j]);
// }


// //* double every second number starting from oth element;
// let doubledNum = reversedNum.map((value, index) => ((index + 1) % 2 === 0 ? value * 2 : value));
// console.log(doubledNum);


// //* subtract the number from 9 only those which are higher than 9;
// let subNum = doubledNum.map(value => (value > 9 ? value - 9 : value));
// console.log(subNum);

// //* add all the values and retur it;
// let Addition = subNum.reduce((num1, num2) => (num1 + num2));
// console.log(Addition);

// //* check modulo(if addition % 10 === 0)then number is valid;
// if (Addition % 10 === 0) {
//     console.log("valid number a/c to luhn algo")
// } else {
//     console.log("Not Valid");
// }

const checkValidtion = (numArr) => {
    //* 1: reverse the digit which we are using;
    //to store reversed str;
    let reversedNum = [];
    //loop to get the revesed digit;
    for (j = numArr.length - 1; j >= 0; j--) {
        reversedNum.push(numArr[j]);
    }

    //* double every second number starting from oth element;
    let doubledNum = reversedNum.map((value, index) => ((index + 1) % 2 === 0 ? value * 2 : value));

    //* subtract the number from 9 only those which are higher than 9;
    let subNum = doubledNum.map(value => (value > 9 ? value - 9 : value));

    //* add all the values and retur it;
    let Addition = subNum.reduce((num1, num2) => (num1 + num2));

    //* check modulo(if addition % 10 === 0)then number is valid;
    if (Addition % 10 === 0) {
        return `${numArr} is valid a/c to luhn algorith`;
    } else {
        return `${numArr} is not valid a/c to luhn algorith`;
    }
}

console.log(checkValidtion([4,5,3,9,1,4,8,8,0,3,4,3,6,4,6,7])) //!true;
console.log(checkValidtion([4,5,3,9,1,4,8,8,0,3,4,3,6,0,7,4])) //!false;
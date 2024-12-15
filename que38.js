//? the fizzBuzz challange
//* pass two number startingNum and endNum
//* for each num (i) in the range from startingNum and endNum(both inclusive);
//! eg => if (1,6) is given then we have, [1,2,3,4,5,6];

//* if (i) is divisible by both 3 and 5 write that (i) as "FizzBuzz";
//* if (i) is div by only 3, write "Fizz";
//* if (i) is div by only 5, write "Buzz"; else write the (i) itself;

//!eg => for above array output will be, [1, 2, "Fizz", 4, "Buzz", "Fizz"]...

// let starNum = 1;
// let endNum = 10;
// let arr = [];

// for (i = starNum; i <= endNum; i++) {
//     arr.push(i);
// }

// console.log(arr);

//solution;
// let newArr = arr.map((value, index) => {
//     if ((value % 3 === 0) && (value % 5 === 0)) {
//         value = "FizzBuzz";
//     } else if (value % 3 === 0) {
//         value = "Fizz";
//     } else if (value % 5 === 0) {
//         value = "Buzz";
//     }

//     return value;
// });

// console.log(newArr);

const FizzBuzz = (starNum, endNum) => {
    let arr = [];

    for (i = starNum; i <= endNum; i++) {
        arr.push(i);
    }

    let newArr = arr.map((value) => {
        if ((value % 3 === 0) && (value % 5 === 0)) {
            value = "FizzBuzz";
        } else if (value % 3 === 0) {
            value = "Fizz";
        } else if (value % 5 === 0) {
            value = "Buzz";
        }

        return value;
    });

    return newArr;
}

console.log(FizzBuzz(1, 15));
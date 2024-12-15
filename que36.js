//function that takes an array and creates an text based barChart;
// arr => [1,2,3,4];
// *
// **
// ***
// ****
// here each starts indicating the element's value present inside the array;

//create a function that will take the array;
// use loop like forOff but here iam prefering forEach..
// for printing star a/c to value present in each index of the array we can use normal for loop
//that will run from 1 to the value itself

// let arr = [1, 5, 7, 2];
// //forEach loop for array;
// arr.forEach((val, ind) => {

//     let star = '';
//     let number = 0;

//     //hwile loop;
//     while (number < val) {
//         star = star + "*";
//         number++;
//     }

//     console.log(`${ind + 1} : ${star}`);
// });

const barFromArray = (arr) => {

    //result array; 
    let resultArr = [];

    //foreach loop for array;
    arr.forEach((value, index) => {
        //stores stars
        let stars = "";
        //num var, which will make the while loops runs a/c to this var;
        let number = 0;

        while (number < value) {
            stars = stars + "*";
            number++;
        }

        resultArr.push(`${index + 1} : ${stars}`);
    });

    return resultArr;
}

let arry = [2, 5, 4, 6, 10];
let finalAns = barFromArray(arry);
finalAns.forEach(line => console.log(line));

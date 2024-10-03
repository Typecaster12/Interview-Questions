//function that takes int values and returns sum of all the digits;
const returnSum = (num) => {
    //converting the number into array of strings;
    //convert every elements of the array(string) into number;
    let arrOfNum = Array.from(String(num), Number);

    //the final sum;
    let sum = arrOfNum.reduce((accum, item) => accum += item, 0);
    return sum;
}

console.log(returnSum(1234)); //10
console.log(returnSum(1)); //1
// console.log(returnSum(-1)) //false
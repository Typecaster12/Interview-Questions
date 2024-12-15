//function to calculate the number of days between two dates; the date will be provided in the formate 'yyyy-mm-dd'; 


//function;
//give the dates in the formate of 'yyyy-mm-dd';
// const calculateDays = (dateString1, dateString2) => {
//     //using date object;
//     const userDateOne = new Date(dateString1);
//     const userDateTwo = new Date(dateString2);

//     //getting the dates(in number);
//     const dateOfOne = userDateOne.getDate();
//     const dateOfTwo = userDateTwo.getDate();

//     //final answer;
//     const answer = Math.abs(dateOfTwo - dateOfOne);

//     //return the final answer;
//     return answer;
// }

// console.log(calculateDays('2024-10-15', '2024-10-30')); //15
// console.log(calculateDays('2024-01-01', '2024-02-31')); //30
//this function is applicable only for same months;



//this is applicable for same as well as diff months;
//another method;
const calculateDatesBetween = (d1, d2) => {
    let date1 = new Date(d1);
    let date2 = new Date(d2);

    let diff = Math.abs(date2 - date1);

    return diff / (24 * 60 * 60 * 1000);
}

console.log(calculateDatesBetween('2024-10-15', '2024-10-30'));
console.log(calculateDatesBetween('2024-01-01', '2024-02-31')); 

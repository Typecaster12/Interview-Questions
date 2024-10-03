//fucntion that takes array of numbers and return biggest number;

//logic;
// let arr = [10, 200, 3, 40, 50] //200;
// let container = 0;
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > container) {
//         container = arr[i];
//     }
// }



const findMax = (arr) => {

    //array should not be empty;
    if (arr.length === 0) {
        return false;
    }

    //contains max number;
    let container = 0;

    //loop the check each value of the array;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > container) {
            container = arr[i];
        }
    }
    return container;
}

console.log(findMax([1, 2, 3, 4, 60, 7])); //60
console.log(findMax([1, 120, 3, 45, 60, 70])); //120
console.log(findMax([-10, -5, -3, 0, -9])); //0
console.log(findMax([5])); //5
console.log(findMax([])); //false
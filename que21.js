//function to calculate mean of elements of array;
//add all the elements of the array then divide it by the count of elements(array.length);

const Mean = (arr) => {
    //array should not be empty;
    if (arr.length === 0) {
        return false;
    }
    //stores sum;
    let arraySum = 0;

    for (let i = 0; i < arr.length; i++) {
        arraySum = arraySum + arr[i];
    }
    //to find mean;
    let mean = (arraySum / arr.length);

    //return mean;
    return mean;
}

console.log(Mean([1, 2, 3, 4, 5]));
console.log(Mean([10, 20, 30]));
console.log(Mean([-1, 0, 1]));
console.log(Mean([]));
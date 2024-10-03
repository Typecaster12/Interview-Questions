//function to find avg of elements of array;

const findAvgArr = (arr) => {
    //array should not be empty;
    if (arr.length === 0) {
        return false;
    }

    //stores sum of all the elements of array;
    let sum = arr.reduce((ele1, ele2) => {
        return ele1 + ele2;
    });

    //for avg divide the sum by array's length;
    let avg = sum / arr.length;
    return avg;
}

console.log(findAvgArr([5, 10, 2, 8]));
//function to return minimum value from the array;
const findMinimum = (arr) => {
    //Assuming that the first element is the smallest;
    let mini = arr[0];

    //array should not be empty;
    if (arr.length === 0) {
        return false;
    }

    //for loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mini) {
            mini = arr[i];
        }
    }

    return mini;
}

console.log(findMinimum([-1, 2, 3, 4, 60, 7]));
console.log(findMinimum([-1, 2, 3, 4, 60, -7]));
console.log(findMinimum([145, 21, 300, 40, 6000, 700]));
console.log(findMinimum([]));
//we have .sort method also, using that we can sort the array into assending or descending order and return the first or last element a/c to assending or desending;
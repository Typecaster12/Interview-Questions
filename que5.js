//function to sort the array in assending order;

const assending = (arr) => {
    //sorting
    let sortedArray = arr.sort((a, b) => a - b);

    //return it;
    return sortedArray;
}


console.log(assending([2, 5, 1, 9, 3, 10]));
console.log(assending([2, 5, 1, 4, 3, 1]));

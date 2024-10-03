//fucntion that takes 2 array as input and returns true, if both the array are same(contains same value at the same places);


const isTrueArray = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    //appling map on arr1;
    return arr1.every((curEle, index) => curEle === arr2[index]);
};


console.log(isTrueArray([1, 2, 3], [1, 2, 3])) //true;
console.log(isTrueArray([1, 2, 3], [1, 2, 4])) //false;
console.log(isTrueArray([1, 2, 3], [1, 3, 2])) //false;
console.log(isTrueArray([1, 2, 3], [1, 3, 2, 9])) //false;
console.log(isTrueArray([3, 3, 2, 9], [1, 3, 2, 9])) //false;

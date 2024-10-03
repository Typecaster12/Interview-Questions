//function that takes array of numbers and removes the dublicate items from the array;

//logic
//humara ak main array hoga, or an empty array hoga;
//hamre pass ak nested loop hoga, the outer one is for the main array which access all the elements of the main array;

//and the nested one is for empty array that will hold the values further;

//hum phle nmain array ke 1st element ko check krnge agr vo empty array ke element ke equal nhi hua to us element to empty array mai push kr dnge;

//then again we check the second element of main array,

//if the element of main array and empty array are same then that will be the dublicate one;

const removeDublicates = (arr) => {
    //empty array that will hold unique values;
    let uniqueArrayEles = [];

    //loop for the main array(arr);
    for (let i = 0; i < arr.length; i++) {
        //will be true if found some dublicate item;
        let isDublicate = false;

        //nested loop for the uniqueArray;
        for (let j = 0; j < uniqueArrayEles.length; j++) {
            //conditions to match elements of main array and this unique array;
            if (arr[i] === uniqueArrayEles[j]) {
                isDublicate = true;
                break;
            }
        }

        //push the elements of main array to the unique array untill the conditions is met;
        if (!isDublicate) {
            uniqueArrayEles.push(arr[i]);
        }
    }

    return uniqueArrayEles;
}

console.log(removeDublicates([1, 2, 3, 1, 2, 3]));
console.log(removeDublicates([1, 2, 3, 4, 4, 4, 4, 5]));
console.log(removeDublicates([4, 4, 4, 4, 4, 4, 4, 4]));
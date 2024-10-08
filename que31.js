//function that takes and array of arrays containing key value pair and convert it into object;
//we will achieve this functionality by using Object.fromEnteries();

const convertObjIntoArray = (arr) => {
    if (arr.length === 0) {
        return `Invalid array formate`;
    }
    let newObject = Object.fromEntries(arr);
    return newObject;
}

console.log(convertObjIntoArray([["name", "Alice"], ["age", 25], ["country", "USA"]]));
console.log(convertObjIntoArray([]));
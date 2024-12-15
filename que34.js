//fucntion to check if the given object is empty or not?

//to check objects length we use Object.keys(obj name).length
// or 
//to check objects length we use Object.values(obj name).length
// let obj = {
//     name: "harsh"
// }

// console.log(Object.values(obj).length);

const checkIsEmpty = (obj) => {
    if ((Object.keys(obj).length) === 0) {
        return true;
    } else {
        return false;
    }
};

let obj1 = {
    name: "harsh"
}

let obj2 = {};

console.log(checkIsEmpty(obj1)); //false
console.log(checkIsEmpty(obj2)); //true
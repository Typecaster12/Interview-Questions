//function to  convert object to array;


// let obj = {
//     name: "Harsh Mishra",
//     age: 21,
//     city: "Kanpur",
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// let customArray = Object.entries(obj).map(([key, value]) => {
//     return `${key}: ${value}`
// });

// console.log(customArray);

//this can be achieved by using object method i.e. Object.entries();
//this method returns array of arrays containing key value pair;

const convertObjToArray = (obj) => {

    //length should not be 0;
    if (Object.entries(obj).length === 0) {
        return `invalid object formate`;
    }

    let customArray = Object.entries(obj).map(([key, value]) => {
        return `${key}: ${value}`;
    });

    return customArray;
};

console.log(convertObjToArray({
    name: "Harsh Mishra",
    age: 21,
    city: "Kanpur",
}));

console.log(convertObjToArray({}));
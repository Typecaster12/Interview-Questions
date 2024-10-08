//function that checks if the passed object is empty or not;


const checkObject = (obj) => {
    if (Object.keys(obj).length === 0) {
        return 'object is empty';
    } else {
        return 'object is Full';
    }
}

console.log(checkObject({}));
console.log(checkObject({ name: "Harsh" }));
console.log(checkObject({ name: null }));
console.log(checkObject({ name: undefined }));
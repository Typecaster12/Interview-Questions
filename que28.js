//function to remove dublicate items from an array;
// a = [1,2,2,3,2,4] => [1,2,3,4]

const removeDublicate = (arr) => {
    let uniqueArray = [];

    //nested loop;
    for (let i = 0; i < arr.length; i++) {
        let isDublicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDublicate = true;
                break;
            }
        }

        if(!isDublicate){
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

console.log(removeDublicate([1,1,1,3,2,3,4,2,4,5]));
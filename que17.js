//function to convert the string into camelCase.

const intoCamelCase = (word) => {
    //string's length should not be empty;
    if (word.length === 0) {
        return false;
    }

    //converting into array;
    word = word.split(' ');

    let ans = word.map((item, index) => {
        if (index === 0) {
            return item.toLowerCase();
        } else {
            return item.slice(0, 1).toUpperCase() + item.slice(1, item.length).toLowerCase();
        }
    });

    ans = ans.join('');
    return ans;
}

console.log(intoCamelCase("This is how leGenDs Are made"));

//function for snake_case;
let str = "My Name is Harsh Mishra";
//into lowerCase
str = str.toLowerCase();
//into array;
let arrStr = str.split(' ');
//applying map to access the elements;
let m = arrStr.map((item, index) => {
    //1st element will be same;
    if (index === 0) {
        return item;
    } else {
        return "_" + item;
    }
});

m = m.join('');
console.log(m);
//function to truncate a string;
//it takes 2 parameters, 1. is the string itself and 2. is the maximum length the string should be allowed;
// eg => str = "Harsh Mishra" (length = 12), but allowed is 5 the the output is..
//output => Harsh...

const truncateString = (str, maxLength) => {
    let truncated;

    if (str.length > maxLength) {
        truncated = str.slice(0, maxLength);
        return `${truncated}...`;
    } else {
        return str;
    }
}

console.log(truncateString("Harsh Mishra", 5));
console.log(truncateString("A-tisket a-tisket a green and yellow basket", 8));
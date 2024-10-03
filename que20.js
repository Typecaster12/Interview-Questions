//function to return reverse string from the givin string;

const reverseString = (word) => {
    let reversedString = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reversedString = reversedString + word.charAt(i);
    }

    return reversedString;
}

console.log(reverseString("Harsh"));
console.log(reverseString("Jhon snow"));
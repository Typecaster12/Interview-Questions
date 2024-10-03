//write a function  findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered;

// eg; findLongestWord("Harsh is good Boy") => here harsh is the longest word;

//solution;
const findLongestWord = (word) => {
    //string should not be empty;
    if (word.length === 0) {
        return false;
    }

    //trim the white spaces;
    let trimmedWord = word.trim();

    //spliting the string into array;
    let word_arr = trimmedWord.split(' ');

    //var contains longest word;
    //empty var so when we iterate through each word of array every word sent to this variable and then other words is compaired by this word then return the longest word;
    let longestWord = '';

    for (let word of word_arr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("Harsh is good boy"));
console.log(findLongestWord("JavaScript is probabilly the longest word"));
console.log(findLongestWord("   JavaScript is probabilly the longest word             "));


//second method;
const findLongest = (longestWord) => {
    if(longestWord.length === 0){
        return false;
    }

    let newTrimedWord = longestWord.trim();

    //to array;
    let arr = newTrimedWord.split(" "); //array

    let sortedArray = arr.sort((a, b) => b.length - a.length);
    
    return sortedArray[0];
}

console.log(findLongest("Harsh is practising javascript nowadays"));



//character counter => write a function that will count how many times the given character appears?
// eg => findChar("harsh", "h") => o/p = 2(as h appears two times);

// logic
// givenC = harsh;
// loop => iterate through each word;
// ak hoga var count = 0;
// if i == given char => count + 1

const findChar = (word, char) => {
    let count = 0;

    word = word.toLowerCase();
    char = char.toLowerCase();

    for (let i = 0; i <= word.length; i++) {
        if (word[i] == char) {
            count += 1;
        }
    }
    return count;
}

console.log(findChar("harsh", "h")); //2
console.log(findChar("Harsh", "H")); //2 works for upper and lower case both;
console.log(findChar("JavaScript", "a"));
console.log(findChar("MissIssippi", "i"));


// exp => 
/*
step1 = made a var that hold the number of char appears;
step2 = this program should not be case-sensitive;
step3 = basic for loop that will check each char of string with given char if they mached then inc count by 1

step4 = simply returns the count;
*/
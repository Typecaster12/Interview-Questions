//function to check if a given string starts with a specific substring.
//eg => ("Hello world", "Hello") => true;
//eg => ("Hello world", "world") => false;

const checkFirst = (word, firstWord) => {
    //no case sensitivity;
    word = word.toLowerCase();
    firstWord = firstWord.toLowerCase();

    //into array;
    word = word.split(' ');

    //checking first word;
    if (word[0] === firstWord) {
        return true;
    } else {
        return false;
    }
}

console.log(checkFirst("Hello world", "Hello"));
console.log(checkFirst("Hello world", "jHon"));
console.log(checkFirst("jHon snow", "jHon"));
console.log(checkFirst("jHon snow", "JHon"));
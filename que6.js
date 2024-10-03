//write a function to check if the given string is palindrom or not;
// eg => naman (this is palindrom string);

//logic
//if we can reverse the whole string and comapre... if the reversed str and old str is same then the string is palindrom;



const checkPalindrom = (word) => {
    //change the word into lowerCase();
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    //empty var that holds the reversed string;
    let revStr = '';

    //backward loop;
    for (let i = word.length - 1; i >= 0; i--) {
        revStr += word[i];
    }

    if (word === revStr) {
        return `Yes ${word} is palindrom`;
    } else {
        return `No ${word} is not a palindrom`;
    }
}

console.log(checkPalindrom("Madam")); //yes
console.log(checkPalindrom("Harsh")); //no
console.log(checkPalindrom("Naman")); //yes
console.log(checkPalindrom("Anuj")); //no
console.log(checkPalindrom('racecar'));
console.log(checkPalindrom('A man'));
console.log(checkPalindrom('m adam'));
//function thak takes string as input and return count of vowels in the string(both upper and lowercase);
const countVowels = (word) => {

    //no case senstivity;
    word = word.toLowerCase();

    //string should not be empty;
    if (word.length === 0) {
        return false;
    }

    //stores number of vowels;
    let count = 0;

    //loop that iterate through each element of the string;
    for (let i = 0; i <= word.length - 1; i++) {
        if ((word.charAt(i) == 'a') || (word.charAt(i) == 'e') || (word.charAt(i) == 'i') || (word.charAt(i) == 'o') || (word.charAt(i) == 'u')) {
            count = count + 1;
        }
    }

    return count;
}
console.log(countVowels("Orange")) //3
console.log(countVowels("The Quick Brown Fox")) //5
console.log(countVowels("Brrp")) //0
console.log(countVowels("Helloo World")) //4
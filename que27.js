//hexCodeGenerator function;
//length should be 7(including #);
//fucntion should have 0 parameter;

//solution => first generate a random number without giving any argument so it will give values between 0 and 1 in decimals;

//convert the random number to hexaDecimal string
//slice 6 numbers from the string and add (#) in front of the string;

const hexGenerator = () => {
    //random number;
    const randomInt = Math.random();
    //converting the number into hexaDecimal;
    //by giving base 16;
    const hexaDecimalStr = randomInt.toString(16);
    //slicing the string;
    //0th and 1st element is 0 and (.) so starting from 2;
    const slicedString = hexaDecimalStr.slice(2, 8);
    //incase of not getting 6 numbers we will add 0's;
    const stringsWithZeros = slicedString.padEnd(6, 0);
    //return the final string with #;
    const finalString = `#${stringsWithZeros}`;
    return finalString;
}

console.log(hexGenerator());
//hastag generator => write a function that will give output something like this;
// console.log(hashGenerator("My name is harsh")); => #MyNameIsHarsh;

const hashGenerator = (word) => {
    //converting the str to array;
    word = word.split(' ');

    //to iterate throught each value;
    str = word.map((value) =>
        //replacing each word's first word to upperCase;
        value.replace(value[0], value[0].toUpperCase())
    );

    //joining the elements
    str = `#${str.join('')}`;
    return str;
}


console.log(hashGenerator("my name is harsh"));
console.log(hashGenerator("hello there this is harsh and iam solving js interview questions"));


// exp => 
/*
step1 = convert the string into Array;
step2 = use map method to access the elements of Array;
step3 = value[0] => by this we access first character of each element;
step4 = replace the lowerCase words with upper case;
step5 = convert the final array into string using .join('')
step6 = return the final result;
*/
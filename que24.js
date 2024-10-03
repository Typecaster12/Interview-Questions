//function to repeate stirng the number of times the user give;
//it takes 2 input, the str and an int;


//logic;
//the outer loop cmnd how many times you have to repeat the string as it runs the number of times the user wants the str to repeate;

//the inner loop will add the strings Char to the given string;

const repeateString = (str, rep) => {
    if (rep < 0) {
        return 'Invalid Repeatations';
    }
    //the given str will be stores inside this container;
    let strContainer = str;

    //nested loop;
    //outer one runs the number of times rep is assinged;
    for (let i = 1; i <= rep; i++) {
        //the inner loop to add the char to the string's container;
        for (let j = 0; j < str.length; j++) {
            strContainer += str.charAt(j);
        }
    }

    return strContainer;
}

console.log(repeateString("Harsh", 2));
console.log(repeateString("Harsh", 0));
console.log(repeateString("Harsh", -1));
console.log(repeateString("Harsh", 5));
//function for febonacci series;
const feboSeries = (number) => {
    let first = 0;
    let second = 1;
    let nextTerm;

    console.log(first);

    //print second term incase of number > 1;
    if (number > 1) {
        console.log(second);
    }

    //first two terms are printed initially so start from 3rd value;
    for (let i = 3; i <= number; i++) {
        nextTerm = first + second;
        console.log(nextTerm);//print the next term;

        first = second;
        second = nextTerm;
    }
}


feboSeries(0);
feboSeries(1);
feboSeries(2);
feboSeries(3);
feboSeries(5); 
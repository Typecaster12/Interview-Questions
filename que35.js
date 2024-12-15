//calculate age from date of birth;

const calcAge = (birthDate) => {
    // today's date as date obj
    let todayDate = new Date();
    //birthdate as date obj;
    birthDate = new Date(birthDate);

    //year from today's date and birthdate;
    let currentYear = todayDate.getFullYear();
    //year from birthDate;
    let birthYear = birthDate.getFullYear();

    //calculating age;
    let age = currentYear - birthYear; 
    return age;
}

let mydate = '2003-11-29';
console.log(calcAge(mydate));
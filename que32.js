//function to calculate simple intrest;
// formula => P*R*T/100;

const calculateSimpleInt = (pr, rate, time) => {
    return (pr * rate * time) / 100;
}

console.log(calculateSimpleInt(1000, 5, 3));

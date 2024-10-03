// write a function to check type of triangle take 3 parameters and compare on the basis of that
const checkTriangleType = (a, b, c) => {
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || a === c) return "IsoSceles";
    return "Scalene";
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 3, 4));
console.log(checkTriangleType(3, 5, 8));

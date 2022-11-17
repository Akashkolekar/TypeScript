console.log("=============Grade Calculator===============");
var maths = +prompt("enter marks:");
console.log("Maths: ".concat(maths));
var physics = +prompt("enter marks:");
console.log("Physics: ".concat(physics));
var chemistry = +prompt("enter marks:");
console.log("Chemistry: ".concat(chemistry));
var arr = [maths + physics + chemistry];
var avg = arr.reduce(function (a, b) { return a + b; }, 0) / 3;
console.log('Average: ', avg);
if (avg < 70) {
    console.log("Grade is 'C'");
}
else if (avg > 70 && avg < 90) {
    console.log("Grade is 'B'");
}
else if (avg > 90) {
    console.log("Grade is 'A'");
}

console.log("=============Grade Calculator===============");


var maths = +prompt("enter marks:")
console.log(`Maths: ${maths}`);

var physics = +prompt("enter marks:")
console.log(`Physics: ${physics}`);

var chemistry = +prompt("enter marks:")
console.log(`Chemistry: ${chemistry}`);


var arr = [maths+physics+chemistry]


const avg = arr.reduce((a, b) =>a + b,0) / 3
console.log('Average: ',avg);

if (avg < 70) {
    console.log("Grade is 'C'");
}else if(avg >70 && avg < 90){
    console.log("Grade is 'B'");
}else if(avg > 90){
    console.log("Grade is 'A'");
    
}
console.log("=========before adding element===========");
var array:any= ['J&J','Pfizer','Sputnik']
console.log(array);

console.log("=========after adding element===========");
array.push('Covaxin')
console.log(array);

console.log("=========traversing=====================");

for (var i= 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("=========destructuring==================");
var [vaccine1, vaccine2, vaccine3,vaccine4] = array

console.log(`1st vaccine: ${vaccine1}`);
console.log(`2st vaccine: ${vaccine2}`);
console.log(`3st vaccine: ${vaccine3}`);
console.log(`4st vaccine: ${vaccine4}`);



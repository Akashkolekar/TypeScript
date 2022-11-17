console.log("=========before adding element===========");
var array = ['J&J', 'Pfizer', 'Sputnik'];
console.log(array);
console.log("=========after adding element===========");
array.push('Covaxin');
console.log(array);
console.log("=========traversing=====================");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("=========destructuring==================");
var vaccine1 = array[0], vaccine2 = array[1], vaccine3 = array[2], vaccine4 = array[3];
console.log("1st vaccine: ".concat(vaccine1));
console.log("2st vaccine: ".concat(vaccine2));
console.log("3st vaccine: ".concat(vaccine3));
console.log("4st vaccine: ".concat(vaccine4));

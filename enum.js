var week;
(function (week) {
    week[week["sunday"] = 1] = "sunday";
    week[week["monday"] = 2] = "monday";
    week[week["tuesday"] = 3] = "tuesday";
    week[week["wednesday"] = 4] = "wednesday";
})(week || (week = {}));
console.log(week);
console.log(week[1]);
console.log(week[2]);
console.log(week[3]);
console.log(week[4]);
var direction;
(function (direction) {
    direction[direction["north"] = 1] = "north";
    direction[direction["east"] = 2] = "east";
    direction[direction["south"] = 3] = "south";
    direction[direction["west"] = 4] = "west";
})(direction || (direction = {}));
console.log(direction);
console.log(direction[1]);
console.log(direction[2]);
console.log(direction[3]);
console.log(direction[4]);

var passenger = /** @class */ (function () {
    function passenger(firstName, lastName, flightNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.flightNo = flightNo;
    }
    return passenger;
}());
var passengerDetail = new passenger("Jack", "Sparrow", 101);
console.log(passengerDetail);

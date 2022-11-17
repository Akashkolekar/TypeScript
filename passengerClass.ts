class passenger {
    firstName: string;
    lastName: string;
    flightNo: number
    constructor(firstName: string,lastName: string, flightNo: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.flightNo = flightNo;
    }
}

var passengerDetail = new passenger("Jack","Sparrow",101)
console.log(passengerDetail);

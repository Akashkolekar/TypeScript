interface IpersonDetail_1 {
    firstName: string;
    lastName: string;
}

interface IpersonDetail_2 {
    address: string;
    contact: number;
}

interface employee extends IpersonDetail_1, IpersonDetail_2 {
    developer: string;
}

var employeeDetail: employee = {
    developer: "Angular",
    firstName: "Abhijit",
    lastName: "Chavan",
    address: "Kolhapur",
    contact: 8421742801
}
console.log(employeeDetail);

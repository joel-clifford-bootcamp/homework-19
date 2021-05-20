const faker = require('faker');

const makeEmployee = () => {
   const[ firstName, lastName ] = faker.name.findName().split(' ');

    return {
        employeeId: Math.floor(10000 * Math.random()) + Math.floor(1000 * Math.random()),
        firstName: firstName,
        lastName: lastName,
        department:  faker.name.jobArea(),
        phoneNumber: faker.phone.phoneNumberFormat(1)
    }
}

function makeEmployees(numberOfEmployees){
    const employees = [];
    let i;
    for(i = 0; i < numberOfEmployees; i++){
        employees.push(makeEmployee())
    }
    return employees;
}


export default makeEmployees;
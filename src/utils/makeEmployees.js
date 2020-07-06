const {uniqueNamesGenerator, names} = require('unique-names-generator');

const makeEmployee = () => {
   const uniqueNames = uniqueNamesGenerator({ 
       dictionaries: [names, names], 
       length: 2, 
        separator: ' '
    }).split(' ');

    return {
        employeeId: Math.floor(10000 * Math.random()) + Math.floor(1000 * Math.random()),
        firstName: uniqueNames[0],
        lastName: uniqueNames[1]
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
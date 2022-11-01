let num =21;

if (num%2 === 0) {
    

}
console.log('EVEN');


let countryName= 'UniTED states of AmerICa';
let countryName_U= countryName.toUpperCase();

console.log (`Country is ${countryName_U}`);



let countryName1= 'UniTED states of AmerICa';
let countryName_U1= countryName1.toUpperCase();
let countryFor_U1= 'United states of america'.toUpperCase();

if (countryName_U1.localeCompare(countryFor_U1) ===0 ){

    console.log ('You are a USA Citizen');
}

let student = {
    first: `Kon`,
    last: `Kmf`,
    age: 30,
    height: 57,
    studentInfo: function () {
        return this.first + '' + ''  + this.last;

    }


};
console.log(student.studentInfo());


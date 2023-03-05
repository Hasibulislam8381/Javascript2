const x=10;
if(x===10){
    console.log("x is 10");
}
else if(x>12)
{
    console.log("X is greater that 10");
}
else{
    console.log("x is less than 10");
}
const color = x>10 ? 'red' : 'blue';
switch(color)
{
    case 'red':
        console.log("Color is red");
        break;
    case 'blue':
        console.log("Color is blue");
        break;
}
//function

function addNum(n1,n2){
    console.log(n1+n2);
}
addNum(12,3)

function add(n3,n4){
    return (n3+n4);
}
console.log(add(34,12));

const addnums = (num1,num2) => num1+num2;
console.log(addnums(12,7));

const num3 = (num6,num4) => num6+num4;
console.log(num3(123,12));

//constructor function===> start with capital letter

//E6 arraw function
//class
class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob =new Date(dob);
    }
    getBirthYear = function() {
        return this.dob.getFullYear();
    }
    getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}


//Instantiate Object
const rahim = new Person('Abdur','Rahim','4-3-1980'); 
const jobbar = new Person('Jobbar','Rahim','14-08-1999'); 
const kalu = new Person('Kalu','Rahim','14-08-1999'); 

// console.log(rahim);
// console.log(rahim.getBirthYear());
// console.log(rahim.getFullName());
console.log(rahim);

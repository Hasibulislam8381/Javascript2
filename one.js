
// console.log('Hello world');
// console.error('This is an error');
// console.warn('This is an warning');


// to declare variable var , let ,const 
//var was used in very old javascript code , const can use when U dont want to change the value of the variable,but if u use let variable data can be changed

//data type>> string,Numbers,Boolean,null, undefined
// const name='Himel';
// const age = 30;
// const rating=4.5;
// const isCool = true;
// const x= null;
// const y = undefined;
// let z;

// console.log(typeof isCool); 


const name='Himel Hasibul';
const age=24;

console.log('My name is '+name+' and my age is '+ age);

//template String
const hello = `My name is ${name} and my age is ${age}`;
console.log(hello);
console.log(name.toLowerCase());
console.log(name.substring(2,4));
console.log(name.split(''));

const fruits=['apples','graps','orange',34,12];
fruits.push('Mango');
fruits.unshift('strawbrary');
fruits.pop();
console.log(fruits);

//Object

const person ={
    firstName:'Hasibul islam',
    lastName:'Himel',
    age:25,
    hobbies:['music','movies','sports'],
    address: {
        street:'ModdhoBashudebpur',
        City:'Hakimpur',
        state:'Dinajpur',
    }
}
console.log(person.firstName+" " + person.lastName+person.address.City);

//arrays
const todos = [

    {
        id:1,
        text:"My name is Himel",
        inCompleted:true

    },
    {
        id:2,
        text:"Meeting with boss",
        inCompleted:true

    },
    {
        id:3,
        text:"Dentist Appointment",
        inCompleted:false

    },
]
console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for(let i=0;i<=10;i++)
{
    console.log(i);
}
// let sum=0;
// for(let i=1;i<=5;i++)
// {
//      sum = sum+i;
// }
// console.log(`The sum is : ${sum}`);
// console.log("The sum is " +sum);
let i=1;
let sum1=0;
while(i<=5)
{
    sum1=sum1+i;
    i++;
}
console.log(`The summation is : ${sum1}`);



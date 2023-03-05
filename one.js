
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
for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text);
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
//for of [Used for arrays or itarable object]
for(let x of todos)
{
    console.log(x.text);
}
//for in[used for object]
for(let x in todos){
    console.log(todos[x]);
}
//for each
todos.forEach(function(todo){
    console.log(todo);
});

//map
const todoText = todos.map(function(x){
    return x.text;
})
console.log(todoText);

const hlw = new Map();
hlw.set("Name","Himel");
hlw.set("Banana",300);
hlw.set("Oranges",500);

console.log(hlw);

const arr = [

    {
        id:01,
        text:"My name is Himel",
        inCompleted:true

    },
    {
        id:02,
        text:"I am from Hakimpur",
        inCompleted:true

    },
    {
        id:03,
        text:"I love to teach",
        inCompleted:false

    },
]
// map filter reduce --> Higher order array method
//Create a new array from a array
const a = arr.map(function(y){
    return y.id;

})
console.log(a);

const a2 = arr.filter(function(check){
    return check.inCompleted==true;
}).map(function(mapping){
    return mapping.text;
})

console.log(a2);




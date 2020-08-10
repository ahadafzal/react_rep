/*
let and const
let is the new var is Es6. var can be used but let is encourages to use.
const is used for constants.
*/

var name = 'afzal';
console.log(name);
name = 'some';
console.log(name);

let name1 = 'let afzal';
name1 = 'new afzal';
console.log(name1);

const unchanged = 'khan';
console.log(unchanged);

/*
Arrow functions
*/

function normalFunc(name){
    return name;
}

console.log(normalFunc('afzal'));

let arrowFunction = (name) => {   // let or const based on need
    return name;
}

console.log(arrowFunction('arrow afzal'));

/*
import and exports
*/


/* 
classes
*/

class Person{
    constructor(name){
        this.name = name;
    }

    display(){
        console.log(this.name);
    }
}

let p = new Person('afzal');
p.display();

/*
spread and rest operator(...)
*/

// spread ( is used to spread to break reference and create exact copies[like .copy() in python])

let numbers = [1, 2, 3];
let newnums = [...numbers, 5];
console.log(newnums);

let ob = {
    name : 'afzal'
}
 
let newob = {
    ...ob,
    age : '22'
}

console.log(newob);

// rest 

const resti = (...args) => {
    console.log(args);
}

resti("afzal",22);


/* 
Destructuriing
*/

// array destructuring

let nums = [1, 2, 3, 4];
[a , , b] = nums;
console.log(a,b)

// object destructuring

let numobject = {
    ame : "name here",
    age  : 123,
    other: "string"
}

let {ame} = numobject;
console.log(ame);

/*
Array functions
Reference doc :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let utilArray = [1, 2, 3, 4, 5, 6];

console.log(utilArray.map((num) => {
    return num*2;
}));
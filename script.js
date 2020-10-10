// Map  filter and reduce

/** 
var map = [1,2,3,4,5,6,7,8,9,10,11,12].map(function(n) {
    return n *2;
});

console.log(map);


var three = [1,2,3,4,5,6,7,8,9,10,11,12].map(function(number) {
    return number * 3; 
});

console.log(three);

*/

// Arrow functions 
/** function sum(a, b) {
    return a + b;


var sum2 = (a, b) => a + b;


function isPositive(number) {
    return number >= 0;
}

let isPositive2 = (number) => number >= 0;


let randomNumber2 = () => Math.random;


document.addEventListener('click', () => console.log('click'));


// Arrow functions 2

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function()  {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'this is box number' + this.position + 'and it is ' + 'and it is ' + this.color;
            this.color;
            alert(str);
        });
    }
}
box6.clickMe();


// destructive array

const [name, age] = ['john',25]
console.log(name);
console.log(age);

const obj = {
    firstName: 'john',
    lastName: 'smith'
};

const {firstName,lastName} = obj;
console.log(firstName);
console.log(lastName);

// array
const boxes = document.querySelectorAll('.box');
 const boxesArr6 = Array.from(boxes);
 boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



function isFullyAge6(... years) {
    years.forEach(cur =>( console.log(2020 - cur) >= 18));
}


 isFullyAge6(1990, 1999,1965,1942, 1984, 1982 ,2000);


//map

function smithPerson(firstName,yearOfBirth, lastName = 'smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let john = new smithPerson('john', 1990);
let emily = new smithPerson('emily', 1938, 'Diaz', 'spanish')

console.log(john);
console.log(emily);



const question = new Map();
question.set('what is your official name of the latest javascript version');
question.set(1,'es5');
question.set(2,'es6');
question.set(3, 'es2015');
question.set(4,'es2016');
question.set('correct',3);
question.set(true,'correct answer:D');
question.set(false, 'wrong answer please try again')

console.log(question.get('question'))
console.log(question.size);

//delete 
if (question.has(4)) {
    question.delete(4);
}

//to clear 
question.clear();

//loop through the map

question.forEach((value, key) => console.log(`this is ${key}, and its ser to ${value}`));


 */

//class
//es5 
// var Person = function(name,yearOfBirth,job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     var age = new Date().getFullYear -this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person('John', 1990, 'teacher');
// console.log(john5)


// //es6

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job =job;
//     }

//     calculateAge() {
//         let age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }
// }

// const john6 = new Person6 ('john',1990,'teacher');
// console.log(Person6.joh);

//map filter  reduce foreach and sort

// const companies = [
//     {name: 'company one', category: 'finance', start: 1990, end: 2000},
//     {name: 'company two', category: 'retail', start: 1999, end: 2004},
//     {name: 'company three', category: 'auto', start: 1998, end: 2010},
//     {name: 'company four', category: 'technology', start: 1993, end: 2006},
//     {name: 'company five', category: 'retail', start: 1980, end: 1999},
    
// ]

// // z

// companies.forEach((company)=> {
//     console.log(company.name)
// })


// SPREAD OPERATORS
// const arrOne = ['Maria', 'Anna', 'muhammed', 'Lamin'];
// const arrTwo = ['Omar', 'Isamil', 'Aisha'];

// const concatArr = [...arrOne, ...arrTwo];

// concatArr.forEach(function(name){
//     console.log(name);
// });


// const mariam = 'mariam';
// const nameToArr = [...mariam];
// nameToArr.forEach(function(lady) {
//     console.log(lady);
// });


// const addNumber = function(a,b,c,) {
//     return a + b + c;
// }


// const numbers = [12, 25, 34];
// const addition = addNumber(...numbers);
// console.log(addition);

// console.log('*************ARSENAL***********');

// const arsenal = ['leno', 'gabril', 'holden', 'tirney', 'hector', 'partey', 'xhaka', 'ozil', 'auba', 'pepe', 'laca'];

// const player = arsenal.forEach(function(name){
//     console.log(name)
// });



// const work = ['lamin', 'muhammed', 'dealer'];
// const position = ['deverloper', 'devop', 'designer'];

// const join = [...work, ...position];

// join.forEach(function(join) {
//     console.log(join);
// });


// const plus = function(n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// const add = [30, 23, 43];

// const additions = plus(...add);
// console.log(additions); 



// const address = {
//     country: 'usa',
//     state: 'ohio',
//     postCode: 'LA2282'
// };

// const name = {
//     firstName: 'muhammed',
//     lastName: 'bojang'
// };

// const person = {...address, ...name};

// console.log(JSON.stringify(person, null, 2));
// // console.log(person)

// //ARROW FUNCTIONS 
// const hello = () => {
//     const es6 ='ES6';
//     return `Hello ${es6}`;
// };

// const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));

// const add = (n1, n2) => n1+ n2;

// const milesToKm = (miles) => miles * 1.60934;

// console.log(hello())
// console.log(powers);
// console.log(add(100,100));
// console.log(milesToKm(100));


//LEXICAL THIS

const person = {
    name: 'alex',
    cars: ['ferrari','lambo'],
    toString: function() {
        console.log(`${this.name} has a ${this.cars}`);
    }
};

person.toString();























































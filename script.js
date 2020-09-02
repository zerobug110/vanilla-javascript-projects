// Map  filter and reduce
var map = [1,2,3,4,5,6,7,8,9,10,11,12].map(function(n) {
    return n *2;
});

console.log(map);


var three = [1,2,3,4,5,6,7,8,9,10,11,12].map(function(number) {
    return number * 3; 
});

console.log(three);

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

 */

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




























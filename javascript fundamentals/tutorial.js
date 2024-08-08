
//document.write{"hello world"}
//alert{"hello world"}
//console.log{"hello world"}

/*document.write("hello world")
alert("hello people")
console.log("hello world")*/

// I woke up early today.
// Statements - sets of instructions
// Comments - shortcut Command + / 

console.log("hello world");
console.log("hello people");
console.log("hello family");
console.log("hello friends");

//variable - most basic building block
// variables - store, access, modify === value
// declare, assignment operator, assign value


/*console.log("quadri soliu olawale opemipo");
//some code
console.log("quadri soliu olawale");
//some code
console.log("quadri soliu olawale");
//some code
console.log("quadri soliu olawale");
//some code
console.log("quadri soliu olawale");
//some code
console.log("quadri soliu olawale");
//some code*/


/*let name = 'quadri soliu olawale';
let address, zip, state;
address = "101 main street"
zip = '0001'
state = "lagos"
console.log(address, zip, state);
name = 'opemipo'
console.log(name);*/

/* comments
let vs var vs const
var is the oldest way of assigning value
const cannot be re-assign 
*/

//string concatenation - combine string values
// backticks (template strings) easier option
/*const surname = ' quadri';
const lastName = 'soliu';
let fullName = surname + " " + lastName;

console.log('Hello your full name is:' + surname + " " + lastName);
console.log('Hello your full name is:' +fullName);*/

//Numbers
// loosely typed = don't declare type

/*const number = 35;
const number2 = 2.55;

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;


console.log(add);
console.log(sub);
console.log(mult);
console.log(div);*/

// Numbers 
// +=, -=, /=, *=, ++, --, %

/*let number = 40;
number += 5;
console.log(number);

const slice = 10;
const children = 3;
const amount = slice % children;

console.log(amount);*/

//Data types - 7 total
// primitive - string, number, boolean, null, undefined,  symbol
// object - arrays, functions, objects
//typeof - operator (typeof variable)  (typeof value)

/*const text = 'opemipo'
console.log(typeof text);*/

//Arrays, Functions and objects
// Arrays - [], 0 index based

/*const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null];
console.log(friends[0]);*/

// Functions - declare, invoke

/*function hello() {
 //logic
 console.log('hello there bob');
 console.log('hello there john');
 console.log('hello there anna');
}

hello()
// some code here
hello()*/

//params - when declare /define
//arguements - when invoke/call/run

/*function hello(name) {
 console.log('hello there' + ' ' + name);
}

//greet bob
hello('bob')
//greet anna
hello('anna')
//greet susy
hello("susy")*/

//return
/*
const wallHeight = 80;

function calculate(value) {
 const newValue = value * 2.54;
 console.log('The value in cm is:' + value * 2.54 + 'cm' );
 return newValue;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
*/
// Objects - key/value pairs methods
// dot notation to access object
/*
const person = {
 name:'john',
 lastName: 'peters',
 age : 40,
 education: false,
 married: true,
 siblings: ['anna', 'susan', 'peter'],
 greeting: function () {
  console.log('Hello my name is JOHN');
 }

}

console.log(person.name);
console.log(person.age);
person.greeting() 
*/
//conditional statement

/*const value = 2 > 1;
const value2 = 1 > 2;
if (value2) {
 console.log('hello world');
} else{
 console.log('hello people');
}*/

// comparison operator 

/*const num1 = 6;
const num2 = 6;
const result = num1 >= num2;
if(num1 > num2) {
 console.log('first number is bigger than second');
} else if (result) {
 console.log('first number is equal to a second');
} else {
 console.log('second number is greater than first');
}*/

// equality sign
// == checks only value
// ===checks value and type
// != or !== not equal
/*
const num1 = 6;
const num2 = '6';

const value = num1 == num2;
const value2 = num1 === num2;

console.log(value);
console.log(value2);
*/
// switch
// dice values 1-6
 /*
const dice = 4;

switch (dice) {
 case 1:
  console.log('you gat one');
  break;
  case 2:
   console.log('you gat two');
   break;
   case 3:
   console.log('you gat three');
   break;
   default:
    console.log('you gat no dice');
}
*/
// loops

/*let amount = 10;

while (amount > 0) {
 console.log('I have ' + amount + "dollars and I'm going to the mall");
 amount--;
}*/

// do while loop
   /* let money = 0;

    do{
        console.log('you have ' + money +" " +'dollars' );
        money++;
    } while(money < 10);*/

    // for loop

    /*let i;
    for (i = 0; i < 10; i++) {
        console.log('and the number is : ' + i);
    }

    for (let number = 11; number >= 0; number--) {
        console.log('and the number is : ' + number);b
    }*/


    //connecting the dots

    // string properties and methods
/*
    let text = 'Peter jordan';
    let result = text.length;
    console.log(result);

    console.log(text.toLowerCase());
    console.log(text.toUpperCase());
    console.log(text.charAt(text.length - 
        1));
    console.log(text.indexOf('e'));
*/
    // Temperate Literals - ES6+
    // Interpolation ${}
/*
    const name = 'john';
    const age = 24;
    const sentence = "Hey it's " + name + ' ' +'and he is' + ' ' + age + ' ' + 'years old';

    const value = `Hey it's ${name} and he is ${age} years old.`

    console.log(sentence);

    console.log(value);
*/

    // Array properties and methods
    /*
    let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

    //length
    console.log(names.length);
    console.log(names[names.length - 1]);*/

    //concat
    const lastNames = ['pepper', 'onion', 'tomato'];
    const allNames = names.concat(lastNames);
    console.log(allNames);

    //reverse
    console.log(allNames.reverse());

    //unshift - adding to the front of an array
    allNames.unshift('susy');
    console.log(allNames);

    // shift - removing from the front of the arrays
    /*
    allNames.shift();
    allNames.shift();
       allNames.shift();
    console.log(allNames);
    */

    //push and pop is use for the back of an array

    // splice - mutates original array
    /*
    const specificNames = allNames.splice(2, 3);
    console.log(specificNames);
    console.log(allNames);
    */

    // Arrays and for l<oop
    const names = ['anna', 'susy', 'susan', 'simi', 'bob'];
    const lastName = 'shakes';
    let newArray = [];

    // for loop

    for (let i = 0; i < names.length; i++) {
        console.log(i);
        console.log(names[i]);
        newArray.push(names[i])
    }

    console.log(names);
    console.log(newArray);

    // Functions, return. if, arrays, for loop

    const gas = [20, 40, 100];
    const food = [10, 40, 50];

   // function calculateTotal(arr){
      //  let total = 0;
      //  for(let i=0; i < aa.length; i++ ){
      //console.log(arr[i]);
      //}

    

      // second half of the  video
// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null.
// Arrays, Functions, Objects = object
// typeof

// whne assigning primitive data type value to a variable any changes are made directly to that value, without  affecting original value

// when assigning non-primitive data type to a variable is done by reference so any chabges will affect all the reference.






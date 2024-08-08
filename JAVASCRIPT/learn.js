//var number = 5;
/* This is a
multi-line comment*/

/*var number = "5"

let myNum = "01"

const pi = 3.14 */

//Storing values with assignment operators
var a;
var b = 20;
console.log(a)

a = 7;

b = a;

console.log(a)

// Adding numbers
var sum = 10 + 20;
console.log(sum)

// Subtracting numbers
var difference = 45-11;
console.log(difference)

// Multiplying numbers
var product = 8 * 4;
console.log(product)

// Dividing numbers
var quotient = 66 / 6;
console.log(quotient)

// Incrementing numbers
var myVar = 87;
/*myVar = myVar + 1;
console.log(myVar)*/
myVar++;
console.log(myVar)

// Decrementing numbers
var myVar = 33;
/*myVar = myVar - 1;
console.log(myVar)*/
myVar--
console.log(myVar)

// Multiplying Decimals 
var product = 2.5 * 2.5;
console.log(product)

// Divide decimals
var quotient = 4.0 / 2.2;
console.log(quotient)

// Finding a remainder
var remainder;
remainder = 11 % 3;
console.log(remainder)

// Compound assignment with augmented addition(Same with subtraction, multiplication, and division)
var a = 4;
var b = 10;
var c = 14;

/*a = a + 10;
b = 9 + b;
c = c + 6;*/
a += 10;
b += 9;
c += 6;

console.log(a)
console.log(b)
console.log(c)

// Declare string variables
var firstName = "Quadri";
var lastName = "Olawale";

// Escaping literal quotes in strings
var myStr = "I am a \"double quoted\" string inside a \"double quoted\""
console.log(myStr)

// Escape sequences in strings 
var myStr = "firstname\n\t\\secondline\nthirdline";
console.log(myStr)

// Concatenating strings with plus operator
var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// Concatenating strings with plus  equals operator
var myStr = "This is the first sentence. " 
myStr += "This is the second sentence."
console.log(myStr);

 // Consructing strings with variables
 var myName = "Quadri";
 var myStr = "My name is " + myName + " and I am well!";
 console.log(myStr)

 //Apending variables to strings
 var someAdjective = " worthwhile";
 var myStr = "Learning to code is"
 myStr += someAdjective
 console.log(myStr)

 // Find length of string
 var lastNameLength = 0;
 var lastName = "Lovelace"
 lastNameLength = lastName.length;
 console.log(lastNameLength)

 // Word Blanks
 function wordBlanks (myNoun, myAdjetive, myVerb, myAdverb) {
  var result = "";
  result += "The" + " " + myAdjetive + " " + myNoun + " " + myVerb + " " + "to the store" + " "+ myAdverb
  return result
 }
 console.log(wordBlanks("dog", "big", "ran", "quickly"));
 console.log(wordBlanks("car", "beautiful", "ran", "swiftly"));

 // Store multiple values with arrays and Nested arrays
 /*Arrays allow you to store several pieces of data in one place*/
 var myArray = [["Bull", "23"], ["Lucky", "30"]];
 
 // Access array data with indexes
 var myArray = [30, 40, 50];
 var myData = myArray[0];
 console.log(myData)

 // Modify array data with indexes
 var myArray = [18, 64, 99];
 myArray[1] = 45;
 console.log(myArray)

 // Manipulate arrays with push()
 var ourArray = ["stimpson", "J", "Cat"];
 ourArray.push(["happy", "Joy"]);
 console.log(ourArray)

 

 
 
//alert("Hello from external javascript")

/*variables */
//var name = "Soliu";

//alert(name);

//var first_number = 1; //inputted by the user
//var second_number = 6;

//var result = first_number+second_number;

//alert(result);
var first_number = 1;
var name = "Soliu";
var is_your_story_true = true;

/* arrays */
var people_who_have_signed_up =
[
"Gilbert","Derrick","Kojo","Peter"
];
console.log(people_who_have_signed_up);

//mathematical operators
var sum = 1+1;
var multiply = 293*2

console.log(multiply);
//comparison operator
var amount_paid = 45;

if(amount_paid >= 40){
 console.log("Gift $5 bonus");
}else if(amount_paid < 40 && amount_paid>=30){
 console.log("Gift $3");
}else{
 console.log("sorry, no gift");
}

var first_user = "Gilbert";

if(first_user!="Gilbert"){
 console.log("welcome another user");
}else{
 console.log("welcome Gilbert");
}
//loops
for(var i=0; i<=10; i++){
 console.log(i);
}

var x=0;
while(x<=10){
 console.log(x);
 x=x+1
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let y=0; y<numbers.length; y++){
 console.log(numbers[y]*2);
}

//functions
var first_number = 2;
var second_number = 3;
var sum = first_number+second_number;
console.log(sum);
///
first_number = 4;
second_number = 7;
sum = first_number+second_number;
console.log(sum);

function addTwoNumbers(firstnumber, secondnumber){
var sum = firstnumber + secondnumber;
console.log(sum);
}
addTwoNumbers(4,3);
addTwoNumbers(5,5)

/*var i = 1;
setInterval(function(){
 console.log("Hello "+i);
 i++;

},2000);*/

var d = new Date();

console.log(d.getFullYear());

var total = 0;
function doubleTheNumber(num){
 total = num+num;
 return total;
}
var result = doubleTheNumber(10);
console.log(result);
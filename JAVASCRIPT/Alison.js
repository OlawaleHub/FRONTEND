// Addition
let a = 1+5;
console.log(a);

let b = 10;
let c= a + b;
console.log(c);

b = b + 3;
console.log(b);
console.log(c);

let r = 5 % 2;
console.log(r);

// Challenge
let baseweight = 10000;
let foodweight = 100;
let passengersweight = 10;

let fuelunitweight = 2; //weight of 1 unit of fuel
let fuelunits = 100; //total units of fuel we need

let fueltotal = fuelunits * fuelunitweight
console.log(fueltotal)

let total = baseweight + foodweight + fueltotal + passengersweight;
console.log(total);


let direction = "diagonal";
if (direction == 'right'){
 console.log('greenway');
}
 
else if (direction == 'backward'){
 console.log('Go back home');
}

else {
 console.log('ship crashes');
}

//comparison operators
let item = 'chemistry';

if (item != 'physics') {
 console.log('false');
}

let score = 3;

if (score > 80) {
 console.log('excellent');
}
else if (score < 10) {
 console.log('meet the teacher');
}
else {
 console.log('fail');
}

let isEngine = item == 'engine';
console.log(isEngine);

let balance = 100;
let itemprice = 1000;

if (balance >= itemprice) {
 balance = balance - itemprice;
 console.log('item purchased');
console.log('balance');
}
else {
 console.log('Not enough balance');
}

// Boolean logic

let distance = 250;
let fuel = 100;
let distanceCondition = distance <=200 && distance >=100;
console.log(distanceCondition);
let isEngineFunctioning = true;

if (distance > 200 || !isEngineFunctioning) {
 console.log('you wont make it');
}
else if (distanceCondition && fuel >= 100); {
console.log('you will make it');
}
//else if (distance < 100 && fuel >= 25); {
 // console.log('you will make it');
//}


// Function
// 1 hour = 60 minutes
  function hourToMinutes (hours) {
     let result = hours * 60 ;
     return result;
  }

      let k = hourToMinutes(10);
      console.log(k);

      // variables declaration
      let balancef = 100;
      let stock = 50;
      let price = 5;
     
       function sellItem(quantity) {
       // 1. check if we have stock
      if (quantity <= stock) {
      // 2. reduce stock, increase balancef
      stock = stock - quantity;

      balancef = balancef + price * quantity;
      console.log('purchase completed' , balancef, stock)
      }
      else {
       console.log('not enough stock');
      }
     }
     sellItem(10);
     sellItem(10);
     sellItem(10);
     sellItem(10);
     sellItem(10);
     sellItem(10);
     sellItem(10);
     sellItem(10);

     // OBJECTS
     let player = {
                  age:   99, 
                  name: 'ABC',
                  isActive: true,
                  outfit: {
                     color: 'blue',
                     size: 'M',
                     cost: 100,
                     isNew: true
                  }
               };


     console.log(player);

     console.log(player.age);

     player.outfit.size = 'S';
     console.log(player);




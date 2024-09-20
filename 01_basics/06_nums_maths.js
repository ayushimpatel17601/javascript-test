const score = 400;
console.log(score);                             // 400

const balance = new Number(100);
console.log(balance);                           // [Number:100]

console.log(balance.toString().length);         // 3
console.log(balance.toFixed(1));                // 100.0

const othernumber = 23.554
console.log(othernumber.toPrecision(2));        // 24

const hundred = 1000000;                       
console.log(hundred.toLocaleString('en-EN'));   // 1,000,000 

// ========================== Maths =========================

console.log(Math);
console.log(Math.abs(-4));      // 4
console.log(Math.round(4.5));   // Near value 5
console.log(Math.ceil(4.8));    // upper value 5
console.log(Math.floor(4.9));   // lower value 4
console.log(Math.min(3,2,6,4)); // 2
console.log(Math.max(3,2,6,4)); // 6
console.log(Math.random());     // any random number provide
console.log((Math.random()*10) + 1); 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);    // random number minimum 10 and maximum 20 
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
console.log(Math.floor(4.8));   // lower value 4
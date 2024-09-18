let score = "33"
console.log(typeof score);
console.log(typeof (score));
// convert string to number
let inNumber = Number(score);
console.log(typeof inNumber);


let score1 = "33abc"
// convert string to number
let inNumber1 = Number(score1);
console.log(typeof inNumber1);
console.log(inNumber1);  // NaN

// convert in boolean
// 1 => true
// 0 => false
// "" => false
// "hello" => true
let score3 = 0;
let inboolean = Boolean(score3);
console.log(inboolean);


// convert in the string
let score4 = 33
let instring = String(score4);
console.log(instring);
console.log(typeof instring);

const name = "john";
const repoCount = 50;

// console.log("his name is" + " " + name);

console.log(`his name is ${name} and his repo count is ${repoCount}`);

const gamename = new String("john-nc");
console.log(gamename[0]);
console.log(gamename.__proto__); // not much usable
console.log(gamename.length);         // print 6
console.log(gamename.toUpperCase());  // print JOHNNC
console.log(gamename.charAt(2));    // print h
console.log(gamename.indexOf('n'));  // print 3

const newString = gamename.substring(0,5);
console.log(newString);             // print 0 index to 3 index

const otherString = gamename.slice(0,4);
console.log(otherString);           // print 0 index to 3 index and slice is allow to0 add reverce value count like you can add negative value in this parameter

const newstringone = "   hello.  hello. "
console.log(newstringone);          // print same as variable value
console.log(newstringone.trim());   // remove space of the start and end space of the sentance or word

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));   // https://hitesh.com/hitesh-choudhary
console.log(url.includes('hello'));     // false

console.log(gamename.split('-'));


const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);  // Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);      // Expected output: "k"

const strCopy = str.split();
console.log(strCopy);       // Expected output: Array ["The quick brown fox jumps over the lazy dog."]


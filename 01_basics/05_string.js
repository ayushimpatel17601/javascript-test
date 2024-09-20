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




// ===================================
const paragraph = "I think Ruth's dog , is cuter than your dog!";
const indexOfFirst = paragraph.indexOf('dog');
console.log(`The index of the first dog is ${indexOfFirst}`);

const indexOfLast = paragraph.lastIndexOf('dog');              // 15
console.log(`The index of the first dog is ${indexOfLast}`);  // 38
console.log(paragraph.italics());           // <i>I think Ruth's dog is cuter than your dog!</i>

// match
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);     // [ 'I', 'R' ]

// repeat
const repstr = 'happy '
const repstr1 = `i am very ${repstr.repeat(4)}`;
console.log(repstr1)      // i am very happy happy happy happy 

// replace
const replstr = "I think Ruth's dog is cuter than your dog! ";
console.log(replstr.replace("Ruth's" , "My"));      // I think My dog is cuter than your dog! 

// replaceAll
// replaceAll is replace all word replace in the santance
const replstr1 = "I think Ruth's dog is cuter than your dog! ";
console.log(replstr1.replaceAll("dog" , "cat"));      // I think My cat is cuter than your cat!

// search
const regex1 = /[^\w\s']/g;
console.log(paragraph.search(regex1));              // 19
console.log(paragraph[paragraph.search(regex1)]);   // ,

// slice
const paragraph1 = "The quick brown fox jumps over the lazy dog.";
console.log(paragraph1.slice(28 , 32)); // er t
console.log(paragraph1.slice(-9 , -5)); // lazy

// substr
const substring = "Google chrome";
console.log(substring.substr(1,4));     // oogl
console.log(substring.substr(2));       // ogle chrome
console.log(substring.substring(1,4));  // oog
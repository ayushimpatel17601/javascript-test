const name = "john";
const repoCount = 50;

// console.log("his name is" + " " + name);

console.log(`his name is ${name} and his repo count is ${repoCount}`);

const gamename = new String("johnnc");
console.log(gamename[0]);
console.log(gamename.__proto__); // not much usable
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('n'));

const newString = gamename.substring(0,5);
// console.log(newString);

const otherString = gamename.slice(-4,2);
console.log(otherString);

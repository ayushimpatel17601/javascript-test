const marvel_heros = ["spiderman","thor","ironman"];
const dc_heros = ["superman","flash","batman"];

// push
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);        // [ 'spiderman', 'thor', 'ironman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);  // flash ==>  3rd index is second array and its first element means "flash"

// concate
// marvel_heros.concat(dc_heros);
// console.log(marvel_heros);          // [ 'spiderman', 'thor', 'ironman', [ 'superman', 'flash', 'batman' ] ]

// const ALlheros = marvel_heros.concat(dc_heros);
// console.log(ALlheros);              // [ 'spiderman', 'thor', 'ironman', 'superman', 'flash', 'batman' ]

// const new_AllHeros = [...marvel_heros, ...dc_heros];
// console.log(new_AllHeros);          // [ 'spiderman', 'thor', 'ironman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5],6,7,[8,9,[7,8]]];
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);         // [
                                        //     1, 2, 3, 4, 5,
                                        //     6, 7, 8, 9, 7,
                                        //     8
                                        // ]

                                        
console.log(Array.isArray("hello"));    // false
console.log(Array.from("hello"));       // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from({name:"john"}));    // []
console.log(Array.from({Id: 123}));        // []


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));    // [ 100, 200, 300 ]


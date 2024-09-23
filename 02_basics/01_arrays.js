const myarray = ["bus","car","truck","plen"];
console.log(myarray[0]);        // bus
console.log(myarray.length);    // 3

//  push
myarray.push("train");
console.log(myarray);   //  [ 'bus', 'car', 'truck', 'train' ]  ---> add element from the end

// pop
myarray.pop();
console.log(myarray);   //  [ 'bus', 'car', 'truck' ]   ---> remove element from the end

// unshift
myarray.unshift(4);
console.log(myarray);   // [ 4, 'bus', 'car', 'truck' ] ---> add element from the start

// shift
myarray.shift()
console.log(myarray);      // [ 'bus', 'car', 'truck' ]. ---> remove element from the start

console.log(myarray.includes(9));  // false
console.log(myarray.indexOf(10));  // -1
console.log(myarray.indexOf("car"));  // 1

const newarray = myarray.join();
console.log(myarray);       // [ 'bus', 'car', 'truck' ]
console.log(newarray)       // bus,car,truck
console.log(typeof newarray);    // string

// slice and splice
console.log("A ", myarray);         // A  [ 'bus', 'car', 'truck', 'plen' ]
const myn1 = myarray.slice(1,3);    
console.log(myn1);                  // [ 'car', 'truck' ] 

console.log("B ", myarray);         // B  [ 'bus', 'car', 'truck', 'plen' ]

const myn2 = myarray.splice(1,3);  
console.log("C ", myarray);         // C  [ 'bus' ]
console.log(myn2);                  // [ 'car', 'truck', 'plen' ]
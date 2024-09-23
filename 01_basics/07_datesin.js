let mydate = new Date();
// console.log(mydate.toString());         // Mon Sep 23 2024 09:23:10 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());     // Mon Sep 23 2024
// console.log(mydate.toISOString());      // 2024-09-23T09:23:10.742Z
// console.log(typeof mydate);             //  object

let createmydate = new Date(2024,0,23);
// console.log(createmydate.toLocaleString());     // 1/4/2024, 12:00:00 AM
console.log(createmydate.toDateString());          // Tue Jan 23 2024

let createmydate1 = new Date(2024,0,23,5,3);
console.log(createmydate1.toLocaleString());     // 1/23/2024, 5:03:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp);                  // Tue Jan 23 2024
// console.log(createmydate.getTime());      // 1/23/2024, 5:03:00 AM
console.log(Math.floor(Date.now()/1000));   // 1727085748

let newDate = new Date();
console.log(newDate);                   // 2024-09-23T10:02:28.781Z
console.log(newDate.getMonth());        // 8
console.log(newDate.getDate());         // 23


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default' , {
    weekday: "long"
});
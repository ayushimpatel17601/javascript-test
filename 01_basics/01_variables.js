const accountId = "143321"
let accountName = "Hello"
var accountemail = "a@gmail.com"
accountPass = "134567"

// accountId = "727638"    // == Not Allowed
accountName = "world" //== Allowed
accountemail = "amp@gmail.com"  //== Allowed
accountPass = "2344546"   //== Allowed  

/*
prefer not to use var variable
because of issue in the block scope and function scope
*/

// console.log(accountPass)
console.table([accountId,accountName,accountemail,accountPass]);
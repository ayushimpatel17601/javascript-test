// singleton 

// object literals

const mysym = Symbol("key1");


const JsUser = {
    name: "john",
    "full name" : "John Dou",
    [mysym] : "mykey1",
    age: 20,
    location: "Gujarat",
    email: "am@gmail.com",
    isLoggedIn: "false",
    LastLogginDays: ["Monday","Friday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name).  // not allowes this type print
console.log(JsUser["full name"]);  // Its allow for the string key
console.log(JsUser[mysym]);


// JsUser.email = "amp@google.com";
// Object.freeze(JsUser);
// JsUser.email = "amp@microsoft.com";
// Object.freeze(JsUser);

JsUser.greeting = function() {
    console.log("hello user");
}

JsUser.greetingTwo = function() {
    console.log(`hello user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
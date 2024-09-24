// const tinderUser = new Object();

const tinderUser = {}
tinderUser.name = "sammy",
tinderUser.Id = "123user",
console.log(tinderUser);       // { name: 'sammy', Id: '123user' }

const regularUser = {
    email: "amp@google.com",
    fullname:{
        userfullname:{
            firstname:"john",
            lastname:"duo",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);       // john
// console.log(regularUser.fullname.userfullname.lastname);        // duo

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
// const obj3 = Object.assign({}, obj1 , obj2);
const obj3 = {...obj1,...obj2}
console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user = [
    {
        id : 1,
        email : "a@gamil.com"
    },
    {
        id : 2,
        email : "a@google.com"
    },
    {
        id : 1,
        email : "amp@microsoft.com"
    }
]

user[1].email 
// console.log(tinderUser);
console.log(Object.keys(tinderUser));       // [ 'name', 'Id' ]
console.log(Object.values(tinderUser));       // [ 'sammy', '123user' ]
console.log(Object.entries(tinderUser));       // [ [ 'name', 'sammy' ], [ 'Id', '123user' ] ]

console.log(tinderUser.hasOwnProperty('Id'));     // true

// Non-Primitive types

// 1. Object
// 2. Function

// 3. Array -> Object


// var a = { // New Object created key : value
//     name: "Jonh",
//     address: "Surat",
//     contact: {
//         phone: 87878787878,
//         email: "abc@gmail.com"
//     }
// }

// dot notation /  [] notation

// var b = "address"

// console.log(typeof a);
// console.log(a);
// console.log(a.name, a["name"]);
// console.log(a.address, a[b]) // a.b

// console.log(a.contact.phone, a.contact["email"])

// console.log(a.contact);

// a.name = "Bob"
// a.contact.phone = "456465"

// console.log(a.contact);

// console.log(a)

// a.name1 = 12;

// delete a.name;

// console.log(a)


// CURD Opration

// C - Create
// U - Update
// R - Read
// D - Delete



// Array [0 ..... n-1];

// var a = [1, 2.262652, 3, "4", null, 6, false, 8, 9];

// console.log(a)

// a[3] = "40"

// console.log(a)

var a = [1, 2, 3, 4, 5]
var b = [6, 7, 8, 9, 10]

console.log(a)

// a.push(0)
// a.push(10, 11, 12, 13)

// console.log(a)

// a.pop()

// console.log(a)

// a.shift()

// console.log(a)

// a.unshift(5, 5, 10)

// console.log(a)

// console.log(a.join()) // return new string
// console.log(a.join("")) // return new string
// console.log(a.join(" 00 ")) // return new string

// console.log(a.concat(b))

// console.log(a.length)

// for (var i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// function 

function run(){ // Callback funcation
    console.log("This is the Function")
}


// Call

console.log(typeof run)
console.log(run)

run() // Call
// console.log(true);
// console.log(false);

// console.log("Empty String: ",Boolean("")); // empty string
// console.log("0: ",Boolean(0)); // false
// console.log("-1: ",Boolean(-1)); // true
// console.log("500: ",Boolean(500)); // true
// console.log("null: ",Boolean(null)) // false
// console.log("undefined: ",Boolean(undefined)) // false
// console.log("[]: ", Boolean([])) // true
// console.log("{}: ", Boolean({})) // true

// if(null){
//   console.log("Inside IF")
// }

// console.log([] == [])
// console.log({} == {})
// console.log(typeof[] == typeof[])
// console.log({} == [])
// console.log(typeof{} == typeof[])


// const a = [];

// console.log(Array.isArray(a)) // true

// function alert(a) {
//   console.log(a)
// }

// alert("Okay..!")
// confirm("Are you sure...!")
// prompt("Age...!")


// console.log(btoa("Hello")) // string -> base64
// console.log(atob("SGVsbG8=")) // base64 -> string


// DOM -> Document Object Model

// DOM Manipulation

// querySelector

// ID

const id = document.getElementById("unique")
console.log(id, id.innerText)

// Class

const c1 = document.getElementsByClassName("box")
console.log(c1)

// Tag

const tag = document.getElementsByTagName("H1")
console.log(tag)


// querySelector, querySelectorAll

const a = document.querySelector("#unique") // single
console.log(a)

const b = document.querySelectorAll(".box")
console.log(b)

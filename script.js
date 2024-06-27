// Named Function

// function sum(){ // Function Declaration
//   console.log("Sum function");
// }

// sum() // Call

// function sum(a){ // Argument
//   console.log(a);
// }


// sum(10) // Parameter

// function sum(a = 1) { // Default value set 
//   console.log(a);
// }

// sum(10) // Parameter
// sum(15)
// sum()
// sum("hello")


// function sum(sum1, sum2) { // Default value set 
//   console.log(sum1, sum2);
// }

// sum(10, 15)


// Anonymous Functions / Expression Functions

// var minus = function (a) {
//   console.log(a)
// }

// minus(10)

// IIFI Function (immediately invoked function expression)


// (function (a) {
//   console.log("IIFI Function",a)
// })(10)


// function sum() {
//   console.log("Function Called")
//   return 15;
// }

// console.log(sum())

// user give me two value 10 15 and we need to return sum of the number


// var a = 20;
// var b = 20;

// function sum(a, b) {
//   return a + b;
// }

// var ans = sum(a, b)
// console.log(ans);

// function sum() {

// }

// sum() // Function Call

// Method Call

// var a = {
//   name: "john",
//   minus: function () {
//     console.log("Method Called", this,a)
//   }
// }

// a.minus() // Method Call

// var b = a.minus; // 

// b() // Function   


// console.log(window.a)
// console.log(this.a)


// var lname = "Sharma"

// var obj = {
//   fname: "John",
//   // lname: "Rai",
//   fn: function () {
//     console.log(this.fname + " " +this.lname);
//   }
// }

// obj.fn() // John Rai
// var newFn = obj.fn;

// newFn() // Undefined Sharma


// ES6 / 2015

var a = 15;

a = 20;

var a = 35;

// console.log(a);

let b = 15;

b = 20;

// let b = 35; (X)

// console.log(b)

const c = 26;

// c = 96; (X)

// const c = 35; (X)

// console.log(c);

// == vs ===


// const cba = "5"
// const abc = 5;


// console.log(cba == abc) // value
// console.log(cba === abc) // value and type

// Block scope
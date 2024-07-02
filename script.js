// Scoping

// var a = 15;

// { // block
//   var b = 20;
//   console.log(b);
// }

// { // block
//   let c = 25; // block scope
//   const d = 40; // block scope
//   console.log(c);
//   console.log(d)
// }

// console.log(c)
// console.log(d)
// console.log(b);
// console.log(a);


// function hello(){
//   var c = "123456";
//   console.log(c)

//   {
//     let c = 20; //
//     console.log(c);
//   }

//   console.log(c);
// }

// hello()


// var c = 20;

// var c = 25;
// let c = 20;

// console.log(c)



// var c = 15; // globle scope
// function hello() {
//   var c = "123456"; // local scope
//   console.log(c)

//   {
//     let c = 20; //
//     console.log(c);
//   }

//   console.log(c);
// }


// hello()
// console.log(c)


// console.log(c); // hoisting
// debugger
// var c = 15;

// console.log(c)

// console.log(d);

// const d = 20;

// How Js work
// Run in 2 phase

// 1. memory allocation
// 2. code execution


// console.log(v);
// var v = "hello"

// var v;
// console.log(v)

// function run() {
//   console.log("Run function Called")
// }

// run()

/*------- Not working in below example--------*/

// run();

// var run = function(){
//   console.log("Run Function")
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 10))


// ES6 - Arrow function

// function sum(a, b) {
//   return a + b;
// }

// var sum = (a, b) => { // Arrow Function
//   return a + b;
// }


// var sum = (a, b) => a + b;

// console.log(sum(5, 10))


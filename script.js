/* Closuer */


/* 
 
{

  let a = 15;
}

console.log(a);

clouser data encapsulates

*/

/* HOF => Higher order function 

  -> 1 araguments as function
  -> 2 return function

*/


// function run() {
//   return function () {
//      console.log('Hello World');
//     // return "Hello World"
//   }
// }

// const a = run;
// const b = run();
// const c = run()();

// console.log("A: " + a) // 
// console.log("B: " + b)
// console.log("C: " + run()())

// function division(a, b, c) {

//   if (c(b)) {
//     return a / b;
//   }

//   return "Error: Division by zero is not allowed"

// }

// function checkZero(a) {
//   if (a === 0) {
//     return false;
//   }
//   return true;
// }

// const ans = division(10, 2, checkZero)
// console.log(ans)



// function outer() {
//   let a = 10;
//   return function inner() {
//     a++;
//     console.log(a);
//   }
// }

// const b = outer();
// b()
// b()
// b()
// b()
// b()

// Function chaining

function run() {
  return {
    x: 0,
    y: 0,
    z: 0,
    top: function () {
      this.y += 1;
      return this;
    },
    bottom: function () {
      this.y -= 1;
      return this;
    },
    left: function () {
      this.x -= 1
      return this;
    },
    right: function () {
      this.x += 1;
      return this;
    },
    visible: function () {
      return { x: this.x, y: this.y };
    }
  }
}

const obj = run();
console.log(obj.visible())

obj.top().top().top().top().top().right().right().bottom()

console.log(obj.visible());
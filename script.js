/* Array Method */

/*
push
pop
shift
unshift
join -> string
concat


Slice -> doesn't change orignal array
Splice
map
filter
reduce

return new array

*/


/* refernce */


// const a = [1, 2, 3, 4, 5];

// const b = a;

// a[0] = 5;

// b.push(6);

// console.log("a", a)
// console.log("b", b)


// const a = [10, 25, 345, 448, 5451, true, "sdfsd", 's'];

// const b = a.slice(); // new array
// const b = a.slice(4); // new array
// const b = a.slice(3, 4); // new array
// const b = a.slice(2, -5); // new array

// const b = a.splice(); // new array
// const b = a.splice(4); // new array
// const b = a.splice(3, 2); // new array
// const b = a.splice(-2, 1); // new array
// const b = a.splice(5, 0, "ssssss", "123")
// const b = a.splice(3, 1, 4)

// a[0] = 20;

// console.log(a);
// console.log(b);

// const a = [2, 3, 4, 5, 6];

// const b = []

// for (let i = 0; i < a.length; i++) {
//     b.push(a[i] * a[i]) // square
// }

// console.log(b);

// function square(value, index, array){
// console.log(value*value)
//     return value*value
// }

// const b = a.map(square) // return new array

// console.log(b)


// const b = a.map(function (value, index, array) {
//     return value * value
// })

// console.log(b)

// const b = a.map((value) => value * value * value)

// console.log(a);
// console.log(b);

// const a = [2, 3, 4, 5, 6];

// const b = []

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0)
//         b.push(a[i])
// }

// console.log(b)

// function even(value, index, array) {

// if(value%2 == 0){
//     return true;
// }
// return false

//     return value % 2 === 0
// }

// const b = a.filter(even);
// const b = a.filter((value) => value%2 === 0);

// console.log(b)


// recude -> single value

// const a = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     sum += a[i];
// }

// console.log(sum)

// function sumHandler(acclator, currvalue) {
//     console.log(acclator, currvalue)
//     return acclator - currvalue;
// }

// const sum = a.reduce(sumHandler, 10)

// const sum = a.reduce((acc, curr) => acc + curr, 10)

// console.log(sum)
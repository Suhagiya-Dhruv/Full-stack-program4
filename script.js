/*

fill
find
indexof
lastindexof
forEach
for in
for of


*/

// const arr = [1, 2, 3, 4, 5];

// arr.fill(true)
// console.log(arr)

// const a = arr.filter(id => id%2 == 0); // multiple -> array
// const b = arr.find(id => id%2 == 0); // single value -> value

// console.log(a)
// console.log(b)

// const c = arr.indexOf(4) // index
// const d = arr.findIndex(id => id%2 == 0);// index
// const e = arr.findLastIndex(id => id%2 == 0);// index

// console.log(c)
// console.log(d)
// console.log(e)

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// const b = arr.forEach(value => console.log(value))
// console.log(b)

// for (a in arr) { // index
//     console.log(a)
// }

// for (a of arr) { // value
//     console.log(a)
// }

// const arr = [1, 2, 3, 4, 5];

// function multiple(prev, curr){
//     console.log(prev)
//     return prev * curr
// }

// const ans = arr.reduce(multiple, 10) // single value

// console.log(ans)

// ... rest and spread oprator

// function run(...rest) {
//     console.log(...rest)
// }

// run(10, 15, 30, 4, 1, 545)

// const arr = [1, 2]

// arr.push(5, 548, 515, 1, 1, 1, 1, 1, 1, 1, 1, 5)

// console.log(arr)



// flat

// const arr = [[1, 2, [3]], [4, [5, [6]]], [7, 8, 9, 10, 11]] // 2D array

//     j  j  j  j  j
// i  [1, 2, 3]
// i  4
// i  5
// i  6
// i  [7, 8, 9, 10, 11]


// const b = [...arr[0], 4, 5, 6, ...arr[4]]

// const b = arr.flat(Infinity) // new array

// console.log(b)

// console.log(arr[4][4])

// const arr = [1, 2, 3]

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [a, ...b] = arr // data distrudring

// console.log(a, ...b)

// const obj = {
//     name: "n1",
//     pincode: 555485,
//     mobile: 1664845665
// }

// const { name, mobile, pincode, obj1 } = obj

// console.log(name)
// console.log(pincode)
// console.log(mobile)
// console.log(obj1)



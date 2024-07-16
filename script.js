/* 
    Shallow Copy
    Deep Copy
*/

// const arr = [1, 2, 3, 4, 5];

// const b = arr.slice();
// const c = arr.map(a => a);
// const d = arr.filter(a => true);
// const e = [...arr];

// arr[0] = 5;

// c[2] = 10;

// e[2] = 15;

// console.log("arr", arr);
// console.log("B", b);
// console.log("C", c);
// console.log("D", d);
// console.log("E", e);


// const arr = [1, 2, [3, 4], 5];

// const b = arr.slice(); // new Array
// const c = arr.map(a => a); // new Array
// const d = arr.filter(a => true); // new Array
// const e = [...arr]; // new array create

// arr[0] = 5;

// b[2][1] = 10;

// b[3] = 10;


// console.log("arr", arr);
// console.log("B", b);
// console.log("C", c);
// console.log("D", d);
// console.log("E", e);


// const obj = {
//     a: "A1",
//     b: "B1",
//     c: "C1",
//     d: {
//         d1: "D1",
//         d2: "D2"
//     }
// }

// const b = {
//     ...obj
// };

// obj.a = "D1";

// obj.d.d1 = "A1";

// console.log(obj)
// console.log(b)


// =====================================


/* Deep Copy */

// const arr = [1, 2, [3, 4], 5];

// // const c = arr.map(a => a); // new Array



// const a = JSON.stringify(arr) // return String
// const b = JSON.parse(a) // return 

// arr[0] = 5;

// b[2][1] = 10;

// b[3] = 10;

// console.log("arr", arr)
// console.log("B", b)

// const obj = {
//     a: "A1",
//     b: "B1",
//     c: "C1",
//     d: {
//         d1: "D1",
//         d2: "D2"
//     }
// }

// const b = {
//     ...obj
// };

// const b = JSON.stringify(obj);
// const c = JSON.parse(b);

// obj.a = "D1";

// obj.d.d1 = "A1";

// console.log(obj)
// console.log(c)


/* Task: 
    Remove dupblicate data


    filter base on categories
    search base on title or desc

    sort
    price asc - dec
    updatedAt - asc- dec



*/

const data = []

function removeDuplicate(data){

    return []
}

removeDuplicate(data)

function filter(data, value){

}

function search(data, value){

}


function sort(data , value, d){

}

// monday



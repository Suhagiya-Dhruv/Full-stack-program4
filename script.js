// const obj = {
//     a: "1",
//     b: "2",
//     c: "3",
//     e: {
//         a: "e1",
//         b: "e2",
//         c: "e3"
//     }
// }

// Object.preventExtensions(obj);
// Object.preventExtensions(obj.e)

// obj.e.d = "e4" // (X)
// obj.d = "e4" // (X)
// delete obj.a;
// obj.c = "33"

// Object.seal(obj)

// obj.e.d = "4" // (X)
// delete obj.e.a; // (X)
// obj.c = "33"

// Object.freeze(obj)

// obj.e.d = "4" // (X)
// delete obj.e.a; // (X)
// obj.e.c = "33" // (X)

// console.log(obj)


// const arr = [1, 2, 3, 4, 7]

// const [a, c, b, d, e = 5, f = 6] = arr; // data destruction

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c, d, e, f)

// const obj = {
//     a: "1",
//     b: "2",
//     c: "3",
//     e: {
//         a: "1"
//     },
//     fn: () => {
//         console.log("Function Called")
//     }
// }


// const { a, c, b, e, d = "123", fn } = obj;

// console.log(a, b, c, e, d, fn)

// const obj = {
//     fname: "john",
//     lname: "shah",
//     fn: function () {
//         console.log(this.fname + " " + this.lname)
//     }
// }

function joinName(age, address) {
    console.log(this.fname + " " + this.lname + " ", age , address)
}

// joinName()


const obj = {
    fname: "john",
    lname: "value"
}

// Call Method

// joinName.call(obj, 18, " surat")

// bind Method

// const c = joinName.bind(obj, 18, " surat")
// c()

// apply

// joinName.apply(obj, [18, " surat"])

// obj1.fn()

// obj.fn(); // Method

// const b = obj.fn;

// b(); // function

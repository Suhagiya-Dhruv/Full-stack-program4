// const string = "kjfabkbbababkjiehgx";

// const a = 'a';
// const b = 'b';

// let count = 0;
// let ans = 0;

// for(let i=string.length -1;i>=0;i--){
//   if(string.charAt(i) === a){
//     ans += count;
//   }else if(string.charAt(i) === b){
//     count++;
//   }
// }

// console.log(ans);

function findValue(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return true;
        }
    }
    return false;
}
const array = [-50, -5, -1, 1, 1, 2, 4, 6, 7, 8, 90, 99, 108, 109]
const sum = 13;

let value = false;

for (let i = array.length - 1; i >= 0; i--) {
    const a = array[i];
    const b = sum - a;
    value = findValue(array, b);
    if (value) {
        break;
    }
}

value ? console.log("sum possible") : console.log("not");

// task: same question to be completed using two pointer methods
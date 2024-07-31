const array = [5, 7, 2, 1, 6, 2, 2, 2, 1, 8, 2, 2, 9, 1, 2];

const a = 1;
const b = 2;

let count = 0;
let bCount = 0;
// for (let i = 0; i < array.length; i++) { // i++  i = i+1;
//   if (array[i] == a) {
//     for (let j = i; j < array.length; j++) {
//       if (array[j] == b) {
//         count++;
//       }
//     }
//   }
// }


for(let i=array.length-1; i>=0 ;i--){
  if(array[i] === b){
    bCount++;
  }else if(array[i] === 1){
    count += bCount;
  }
}

console.log(count);


/*

Task :

const s = "abcabgcfcdb";

const char = s.charAt(i)

const a = "a";
const b = "b";

*/

 
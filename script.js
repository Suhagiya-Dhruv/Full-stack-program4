const array = [5,1,81,8,1,7,8,45,0,4,84];
const index = [[1,2],[2,3],[5,8],[1,5],[3,6],[6,9],[0,10],[0,10],[0,10],[0,10],[0,10],[0,10],[0,10],[0,10],[0,10],[0,10]];

const ans = [];
console.time();
for(let x=0; x<index.length; x++){
    let i = index[x][0]; // [1, 2]
    let j = index[x][1];
    
    let sum = 0;
    for(let k=i; k<=j; k++){
        sum += array[k];
    }
    ans.push(sum);
}

console.log(ans);

// const prefix = [];
// prefix[0] = array[0];

// for(let i = 1; i<array.length; i++){
//     prefix[i] = prefix[i-1] + array[i] // 
// }

// for(let x=0; x<index.length; x++){
//     let i = index[x][0]; // [1, 2]
//     let j = index[x][1];
    
//     if(i==0){
//         ans.push(prefix[j]);
//     }else{
//         ans.push(prefix[j]-prefix[i-1]);
//     }
// }

// console.log(ans);
console.timeEnd();



// const postfix = [];
// postfix[array.length-1] = array[array.length-1];

// for(let i=array.length-2;i>=0;i--){
//     postfix[i] = postfix[i+1] + array[i];
// }



// console.log(prefix);

// console.log(postfix);





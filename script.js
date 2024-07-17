const a  = [[1,1,1],[2,2,2]]
const b  = [[1,1],[2,2],[1,2]]

const c = [[],[]];

if(a[0].length !== b.length){
  console.log("Not Possible");
}else{


for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
          let sum = 0;
          for(let k=0; k<a[i].length; k++){
                   sum = sum + a[i][k]*b[k][j];
          }
        c[i][j] = sum;
    }
}

console.log(c);
}
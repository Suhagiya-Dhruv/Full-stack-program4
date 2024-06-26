

var a = [1, 2, 15, 1, 90, 15, 20, 74, 17, 20, 15, 20, 75];
var b = 1;
var c = 0;

for(var i=0;i<a.length;i++){
  if(a[i] == b){
    c = c+1;
  }
}

console.log(c);



var a = [1, 2, 15, 1, -90, 15, -20, 74, 17, -20, 15, 20, 75];
var c = 0;

for(var i=0;i<a.length;i++){
  console.log(c);
    c = c +a[i]
}

console.log(c);

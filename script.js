var a = 10;
var b = 20;

a = a*b; // 200

b = a/b; // 200/20 -> 10
a = a/b; // 200/10 -> 20

console.log("A", a);
console.log("B", b);

// =====================================================


var a = "ihelilo this is js lacture";
var b = "i"

var c = a.split(b)

console.log(c.length-1)

// console.log(a.split(""))

// console.log(a.charAt());

var count = 0
for (var i = 0; i < a.length; i++) {
  if (a.charAt(i) === b){
    count++;
  }
}

console.log(count)

//===========================================================

var a = "nayan";

var i = 0;
var j = a.length - 1;

var flag = true
while (j > i) {

  if (a.charAt(i) !== a.charAt(j)) {
    flag = false
    break
  }
  i++;
  j--;

}

if(flag){
  console.log("Palindrome")
}else{
  console.log("Not Palindrom")
}



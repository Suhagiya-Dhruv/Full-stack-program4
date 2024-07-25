// Event Handler

// const btn1 = document.getElementById('click');
// const btn2 = document.getElementById('dblclick');

// let count = 0;
// function clickBtn() {
//     console.log("Button Clicked", count++)
//     // if (count == 5)
//     //     btn.removeEventListener('click', clickBtn)
// }

// function dblClick(){
//     console.log("Double clicked")
// }


// btn1.addEventListener('click', clickBtn) // Event name, function
// btn2.addEventListener('dblclick', dblClick) // Event name, function



//=================== Couneter ===========================//

const desc = document.getElementById("desc");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");


const h1 = document.getElementById("count");

let count = 0;
// function decfn() {
//     count--;
//     h1.innerText = count
// }

function resetfn() {
    count = 0;
    h1.innerText = count
}

// function incfn() {
//     count++;
//     h1.innerText = count
// }


desc.addEventListener('click', function () {
    count--;
    h1.innerText = count
});
reset.addEventListener('click', resetfn);
inc.addEventListener('click', ()=>{
    count++;
    h1.innerText = count
});

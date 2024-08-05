// 

// console.log("1");

// setTimeout(() => {
//     console.log("2")
// }, 3000)
// function callSetTimeout() {
//     console.log("3");
// }

// // // callSetTimeout();
// const id = setTimeout(callSetTimeout, 2000) // function, (seconds miliseconds)
// console.log("4")


// 1000ms -> 1s

// const intervalId = setInterval(() => {
//     console.log("setInterval")
// }, 500)

// // clearTimeout(id)

// setTimeout(() => {
//     clearInterval(intervalId)
//     console.log("Clear Interval")
// }, 3000)


let timer = 10;

const id = setInterval(() => {
    timer--;
    console.log(timer)
    // element.innerText = timer
    if(timer === 0){
        clearInterval(id)
    }
}, 1000)
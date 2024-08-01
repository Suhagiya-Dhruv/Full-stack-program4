// document.addEventListener("click", () => {
//     console.log("Click Event")
// })

/***** Keyborad Event ********/

// const box = document.getElementById("box");

// box.addEventListener("keydown", () => {
//     console.log("Key Down Event")
// })

// document.addEventListener("keydown", (event) => {
//     console.log("key down", event.code, event.key)
// })


// document.addEventListener("keyup", (event) => {
//     console.log("key up", event.code, event.key)
// })


// document.addEventListener("keypress", (event) => {
//     console.log("key press", event.code, event.key)
// })

/**** mouse event */

// document.addEventListener("mouseenter", (event) => {
//     console.log("mouse enter", event)
// })

// document.addEventListener("mouseleave", (event) => {
//     console.log("mouse leave", event)
// })

// document.addEventListener("mouseover", (event) => {
//     console.log("mouse over", event)
// })

// document.addEventListener("mousemove", (event) => {
//     console.log("mouse move", event)
// })

// document.addEventListener("mousedown", (event) => {
//     console.log("mouse down", event)
// })

// document.addEventListener("mouseup", (event) => {
//     console.log("mouse Up", event)
// })

// change

const box = document.querySelectorAll("div")

document.addEventListener("keyup", (event) => {
    for (let i = 0; i < box.length; i++) {
        const elemKey = box[i].dataset.key
        if (elemKey === event.key.toUpperCase()) {
            console.log("matched")
            box[i].remove();
            break;
        }
    }
})


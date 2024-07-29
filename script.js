let slide = document.querySelectorAll(".slice")
const slices = document.querySelectorAll(".slices")

let children = slide.length;
let maxSlider = 7;

function reset() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("visible")
    }
}


// function sliderHandelr1() {
//     reset()
//     console.log("sliderHandelr1");
//     slide[0].classList.add("visible");
// }

// function sliderHandelr2() {
//     reset()
//     console.log("sliderHandelr2");
//     slide[1].classList.add("visible");
// }

// function sliderHandelr3() {
//     reset()
//     console.log("sliderHandelr3");
//     slide[2].classList.add("visible");
// }

let currentSlide = "1";
function sliderHandelr(index) {
    reset()
    currentSlide = String(index);
    slide[index - 1].classList.add("visible");
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // rgb(255,255,255)
    return `rgb(${red},${green},${blue})`;
}

function removeslice(slice) {
    slice.parentNode.remove()

    const buttonSlice = document.querySelectorAll(".btn");
    for (let i = 0; i < buttonSlice.length; i++) {
        const { index } = buttonSlice[i].dataset

        if (currentSlide === index) {
            buttonSlice[i].remove()
        }
    }
}

function addNewSlider() {
    children++;

    // if (children > maxSlider) {
    //     alert("Too many children")
    //     return;
    // }
    const div = document.createElement("div");
    div.classList.add("slice");
    div.style.backgroundColor = randomColor(); // random color

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    removeBtn.setAttribute("class", "remove");
    removeBtn.setAttribute("onclick", `removeslice(this)`)
    div.appendChild(removeBtn)

    const btn = document.createElement("button");
    btn.innerText = children;
    //dataset
    btn.setAttribute("data-index", children);
    btn.setAttribute("class", "btn");
    btn.setAttribute("onclick", `sliderHandelr(${children})`)
    // btn.addEventListener('click', () => {
    //     sliderHandelr(children)
    // })

    slices[0].appendChild(div)
    slices[1].appendChild(btn)

    slide = document.querySelectorAll(".slice")


}
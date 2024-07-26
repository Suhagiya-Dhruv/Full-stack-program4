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

function sliderHandelr(index) {
    reset()
    console.log("sliderHandelr", index);
    slide[index - 1].classList.add("visible");
}


function addNewSlider() {
    children++;

    // if (children > maxSlider) {
    //     alert("Too many children")
    //     return;
    // }
    const div = document.createElement("div");
    div.classList.add("slice");
    div.style.backgroundColor = "black";


    const btn = document.createElement("button");
    btn.innerText = children;
    btn.setAttribute("class", "btn");
    btn.setAttribute("onclick", `sliderHandelr(${children})`)
    // btn.addEventListener('click', () => {
    //     sliderHandelr(children)
    // })

    slices[0].appendChild(div)
    slices[1].appendChild(btn)

    slide = document.querySelectorAll(".slice")


}
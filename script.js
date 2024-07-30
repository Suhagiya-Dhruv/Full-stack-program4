let slide = document.querySelectorAll(".slice")
const slices = document.querySelectorAll(".slices")

let children = slide.length;

function reset() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("visible")
    }
}


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
    children--;
    slice.parentNode.remove()

    const buttonSlice = document.querySelectorAll(".btn");
    for (let i = 0; i < buttonSlice.length; i++) {
        const { index } = buttonSlice[i].dataset

        if (currentSlide === index) {
            buttonSlice[i].remove()
        }
    }

    slide = document.querySelectorAll(".slice")
    const btns = slices[1].children;
    for (let i = 0; i < btns.length; i++) {
        btns[i].innerText = i + 1;
        btns[i].dataset.index = i + 1; // update index
        btns[i].setAttribute('onclick', `sliderHandelr(${i + 1})`)
    }

    sliderHandelr(children)
}

function addNewSlider() {
    children++;

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

    slices[0].appendChild(div)
    slices[1].appendChild(btn)

    slide = document.querySelectorAll(".slice")
}
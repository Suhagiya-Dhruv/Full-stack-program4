let box = document.querySelectorAll(".box")
const continer = document.getElementById("continer");

function newChar() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const i = Math.floor(Math.random() * 26);
    return alphabet.charAt(i)
}

function randomPosition() {

    const top = Math.floor(Math.random() * 8.7) * 10
    const left = Math.floor(Math.random() * 9.7) * 10

    return { top, left }
}

function createNewElement() {
    const char = newChar()
    const div = document.createElement("div");
    div.setAttribute("class", "box");

    let { top, left } = randomPosition();

    for (let i = 0; i < box.length; i++) {
        if (box[i].style.top === `${top}%` && box[i].style.left === `${left}%`) {
            console.log(box[i].style.top, box[i].style.left)
            top = randomPosition().top;
            left = randomPosition().left;
        }
    }
    // 

    div.style.top = `${top}%`
    div.style.left = `${left}%`
    div.dataset.key = char;
    div.innerText = char;

    continer.appendChild(div)

    box = document.querySelectorAll(".box")

}
document.addEventListener("keyup", (event) => {
    for (let i = 0; i < box.length; i++) {
        const elemKey = box[i].dataset.key
        if (elemKey === event.key.toUpperCase()) {
            console.log("matched")
            box[i].remove();
            break;
        }
    }
    createNewElement();
})


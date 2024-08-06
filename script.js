const timer = document.getElementById('timer');
const audio = document.getElementById('audio');

// console.log(timer.getBoundingClientRect()) // {top, left, right, bottom, height, width,x ,y}

let time = 5;
let timerOn = false;
timer.innerText = time;
let btn;
function timerHandler(button) {
    btn = button
    timerOn = !timerOn;
    button.innerText = timerOn ? "Stop" : "Start";
}

function resetHandler() {
    time = 16;
}

let count = 1;

function audioPlayer() {
    const audioId = setInterval(() => {
        audio.play();
        count++;
        if (count == 10) {
            clearInterval(audioId);
            count = 0;
        }
    }, 1000)
}


const id = setInterval(() => {
    if (timerOn) {
        time--
        timer.innerText = time < 10 ? `0${time}` : time;
        if (time === 0) {
            audioPlayer();
            time = 15;
            timer.innerText = time;
            timerOn = false;
            btn.innerText = "Start";
            clearInterval(id)
        }
    }
}, 1000)
let timer;
let isRunning = false;
let isPaused = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").style.display = "inline-block";
        document.getElementById("startStop").innerText = "Start";
        document.getElementById("pause").style.display = "none";
        isRunning = false;
    } else {
        if (isPaused) {
            timer = setInterval(runTimer, 1000);
            document.getElementById("pause").innerText = "Pause";
            isPaused = false;
        } else {
            timer = setInterval(runTimer, 1000);
            document.getElementById("startStop").style.display = "none";
            document.getElementById("startStop").innerText = "Start";
            document.getElementById("pause").style.display = "inline-block";
            isRunning = true;
        }
    }
}

function runTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    
    let displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("display").innerText = displayTime;
}

function pauseResume() {
    if (isPaused) {
        timer = setInterval(runTimer, 1000);
        document.getElementById("pause").innerText = "Pause";
        isPaused = false;
    } else {
        clearInterval(timer);
        document.getElementById("pause").innerText = "Resume";
        isPaused = true;
    }
}

function lapReset() {
    let lapTime = document.createElement('li');
    lapTime.innerText = `Lap ${lapCounter}: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('laps').appendChild(lapTime);
    
    lapCounter++;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById("display").innerText = "00:00:00";
    
    lapCounter = 1;
    
    let lapsList = document.getElementById('laps');
    while (lapsList.firstChild) {
        lapsList.removeChild(lapsList.firstChild);
    }
    
    document.getElementById("startStop").style.display = "inline-block";
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("pause").style.display = "none";
}
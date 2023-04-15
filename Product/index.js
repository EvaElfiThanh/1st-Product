
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const hoursDisplay = document.getElementById("Hours");
const MinutesDisplay = document.getElementById("Minutes");
const secondsDisplay = document.getElementById("Seconds");

let currentHours = 0;
let currentMinutes = 0;
let currentSeconds = 0;
let isActive = false;
let starting;



startBtn.addEventListener('click', () => {
    if(!isActive) {
        isActive =true;
        starting = setInterval(Action,1); 
    }
});
pauseBtn.addEventListener('click', () => {
    isActive = false;
    clearInterval(starting);
});
resetBtn.addEventListener('click', () => {
    clearInterval(starting);
    currentHours = 0;
    currentMinutes = 0;
    currentSeconds = 0;
    isActive = false;

    displayTime(currentHours, currentMinutes, currentSeconds)
});

function Action() {
    currentSeconds++;
    if (currentSeconds == 60) {
        currentSeconds = 0;
        currentMinutes++;
    }
    if  (currentMinutes == 60) {
        currentMinutes = 0;
        currentHours++
    }
    
    displayTime(currentHours, currentMinutes, currentSeconds)
}
function displayTime(currentHours, currentMinutes, currentSeconds) {
    currentHours = Add(currentHours);
    currentMinutes = Add(currentMinutes);
    currentSeconds = Add(currentSeconds);
    
    hoursDisplay.innerHTML = `${currentHours} :`;
    MinutesDisplay.innerHTML = ` ${currentMinutes} :`;
    secondsDisplay.innerHTML = ` ${currentSeconds}`;
    
    function Add(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

                        /*  Example javascript    */


// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const pauseBtn = document.querySelector("#pauseBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let startTime = 0;
// let elapsedTime = 0;
// let currentTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if(paused){
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 1000);
//     }
// });
// pauseBtn.addEventListener("click", () => {
//     if(!paused){
//         paused = true;
//         elapsedTime = Date.now() - startTime;
//         clearInterval(intervalId);
//     }
// });
// resetBtn.addEventListener("click", () => {
//     paused = true;
//     clearInterval(intervalId);
//     startTime = 0;
//     elapsedTime = 0;
//     currentTime = 0;
//     hrs = 0;
//     mins = 0;
//     secs = 0;
//     timeDisplay.textContent = "00:00:00";
// });

// function updateTime(){

//     elapsedTime = Date.now() - startTime;

//     secs = Math.floor((elapsedTime / 1000) % 60);
//     mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);



//     secs = pad(secs);
//     mins = pad(mins);
//     hrs = pad(hrs);

//     timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

//     function pad(unit){
//         return (("0") + unit).length > 2 ? unit : "0" + unit;
//     }
// }
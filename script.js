let scoreNum = 0;
let count = 60;
const pbtm = document.getElementById("pbtm");

function makeBubble() {
    let clutter = "";

    for (let i = 0; i < 75; i++) {
    clutter += `<div class="bubble">${rn()}</div>`
    }

    pbtm.innerHTML = clutter;
}

function rn() {
    let number = Math.floor(Math.random() * 11);
    return number;
}

function runTimer() {
    let timer = document.getElementById("timer");
    let intervalId = setInterval(() => {
        count = count - 1;
        timer.textContent = count;
    }, 1000)

    setTimeout(() => {
        clearInterval(intervalId);
        pbtm.innerHTML = `<h1>Game Over with score ${scoreNum}</h1>`;
    }, 60000);
}

function getNewHit() {
    let hit = document.getElementById("hit");
    hit.textContent = rn();
}

function incScore() {
    const score = document.getElementById("score");
    scoreNum += 10;
    score.textContent = scoreNum;
}

makeBubble();
runTimer();
getNewHit();

pbtm.addEventListener("click", (event) => {
    if(event.target.innerText === hit.innerText) {
        incScore();
        getNewHit();
        makeBubble();
    };
});
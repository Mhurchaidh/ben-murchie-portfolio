let seq = [];
let playerSeq = [];
let startLength = 1;
const button1 = document.querySelector("#square1");
const button2 = document.querySelector("#square2");
const button3 = document.querySelector("#square3");
const button4 = document.querySelector("#square4");
const selection = [button1, button2, button3, button4];
const startButton = document.querySelector("#readyup");

function produceSequence() {
    startButton.disabled = true;
    for (let i = 0; i < startLength; i++) {
        let randomIndex = Math.floor(Math.random() * selection.length);
        let item = selection[randomIndex];
        seq.push(item);
    }
    showSequence();
}

const delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms));

async function showSequence() {
    for (let element of seq) {
        await delay(200);
        switch (element) {
            case button1:
                element.style.backgroundColor = `rgba(0, 255, 0, 1)`;
                await delay(180);
                element.style.backgroundColor = `rgba(0, 255, 0, 0.3)`;
                break;
            case button2:
                element.style.backgroundColor = `rgba(255, 0, 0, 1)`;
                await delay(180);
                element.style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
                break;
            case button3:
                element.style.backgroundColor = `rgba(255, 255, 0, 1)`;
                await delay(180);
                element.style.backgroundColor = `rgba(255, 255, 0, 0.3)`;
                break;
            case button4:
                element.style.backgroundColor = `rgba(0, 0, 255, 1)`;
                await delay(180);
                element.style.backgroundColor = `rgba(0, 0, 255, 0.3)`;
        }
    }
    for (let button of selection){
        button.disabled = false;
    }
}

async function testPlayerInput(square) {
    if(playerSeq.length < seq.length) {
        switch (square) {
            case button1:
                square.style.backgroundColor = `rgba(0, 255, 0, 1)`;
                playerSeq.push(square);
                await delay(100);
                square.style.backgroundColor = `rgba(0, 255, 0, 0.3)`;
                break;
            case button2:
                square.style.backgroundColor = `rgba(255, 0, 0, 1)`;
                playerSeq.push(square);
                await delay(100);
                square.style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
                break;
            case button3:
                square.style.backgroundColor = `rgba(255, 255, 0, 1)`;
                playerSeq.push(square);
                await delay(100);
                square.style.backgroundColor = `rgba(255, 255, 0, 0.3)`;
                break;
            case button4:
                square.style.backgroundColor = `rgba(0, 0, 255, 1)`;
                playerSeq.push(square);
                await delay(100);
                square.style.backgroundColor = `rgba(0, 0, 255, 0.3)`;
        }
    }
    if(playerSeq.length === seq.length && seq.length > 0) {
        if(areEqual(playerSeq, seq)) {
            playerCorrect();
        }
        else {
            playerIncorrect();
        }
        
}

function areEqual(a, b) {
    return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
    }
}

async function playerCorrect() {
    playerSeq = [];
    button1.style.backgroundColor = `rgba(0, 255, 0, 1)`;
    button2.style.backgroundColor = `rgba(0, 255, 0, 1)`;
    button3.style.backgroundColor = `rgba(0, 255, 0, 1)`;
    button4.style.backgroundColor = `rgba(0, 255, 0, 1)`;
    await delay(300);
    button1.style.backgroundColor = `rgba(0, 255, 0, 0.3)`;
    button2.style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
    button3.style.backgroundColor = `rgba(255, 255, 0, 0.3)`;
    button4.style.backgroundColor = `rgba(0, 0, 255, 0.3)`;
    for (let button of selection) {
        button.disabled = true;
    }
    produceSequence()
}

async function playerIncorrect() {
    playerSeq = [];
    seq = [];
    button1.style.backgroundColor = `rgba(255, 0, 0, 1)`;
    button2.style.backgroundColor = `rgba(255, 0, 0, 1)`;
    button3.style.backgroundColor = `rgba(255, 0, 0, 1)`;
    button4.style.backgroundColor = `rgba(255, 0, 0, 1)`;
    await delay(300);
    button1.style.backgroundColor = `rgba(0, 255, 0, 0.3)`;
    button2.style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
    button3.style.backgroundColor = `rgba(255, 255, 0, 0.3)`;
    button4.style.backgroundColor = `rgba(0, 0, 255, 0.3)`;
    startButton.disabled = false;
}
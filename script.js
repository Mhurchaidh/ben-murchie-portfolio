let selection = [];
let seq = [];
let playerSeq = [];
let seqLength = 1;
let button1;
let button2;
let button3;
let button4;
let startButton = document.getElementById("readyup");

function produceSequence() {
    button1 = document.getElementById("square1");
    button2 = document.getElementById("square2");
    button3 = document.getElementById("square3");
    button4 = document.getElementById("square4");
    startButton = document.getElementById("readyup");
    selection = [button1, button2, button3, button4];
    startButton.disabled = true;
    
    for (let i = 0; i < seqLength; i++) {
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
        await delay(500);
        switch (element) {
            case button1:
                element.style.backgroundColor = `rgba(0, 255, 0, 1)`;
                await delay(400);
                element.style.backgroundColor = `rgba(0, 255, 0, 0.3)`;
                break;
            case button2:
                element.style.backgroundColor = `rgba(255, 0, 0, 1)`;
                await delay(400);
                element.style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
                break;
            case button3:
                element.style.backgroundColor = `rgba(255, 255, 0, 1)`;
                await delay(400);
                element.style.backgroundColor = `rgba(255, 255, 0, 0.3)`;
                break;
            case button4:
                element.style.backgroundColor = `rgba(0, 0, 255, 1)`;
                await delay(400);
                element.style.backgroundColor = `rgba(0, 0, 255, 0.3)`;
        }
    }
    for (let button of selection){
        button.disabled = false;
    }
}

async function testPlayerInput(e) {
    
    if(playerSeq.length < seq.length) {
        switch (e) {
            case button1:
                e.style.backgroundColor = `rgba(0, 255, 0, 1)`;
                playerSeq.push(e);
                await delay(200);
                e.style.backgroundColor = `rgba(0, 255, 0, 0.3)`;
                break;
            case button2:
                e.style.backgroundColor = `rgba(255, 0, 0, 1)`;
                playerSeq.push(e);
                await delay(200);
                e.style.backgroundColor = `rgba(255, 0, 0, 0.3)`;
                break;
            case button3:
                e.style.backgroundColor = `rgba(255, 255, 0, 1)`;
                playerSeq.push(e);
                await delay(200);
                e.style.backgroundColor = `rgba(255, 255, 0, 0.3)`;
                break;
            case button4:
                e.style.backgroundColor = `rgba(0, 0, 255, 1)`;
                playerSeq.push(e);
                await delay(200);
                e.style.backgroundColor = `rgba(0, 0, 255, 0.3)`;
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
    startButton.disabled = false;
    for (let button of selection) {
        button.disabled = true;
    }
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
const seq = [];
let seqLength = 3;
let button1;
let button2;
let button3;
let button4;

function produceSequence() {
    button1 = document.getElementById("square1");
    button2 = document.getElementById("square2");
    button3 = document.getElementById("square3");
    button4 = document.getElementById("square4");
    const selection = [button1, button2, button3, button4];
    
    for (let i = 0; i < seqLength; i++) {
        let randomIndex = Math.floor(Math.random() * selection.length);
        let item = selection[randomIndex];
        seq.push(item);
    }
    console.log(seq);
    showSequence();
}

const delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms));

async function showSequence() {
    for (let element of seq) {
        switch (element) {
            case button1:
                element.style.backgroundColor = `rgba(0, 128, 0, 1)`;
                break;
            case button2:
                element.style.backgroundColor = `rgba(205, 0, 0, 1)`;
                break;
            case button3:
                element.style.backgroundColor = `rgba(205, 205, 0, 1)`;
                break;
            case button4:
                element.style.backgroundColor = `rgba(0, 0, 205, 1)`;
        }
        await delay(1000);
        console.log(element);
    }
}
const selection = [1, 2, 3, 4];
const seq = [];
let seqLength = 3;

function produceSequence() {
    for (let i = 0; i < seqLength; i++) {
        let randomIndex = Math.floor(Math.random() * selection.length);
        let item = selection[randomIndex];
        seq.push(item);
    }
    console.log(seq);
}

const delay = async (ms = 1000) =>
    new Promise(resolve => setTimeout(resolve, ms));

async function showSequence() {
    for (const element of seq) {
        console.log(element);
        await delay(1000);
    }
}
produceSequence();
showSequence();
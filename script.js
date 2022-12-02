const selection = [1, 2, 3, 4];
const seq = [];
let seqLength = 1;

function produceSequence() {
    for (let i = 0; i < seqLength; i++) {
        let randomIndex = Math.floor(Math.random() * selection.length);
        let item = selection[randomIndex];
        seq.push(item);
    }
    console.log(seq);
    return seq;
}

// function showSequence() {
//     for (const element of seq){
//         console.log(element);
//     }
//     // setInterval(showSequence, 2000);
// }
setInterval(produceSequence, 1000);
produceSequence();
//showSequence();
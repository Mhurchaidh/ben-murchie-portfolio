const selection = [1, 2, 3, 4];
const seq = [];
let seqLength = 7;

function produceSequence() {
    for (let i = 0; i < seqLength; i++){
        let randomIndex = Math.floor(Math.random() * selection.length);
        let item = selection[randomIndex];
        seq.push(item);
    }
    seqLength++;
    console.log(seq);
    return seq;
}

// function showSequence() {
//     for (const element of seq){
//         console.log(element);
//     }
//     setInterval(showSequence, 2000);
// }

produceSequence();
// showSequence();
console.log("I am a fish");

let numGoldfish = 0;
let goldfishSpan = document.getElementById('numGoldfish');
goldfishSpan.innerText = numGoldfish;

function goFishing() {
    // console.log(numGoldfish);
    numGoldfish ++;
    goldfishSpan.innerText = numGoldfish;
}
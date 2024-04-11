console.log("I am a fish");

// Goldfish count
let numGoldfish = 0;
let goldfishSpan = document.getElementById('numGoldfish');
goldfishSpan.innerText = numGoldfish;

function goFishing() {
    // console.log(numGoldfish);
    numGoldfish ++;
    goldfishSpan.innerText = numGoldfish;
}

// Swordfish count
let numSwordfish = 0;
let swordfishSpan = document.getElementById('numSwordfish');
swordfishSpan.innerText = numSwordfish;

// Shark count
let numShark = 0;
let sharkSpan = document.getElementById('numShark');
sharkSpan.innerText = numShark;

// Whale count
let numWhale = 0;
let whaleSpan = document.getElementById('numWhale');
whaleSpan.innerText = numWhale;

// Narwhal count
let numNarwhal = 0;
let narwhalSpan = document.getElementById('numNarwhal');
narwhalSpan.innerText = numNarwhal;

// Gummy worm count
let numGummyWorms = 0;
let gummyWormSpan = document.getElementById('numGummyWorms');
gummyWormSpan.innerText = numGummyWorms;

// Saltine crackers count
let numSaltineCrackers = 0;
let saltineCrackerSpan = document.getElementById('numSaltineCrackers');
saltineCrackerSpan.innerText = numSaltineCrackers;

// Chicken nugget count
let numChickenNuggets = 0;
let chickenNuggetSpan = document.getElementById('numChickenNuggets');
chickenNuggetSpan.innerText = numChickenNuggets;

// Cake slices count
let numCakeSlices = 0;
let cakeSliceSpan = document.getElementById('numCakeSlices');
cakeSliceSpan.innerText = numCakeSlices;

// Fishing rod values
const FishingRodOptions = Object.freeze({
    A_FISHING_ROD: "A Fishing Rod",
    A_BETTER_FISHING_ROD: "A Better Fishing Rod",
    AN_EVEN_BETTER_FISHING_ROD: "An Even Better Fishing Rod",
    THE_BEST_FISHING_ROD: "The Best Fishing Rod"
});
let currentRod = FishingRodOptions.A_FISHING_ROD;
let selectRod = document.getElementById("equipment-select");

for (val in FishingRodOptions) {
    var option = document.createElement("option");
    option.value = val;
    option.innerHTML = FishingRodOptions[val];
    selectRod.append(option)  
}

function rodChanged(selectObject) {
    // Eventually should actually make the user buy the rod
    let currentRod = selectObject.value;
    console.log(currentRod)
}
// Sand dollar count
function updateSandDollars() {
    let sandDollarsSpan = document.getElementById('sandDollars');
    sandDollarsSpan.innerText = Math.round(sandDollars * 100) / 100;
}
function updateAvailableRods() {
    for (let x = 1; x < fishingRods.length; x++) {
        let fishingRodSpan = document.getElementById("rod" + x);
        fishingRodSpan.innerText = fishingRods[x].name;
    }
}

let sandDollars = 0;
updateSandDollars();

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
    // console.log(fish)
}


function sellFish(fishType) {
    numName = fishStats[fishType].name
    if (fishCount[numName] >= 1) {
        // Update fish value accordingly
        fishValue = fishStats[fishType].cost;
        fishCount[numName] -= 1;
        updateFishCount(numName);

        // Update sand dollar count
        sandDollars += fishValue;
        updateSandDollars()
    }
}

// Buying bait
function buyBait(bait) {
    baitName = baits[bait].name;
    baitValue = baits[bait].cost;
    if (baitValue <= sandDollars) {
        // Update bait
        baitCount[baitName] += 1;
        updateBaitCount(baitName);

        // Update sand dollars
        sandDollars -= baitValue;
        updateSandDollars();
    }
}

// Buying rods
updateAvailableRods();

function buyRod(fishingRod) {
    rodValue = fishingRods[fishingRod].cost;
    if (rodValue <= sandDollars) {
        // Update rod
        currentRod = fishingRods[fishingRod];
        updateFishingRod();
        updateAvailableRods();

        // Update sand dollars
        sandDollars -= rodValue;
        updateSandDollars();
    }
}

// buying habitats
function buyHabitat(fishHabitat) {
    habitatValue = fishHabitats[fishHabitat].cost;
    if (habitatValue <= sandDollars) {
        // Update habitat
        currentHabitat = fishHabitats[fishHabitat];
        updateHabitat();

        // Update sand dollars
        sandDollars -= habitatValue;
        updateSandDollars();

        // changing habitat maximum
        let habitatMaximumSpan = document.getElementById("habitatMaximum");
        habitatMaximumSpan.innerText = currentHabitat.capacity;
    }
} 

// habitat labels in trading
for (let x = 1; x < fishHabitats.length; x++) {
    let fishHabitatSpan = document.getElementById("habitat" + x);
    fishHabitatSpan.innerText = fishHabitats[x].name;
}

// win label
for (let x = 0; x < win.length; x++) {
    let winSpan = document.getElementById("win" + x);
    winSpan.innerText = win[x].name;
}

// costs and such of various tradeable things
for (let x = 0; x < fishStats.length; x++) { // selling fish
    let fishCostSpan = document.getElementById("fish" + x + "-cost");
    fishCostSpan.innerText = fishStats[x].cost;
}

for (let x = 1; x < fishingRods.length; x++) { // buying rods
    let rodCostSpan = document.getElementById("rod" + x + "-cost");
    rodCostSpan.innerText = fishingRods[x].cost;
}

for (let x = 0; x < baits.length; x++) { // buying rods
    let baitCostSpan = document.getElementById("bait" + x + "-cost");
    baitCostSpan.innerText = baits[x].cost;
}

for (let x = 1; x < fishHabitats.length; x++) { // buying rods
    let habitatCostSpan = document.getElementById("habitat" + x + "-cost");
    habitatCostSpan.innerText = fishHabitats[x].cost;
}

for (let x = 0; x < win.length; x++) { // buying rods
    let winCostSpan = document.getElementById("win" + x + "-cost");
    winCostSpan.innerText = win[x].cost;
}
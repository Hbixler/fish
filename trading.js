// Sand dollar count
function updateSandDollars() {
    let sandDollarsSpan = document.getElementById('sandDollars');
    sandDollarsSpan.innerText = Math.round(sandDollars * 100) / 100;
}
function updateAvailableRods() {
    for (let x = 0; x < fishingRods.length; x++) {
        let fishingRodSpan = document.getElementById("rod" + x);
        fishingRodSpan.innerText = fishingRods[x].name;
    }
}

let sandDollars = 2000;
updateSandDollars();

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
    // console.log(fish)
}


function sellFish(fishType) {
    fishStat = fishStats[fishType]
    if (fishStat.inventoryCount >= 1) {
        // Update fish value accordingly
        fishValue = fishStat.cost;
        fishStat.inventoryCount = fishStat.inventoryCount - 1;
        updateFishCount(fishType);

        // Update sand dollar count
        sandDollars += fishValue;
        updateSandDollars()
    }
}

// Buying bait
function buyBait(baitNumber) {
    baitName = baits[baitNumber].name;
    baitValue = baits[baitNumber].cost;
    if (baitValue <= sandDollars) {
        // Update bait
        baits[baitNumber].count += 1;
        updateBaitCount(baitNumber);

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

        if (fishingRod === 0) {
            suppliesDiv = document.getElementById('supplies-div');
            suppliesDiv.style.visibility = 'visible';
        } else if (fishingRod === 1) {
            bait0Div = document.getElementById('bait0-div');
            bait0Div.style.visibility = 'visible';
        } else if (fishingRod === 2) {
            bait1Div = document.getElementById('bait1-div');
            bait1Div.style.visibility = 'visible';

            bait2Div = document.getElementById('bait2-div');
            bait2Div.style.visibility = 'visible';
        } else if (fishingRod === 3) {
            bait3Div = document.getElementById('bait3-div');
            bait3Div.style.visibility = 'visible';
        }
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

        // changes displays based on what's unlocked --> shows all fish that have been unlocked before they bought the fish bowl
        if (Object.keys(currentHabitat).length > 0) { // checks if the fish bowl has been bought
            habitatDiv = document.getElementById('habitat-div'); // displays fish bowl
            habitatDiv.style.visibility = 'visible';

            for (fishNumber in fishStats) { // displays fish that are unlocked
                if (fishStats[fishNumber].unlocked) {
                    fishInHabitatDiv = document.getElementById("fishInHabitat" + fishNumber + "-div");
                    fishInHabitatDiv.style.visibility = 'visible';
                }
            }
        }
    }
} 

// habitat labels in trading
for (let x = 0; x < fishHabitats.length; x++) {
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

for (let x = 0; x < fishingRods.length; x++) { // buying rods
    let rodCostSpan = document.getElementById("rod" + x + "-cost");
    rodCostSpan.innerText = fishingRods[x].cost;
}

for (let x = 0; x < baits.length; x++) { // buying rods
    let baitCostSpan = document.getElementById("bait" + x + "-cost");
    baitCostSpan.innerText = baits[x].cost;
}

for (let x = 0; x < fishHabitats.length; x++) { // buying rods
    let habitatCostSpan = document.getElementById("habitat" + x + "-cost");
    habitatCostSpan.innerText = fishHabitats[x].cost;
}

for (let x = 0; x < win.length; x++) { // buying rods
    let winCostSpan = document.getElementById("win" + x + "-cost");
    winCostSpan.innerText = win[x].cost;
}
// Sand dollar count
function updateSandDollars() {
    let sandDollarsSpan = document.getElementById('sandDollars');
    sandDollarsSpan.innerText = sandDollars;
}
function updateAvailableRods() {
    for (let x = 1; x < fishingRods.length; x++) {
        let fishingRodSpan = document.getElementById("rod" + x);
        if (fishingRods[x].bought) {
            fishingRodSpan.style.visibility = "hidden";
        }
        else {
            fishingRodSpan.innerText = fishingRods[x].name;
        }
    }
}

let sandDollars = 100;
updateSandDollars();

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
    // console.log(fish)
    if (fishCount[fish.name] == 0) {
        console.log('cannot display!')
        buttonElement.style.visibility = 'hidden';
    }
}


function sellFish(fishType) {
    numName = fishStats[fishType].name
    if (fishCount[numName] > 0) {
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
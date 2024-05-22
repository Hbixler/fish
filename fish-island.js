// let fishStats = getFishStats();
let baits = getBaits();
let fishingRods = getFishingRods();
let speed = getSpeed();
let fishHabitats = getFishHabitats();
let win = getWin();
let sandDollars = getSandDollars();
let currentRod = getCurrentRod();

// fish labels in inventory
for (let x = 0; x < fishStats.length; x++) {
    let fishStatsSpan = document.getElementsByClassName("fish" + x);
    for (let y = 0; y < fishStatsSpan.length; y++) {
        fishStatsSpan[y].innerText = fishStats[x].name;
    }
}

// Bait labels
for (let x = 0; x < baits.length; x++) {
    let baitsSpan = document.getElementsByClassName("bait" + x);
    for (let y = 0; y < baitsSpan.length; y++) {
        baitsSpan[y].innerText = baits[x].name;
    }
    updateBaitCount(x)
}

// automatic fishing
window.setInterval(function() {
    fishStats = getFishStats();


    for (autoFish in currentRod.rates) {
        // Find the fish's stats
        fishIndex = fishStats.findIndex(fish => fish.name == autoFish);
        fishStat = fishStats[fishIndex]

        // If fish needs bait and is being fished
        if (fishStat.bait.length > 0 && currentRod.rates[autoFish] > 0) {
            baitIndex = baits.findIndex(bait => bait.name == fishStat.bait);
            bait = baits[baitIndex]
            if (bait.count <= 0) {
                // We have no bait :( cannot fish
                continue;
            }
            // Use bait
            bait.count = bait.count - 1;
            updateBaitCount(baitIndex)
        }
        // Gain fish!
        fishStat.inventoryCount = fishStat.inventoryCount + currentRod.rates[autoFish];
        updateFishCount(fishIndex, fishStat.inventoryCount)
    }

}, 1000/speed)

updateSandDollars(sandDollars);

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
}

// Buying rods
updateFishingRod(currentRod);
updateAvailableRods();

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

// costs and such of various tradeable things - getFishStats called above
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

for (let x = 0; x < fishHabitats.length; x++) { // buying rods
    let habitatCostSpan = document.getElementById("habitat" + x + "-cost");
    habitatCostSpan.innerText = fishHabitats[x].cost;
}

for (let x = 0; x < win.length; x++) { // buying rods
    let winCostSpan = document.getElementById("win" + x + "-cost");
    winCostSpan.innerText = win[x].cost;
}

// DELETE LATER
makeEverythingVisible();
// Visibility functions
function isBaitVisible(baitNum) {
    return baits[baitNum].unlocked;
}
function makeBaitVisible(baitNum) {
    let baitDiv = document.getElementById('bait' + baitNum + '-div'); 
    baitDiv.style.visibility = 'visible';

    let baitTradingDiv = document.getElementById('baitTrading' + baitNum + '-div');
    baitTradingDiv.style.visibility = 'visible';
}
function makeSuppliesVisible() {
    let suppliesDiv = document.getElementById('supplies-div');
    suppliesDiv.style.visibility = 'visible';
}
function isInventoryFishVisible(fishNum) {
    return fishStats[fishNum].unlocked;
}
function makeInventoryFishVisible(fishNumber) {
    // Add fish to inventory options
    fishDiv = document.getElementById("fish" + fishNumber + "-div");
    fishDiv.style.visibility = 'visible';
}
function makeInventorySectionVisible() {
    fishHeadingDiv = document.getElementById("fish-heading");
    fishHeadingDiv.style.visibility = 'visible';

    fishDiv = document.getElementById("fish-div")
    fishDiv.style.removeProperty('border');

    inventoryHeadingDiv = document.getElementById("inventory-heading");
    inventoryHeadingDiv.style.visibility = 'visible';

    inventoryDiv = document.getElementById("inventory-div");
    inventoryDiv.style.removeProperty('border'); 
}

// Update functions
function updateBaitCount(baitNum) {
    let baitSpan = document.getElementById("bait" + baitNum + "-count");
    baitSpan.innerText = baits[baitNum].count;
}
function updateFishingRod() {
    let fishingRodSpan = document.getElementById("fishingRod");
    fishingRodSpan.innerText = currentRod.name;
}
function updateFishCount(fishNumber) {
    let fishCountSpan = document.getElementById("fish" + fishNumber + "-count");
    fishCountSpan.innerText = Math.floor(fishStats[fishNumber].inventoryCount);

    if (fishStats[fishNumber].inventoryCount >= 1 && !isInventoryFishVisible(fishNum)) {
        if (fishNumber === 0) {
            // Fishing for goldfish for first time, adding boxes and borders
            makeInventorySectionVisible();  
        }

        // Unlock fish
        fishStats[fishNumber].unlocked = true;

        // Add fish to inventory options
        makeInventoryFishVisible(fishNumber);

        if (isHabitatVisible()) {
            // If habitat unlocked, make fish option in habitat
            makeHabitatFishVisible(fishNumber);
        }

        // Add fish to trading option
        makeFishTradingVisible(fishNumber);

        // shows vehicles section when narwhal is unlocked
        if(fishNumber === fishStats.length - 1) {
            makeVehicleSectionVisible();
        }
    }

    if (fishStats[0].inventoryCount === 5 && !isTradingSectionVisible()) { // at 5 goldfish
        makeTradingSectionVisible();
    }

        
}

// fish labels in inventory and habitat
for (let x = 0; x < fishStats.length; x++) {
    let fishStatsSpan = document.getElementsByClassName("fish" + x);
    for (let y = 0; y < fishStatsSpan.length; y++) {
        fishStatsSpan[y].innerText = fishStats[x].name;
    }
}

for (let x = 0; x < baits.length; x++) {
    let baitsSpan = document.getElementsByClassName("bait" + x);
    for (let y = 0; y < baitsSpan.length; y++) {
        baitsSpan[y].innerText = baits[x].name;
    }
    updateBaitCount(x)
}

// go fishing button
function goFishing() {
    fishStats[0].inventoryCount = fishStats[0].inventoryCount + 1;
    updateFishCount(0);
}

let currentRod = {};
updateFishingRod();

// automatic fishing
window.setInterval(function() {
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
        updateFishCount(fishIndex)
    }
}, 1000)
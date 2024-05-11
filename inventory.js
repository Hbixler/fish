// Update functions
function updateBaitCount(baitNum) {
    let baits = getBaits();

    let baitSpan = document.getElementById("bait" + baitNum + "-count");
    baitSpan.innerText = baits[baitNum].count;
}
function updateFishingRod() {
    let fishingRodSpan = document.getElementById("fishingRod");
    fishingRodSpan.innerText = currentRod.name;
}
function updateFishCount(fishNumber) {
    let fishStats = getFishStats();
    let baits = getBaits();

    let fishCountSpan = document.getElementById("fish" + fishNumber + "-count");
    fishCountSpan.innerText = Math.floor(fishStats[fishNumber].inventoryCount);

    if (fishStats[fishNumber].inventoryCount >= 1 && !isInventoryFishVisible(fishNum)) {
        if (fishNumber === 0) {
            // Fishing for goldfish for first time, adding boxes and borders
            makeInventorySectionVisible();  

            if (fishStats[0].inventoryCount === 5 && !isTradingSectionVisible()) { // at 5 goldfish
                makeTradingSectionVisible();
                makeFishTradingVisible(0);
            }
        }

        if (fishNumber === 2 && !fishStats[2].unlocked) {
            makeBaitVisible(2);
            baits[2].unlocked = true;
        }

        // Unlock fish
        fishStats[fishNumber].unlocked = true;

        // Add fish to inventory options
        makeInventoryFishVisible(fishNumber);

        if (isHabitatVisible()) {
            // If habitat unlocked, make fish option in habitat
            makeHabitatFishVisible(fishNumber);
        }

        if (fishNumber >= 1) {
            // Add fish to trading option
            makeFishTradingVisible(fishNumber);
        }
        
        // shows vehicles section when narwhal is unlocked
        if(fishNumber === fishStats.length - 1) {
            console.log(fishNumber + ' is the narwhal!');
            makeVehicleSectionVisible();
        }
    } 
    
    setFishStats(fishStats);
    setBaits(baits);
}

// go fishing button
function goFishing() {
    let fishStats = getFishStats();

    fishStats[0].inventoryCount = fishStats[0].inventoryCount + 1;
    updateFishCount(0);

    setFishStats(fishStats);
}
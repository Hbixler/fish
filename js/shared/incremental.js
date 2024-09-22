let speed = get('speed');

// REVENUE FROM VISITORS
window.setInterval(function() {
    let sandDollars = get('sandDollars');
    let revenue = get('revenue');
    sandDollars = sandDollars + revenue;
    updateSandDollars(sandDollars);
}, 1000/speed)

// AUTOMATIC FISHING
window.setInterval(function() {
    let fishStats = get('fishStats');
    let baits = get('baits');
    let currentRod = get('currentRod');
    let storage = get('currentStorage');
    let maxFish = storage.capacities["Fish"];

    for (autoFish in currentRod.rates) {
        // Find the fish's stats
        let fishIndex = fishStats.findIndex(fish => fish.name == autoFish);
        let fishStat = fishStats[fishIndex];

        let currentStorage = howBigAreMyFish();

        if (currentRod.rates[autoFish] + currentStorage <= maxFish) { // We have enough room to add a fish
            if (fishStat.bait.length > 0 && currentRod.rates[autoFish] > 0) { // If fish needs bait and is being fished
                let baitIndex = baits.findIndex(bait => bait.name == fishStat.bait);
                let bait = baits[baitIndex];

                if (bait.count <= 0) { // We have no bait :( cannot fish
                    updateHasBait(fishIndex, false);
                    continue;
                }
                // Use bait
                bait.count = bait.count - 1;
                updateBaitCount(baitIndex, bait.count);
            }
            // Gain fish!
            fishStat.inventoryCount = fishStat.inventoryCount + currentRod.rates[autoFish];
            updateFishCount(fishIndex, fishStat.inventoryCount);

            // update the shared info section
        }

    }
}, 1000/speed)

// count fish
function howBigAreMyFish() { 
    let fishStats = get('fishStats');
    fishInInventory = 0;
    for (fishNumber in fishStats) {
        fishInInventory += (fishStats[fishNumber].inventoryCount * fishStats[fishNumber].size);
    }
    return(fishInInventory);
}
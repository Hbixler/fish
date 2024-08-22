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

    for (autoFish in currentRod.rates) {
        // Find the fish's stats
        let fishIndex = fishStats.findIndex(fish => fish.name == autoFish);
        let fishStat = fishStats[fishIndex]

        // If fish needs bait and is being fished
        if (fishStat.bait.length > 0 && currentRod.rates[autoFish] > 0) {
            let baitIndex = baits.findIndex(bait => bait.name == fishStat.bait);
            let bait = baits[baitIndex]

            if (bait.count <= 0) {
                // We have no bait :( cannot fish

                updateHasBait(fishIndex, false)
                continue;
            }
            // Use bait
            bait.count = bait.count - 1;
            updateBaitCount(baitIndex, bait.count)
        }
        // Gain fish!
        fishStat.inventoryCount = fishStat.inventoryCount + currentRod.rates[autoFish];
        updateFishCount(fishIndex, fishStat.inventoryCount)
        
        /* If we want to show fish progress */
        // updateFishProgress(fishIndex, fishStat.inventoryCount - Math.floor(fishStat.inventoryCount));
    }
}, 1000/speed)
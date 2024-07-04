// REVENUE FROM VISITORS
let speed = getSpeed();
window.setInterval(function() {
    let sandDollars = getSandDollars();
    let revenue = getRevenue();
    sandDollars = sandDollars + revenue;
    updateSandDollars(sandDollars);
}, 1000/speed)

// AUTOMATIC FISHING
window.setInterval(function() {
    let fishStats = getFishStats();
    let baits = getBaits();
    let currentRod = getCurrentRod();

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
                continue;
            }
            // Use bait
            bait.count = bait.count - 1;
            updateBaitCount(baitIndex, bait.count)
        }
        // Gain fish!
        fishStat.inventoryCount = fishStat.inventoryCount + currentRod.rates[autoFish];
        /* if (autoFish === 'Swordfish') {
            console.log(fishStat.inventoryCount);
            console.log('current rate: ' + currentRod.rates[autoFish]);
        } */

        updateFishCount(fishIndex, fishStat.inventoryCount)
    }
}, 1000/speed)
// Update functions
function updateBaitCount(baitName) {
    let baitSpan = document.getElementById(baitName);
    baitSpan.innerText = baitCount[baitName];
}
function updateFishingRod() {
    let fishingRodSpan = document.getElementById("fishingRod");
    fishingRodSpan.innerText = currentRod.name;
}
function updateFishCount(fishName) {
    let fishCountSpan = document.getElementById(fishName);
    fishCountSpan.innerText = Math.floor(fishCount[fishName]);
}

// fish count
let fishCount = {
    'Goldfish': 0,
    'Swordfish': 0,
    'Shark': 0,
    'Whale': 0,
    'Narwhal': 0,
};

// fish labels in inventory and habitat
for (let x = 0; x < fishStats.length; x++) {
    let fishStatsSpan = document.getElementsByClassName("fish" + x);
    for (let y = 0; y < fishStatsSpan.length; y++) {
        fishStatsSpan[y].innerText = fishStats[x].name;
    }
}

for (fish in fishCount) {
    updateFishCount(fish);
}

// bait count
let baitCount = {
    'Gummy Worms': 0,
    'Saltine Crackers': 0,
    'Chicken Nuggets': 0,
    'Cake Slices': 0
}

for (let x = 0; x < baits.length; x++) {
    let baitsSpan = document.getElementsByClassName("bait" + x);
    for (let y = 0; y < baitsSpan.length; y++) {
        baitsSpan[y].innerText = baits[x].name;
    }
}

for (bait in baitCount) {
    updateBaitCount(bait)
}

// go fishing button
function goFishing() {
    fishCount['Goldfish'] = fishCount['Goldfish'] + 1;
    updateFishCount('Goldfish');
}

let currentRod = fishingRods[0];
updateFishingRod();

// automatic fishing
window.setInterval(function() {
    for (autoFish in currentRod.rates) {
        // Find the fish's stats
        fishStat = fishStats.find(fish => fish.name == autoFish);

        // If fish has bait and is being fished
        if (fishStat.bait.length > 0 && currentRod.rates[autoFish] > 0) {
            if (baitCount[fishStat.bait] <= 0) {
                // We have no bait :( cannot fish
                continue;
            }
            // Use bait
            baitCount[fishStat.bait] = baitCount[fishStat.bait] - 1;
            updateBaitCount(fishStat.bait)
        }
        // Gain fish!
        fishCount[autoFish] = fishCount[autoFish] + currentRod.rates[autoFish];
        updateFishCount(autoFish)
    }
}, 1000)
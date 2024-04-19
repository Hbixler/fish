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
    fishCountSpan.innerText = fishCount[fishName];
}

// fish count
let fishCount = {
    'Goldfish': 10,
    'Swordfish': 8,
    'Shark': 5,
    'Whale': 3,
    'Narwhal': 1,
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

// go fishing button
function goFishing() {
    fishCount['Goldfish'] = fishCount['Goldfish'] + 1;
    updateFishCount('Goldfish');
}

let currentRod = fishingRods[0];
updateFishingRod();

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
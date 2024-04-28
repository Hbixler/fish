// Update functions
function updateHabitat() {
    let fishHabitatSpan = document.getElementById("fishHabitat");
    fishHabitatSpan.innerText = currentHabitat.name;
}
function updateNumFish(fishNum) {
    // changes number of fish displayed in Habitat section
    let fishHabitatSpan = document.getElementById("fish" + fishNum + "-habitat");
    fishHabitatSpan.innerText = fishStats[fishNum].habitatCount;
}

let revenue = 0;
function updateRevenue() {
    let revenueSpan = document.getElementById('revenue');
    revenueSpan.innerText = Math.round(revenue * 100) / 100
}

// revenue from visitors
window.setInterval(function() {
    revenue = 0;
    for (auto of fishStats) {
        revenue = revenue + (auto.habitatCount * auto.revenue);
    }
    updateRevenue(revenue)
    sandDollars = sandDollars + revenue;
    updateSandDollars();
}, 1000)

// labels of fish in Habitat section
for (fishNum in fishStats) {
    let fishSpan = document.getElementById("fish" + fishNum + "-habitat");
    fishSpan.innerText = fishStats[fishNum].habitatCount;
}

// sets original habitat to nothing
let currentHabitat = {};
updateHabitat();

// sets original fish space being taken up as 0
let fishInHabitat = 0;
let fishInHabitatSpan = document.getElementById('fishInHabitat');
fishInHabitatSpan.innerText = fishInHabitat;

// habitat maximum span code is in the 'buyHabitat' function in trading.js
let habitatMaximumSpan = document.getElementById("habitatMaximum");
habitatMaximumSpan.innerText = currentHabitat.capacity;

// buttons for adding and removing fish from habitat
function plus(fishNumber) {
    newSpace = fishInHabitat + fishStats[fishNumber].size; // obj = arr.find(o => o.name === 'string 1')
    if (fishStats[fishNumber].inventoryCount >= 1 && newSpace <= currentHabitat.capacity) { // only if there is fish in the inventory to put in the habitat and it wouldn't exceed the maximum space
        fishStats[fishNumber].inventoryCount = fishStats[fishNumber].inventoryCount - 1; // takes fish out of inventory
        fishStats[fishNumber].habitatCount = fishStats[fishNumber].habitatCount + 1; // puts fish into habitat
        
        updateNumFish(fishNumber) // change fish displayed in Habitat
        updateFishCount(fishNumber); // change fish displayed in Inventory
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
    }
}
function minus(fishNumber) {
    if(fishStats[fishNumber].habitatCount >= 1) { // can't have negative fish
        fishStats[fishNumber].habitatCount = fishStats[fishNumber].habitatCount - 1; // takes fish out of habitat
        fishStats[fishNumber].inventoryCount = fishStats[fishNumber].inventoryCount + 1; // puts fish back into inventory

        updateNumFish(fishNumber) // change fish displayed in Habitat
        updateFishCount(fishNumber) // change fish displayed in Inventory
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
    }
}

// function to calculate how much space the fish in the habitat are taking up
function howBigAreMyFish() { 
    fishInHabitat = 0;
    for (fishNumber in fishStats) {
        fishInHabitat += (fishStats[fishNumber].habitatCount * fishStats[fishNumber].size);
    }

    let fishInHabitatSpan = document.getElementById('fishInHabitat');
    fishInHabitatSpan.innerText = fishInHabitat;
    
    return(fishInHabitat);
}
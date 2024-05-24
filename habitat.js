let currentHabitat = getCurrentHabitat();

// revenue from visitors
let speed = getSpeed();
window.setInterval(function() {
    revenue = 0;
    let fishStats = getFishStats();
    let sandDollars = getSandDollars();

    for (auto of fishStats) {
        revenue = revenue + (auto.habitatCount * auto.revenue);
    }
    sandDollars = sandDollars + revenue;
    updateRevenue(revenue);
    updateSandDollars(sandDollars);
}, 1000/speed)

// labels of fish in Habitat section
// console.log(fishStats);
for (fishNum in fishStats) {
    let fishSpan = document.getElementById("fish" + fishNum + "-habitat");
    fishSpan.innerText = fishStats[fishNum].habitatCount;
    // console.log(fishSpan);
}

// sets original fish space being taken up as 0
let fishInHabitat = 0;
let fishInHabitatSpan = document.getElementById('fishInHabitat');
fishInHabitatSpan.innerText = fishInHabitat;

updateHabitat(currentHabitat);

// Setting fish message
updateMessage();

// buttons for adding and removing fish from habitat
function plus(fishNumber) {
    let fishStats = getFishStats();
    newSpace = fishInHabitat + fishStats[fishNumber].size; // obj = arr.find(o => o.name === 'string 1')
    if (fishStats[fishNumber].inventoryCount >= 1 && newSpace <= currentHabitat.capacity) { // only if there is fish in the inventory to put in the habitat and it wouldn't exceed the maximum space
        fishStats[fishNumber].inventoryCount = fishStats[fishNumber].inventoryCount - 1; // takes fish out of inventory
        fishStats[fishNumber].habitatCount = fishStats[fishNumber].habitatCount + 1; // puts fish into habitat
        
        updateNumFish(fishNumber); // change fish displayed in Habitat
        updateFishCount(fishNumber); // change fish displayed in Inventory
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
        updateMessage(); // updates habitat message
    }
    setFishStats(fishStats);
}
function minus(fishNumber) {
    let fishStats = getFishStats();
    if(fishStats[fishNumber].habitatCount >= 1) { // can't have negative fish
        fishStats[fishNumber].habitatCount = fishStats[fishNumber].habitatCount - 1; // takes fish out of habitat
        fishStats[fishNumber].inventoryCount = fishStats[fishNumber].inventoryCount + 1; // puts fish back into inventory

        updateNumFish(fishNumber) // change fish displayed in Habitat
        updateFishCount(fishNumber) // change fish displayed in Inventory
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
        updateMessage(); // updates habitat message
    }
    setFishStats(fishStats);
}

// function to calculate how much space the fish in the habitat are taking up
function howBigAreMyFish() { 
    let fishStats = getFishStats();
    fishInHabitat = 0;
    for (fishNumber in fishStats) {
        fishInHabitat += (fishStats[fishNumber].habitatCount * fishStats[fishNumber].size);
    }

    let fishInHabitatSpan = document.getElementById('fishInHabitat');
    fishInHabitatSpan.innerText = fishInHabitat;
    
    return(fishInHabitat);
}

// DELETE LATER
makeHabitatPageVisible();
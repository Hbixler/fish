let currentHabitat = getCurrentHabitat();
let revenue = getRevenue();

// Display revenue
updateRevenue(revenue);

// labels of fish in Habitat section
for (fishNum in fishStats) {
    let fishSpan = document.getElementById("fish" + fishNum + "-habitat");
    fishSpan.innerText = fishStats[fishNum].habitatCount;
}

// sets original fish space being taken up as 0
let fishInHabitat = 0;
let fishInHabitatSpan = document.getElementById('fishInHabitat');
fishInHabitatSpan.innerText = fishInHabitat;

updateHabitat(currentHabitat);

// Setting fish message
updateFishMessage();

// buttons for adding and removing fish from habitat
function plus(fishNumber) {
    let fishStats = getFishStats();
    let revenue = getRevenue();

    newSpace = fishInHabitat + fishStats[fishNumber].size; // obj = arr.find(o => o.name === 'string 1')
    if (fishStats[fishNumber].inventoryCount >= 1 && newSpace <= currentHabitat.capacity) { // only if there is fish in the inventory to put in the habitat and it wouldn't exceed the maximum space
        let inventoryCount = fishStats[fishNumber].inventoryCount - 1; // takes fish out of inventory
        let habitatCount = fishStats[fishNumber].habitatCount + 1; // puts fish into habitat
        
        updateNumFish(fishNumber, habitatCount); // change fish displayed in Habitat
        updateFishCount(fishNumber, inventoryCount); // change fish displayed in Inventory
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
        updateRevenue(revenue + fishStats[fishNumber].revenue); // change revenue
        updateFishMessage(); // updates habitat message
    }
    
}
function minus(fishNumber) {
    let fishStats = getFishStats();
    let revenue = getRevenue();

    if(fishStats[fishNumber].habitatCount >= 1) { // can't have negative fish
        let habitatCount = fishStats[fishNumber].habitatCount - 1; // takes fish out of habitat
        let inventoryCount = fishStats[fishNumber].inventoryCount + 1; // puts fish back into inventory

        updateNumFish(fishNumber, habitatCount) // change fish displayed in Habitat
        updateFishCount(fishNumber, inventoryCount) // change fish displayed in Inventory
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
        updateRevenue(revenue - fishStats[fishNumber].revenue) // update revenue
        updateMessage(); // updates habitat message
    }
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
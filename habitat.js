console.log("I am a fish");

// Update functions
function updateHabitat() {
    let fishHabitatSpan = document.getElementById("fishHabitat");
    fishHabitatSpan.innerText = currentHabitat.name;
}
function updateNumFish(fishName) {
    // changes number of fish displayed in Habitat section
    let fishHabitatSpan = document.getElementById(fishName + "Habitat");
    fishHabitatSpan.innerText = habitatFishCount[fishName];
    
    // changes number of fish displayed in Inventory section
    let fishInventorySpan = document.getElementById(fishName);
    fishInventorySpan.innerText = fishCount[fishName];
}

// Income count
let income = 0;
let incomeSpan = document.getElementById('income');
incomeSpan.innerText = income;


// in habitat count
let habitatFishCount = {
    'Goldfish': 0,
    'Swordfish': 0,
    'Shark': 0,
    'Whale': 0,
    'Narwhal': 0
}

// labels of fish
for (habitatFishNum in habitatFishCount) {
    let fishSpan = document.getElementById(habitatFishNum + "Habitat");
    fishSpan.innerText = habitatFishCount[habitatFishNum];
}

// sets original habitat to 'Fish Bowl'
let currentHabitat = fishHabitats[0];
updateHabitat();

// sets original fish space being taken up as 0
let fishInHabitat = 0;
let fishInHabitatSpan = document.getElementById('fishInHabitat');
fishInHabitatSpan.innerText = fishInHabitat;

// habitat maximum span code is in the 'buyHabitat' function in trading.js
let habitatMaximumSpan = document.getElementById("habitatMaximum");
habitatMaximumSpan.innerText = currentHabitat.capacity;

// buttons for adding and removing fish from habitat
function plus(fishName) {
    newSpace = fishInHabitat + fishStats.find(x => x.name === fishName).size; // obj = arr.find(o => o.name === 'string 1')
    if (fishCount[fishName] > 0 && newSpace <= currentHabitat.capacity) { // only if there is fish in the inventory to put in the habitat and it wouldn't exceed the maximum space
        fishCount[fishName] = fishCount[fishName] - 1; // takes fish out of inventory
        habitatFishCount[fishName] = habitatFishCount[fishName] + 1; // puts fish into habitat
        
        updateNumFish(fishName) // change fish displayed in Inventory and Habitat
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
    }
}
function minus(fishName) {
    if(habitatFishCount[fishName] > 0) { // can't have negative fish
        habitatFishCount[fishName] = habitatFishCount[fishName] - 1; // takes fish out of habitat
        fishCount[fishName] = fishCount[fishName] + 1; // puts fish back into inventory

        updateNumFish(fishName) // change fish displayed in Inventory and Habitat
        howBigAreMyFish(); // recalculates and displays how much space fish are taking up
    }
}

// function to calculate how much space the fish in the habitat are taking up
function howBigAreMyFish() { 
    fishInHabitat = 0;
    let x = 0 // this is gross, fix it later
    for (fish in habitatFishCount) {
        fishInHabitat += (habitatFishCount[fish] * fishStats[x].size);
        x++
    }

    let fishInHabitatSpan = document.getElementById('fishInHabitat');
    fishInHabitatSpan.innerText = fishInHabitat;
    
    return(fishInHabitat);
}
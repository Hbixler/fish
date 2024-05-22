// Sand dollar count
function updateSandDollars(sandDollars) {
    let sandDollarsSpan = document.getElementById('sandDollars');
    sandDollarsSpan.innerText = Math.round(sandDollars * 100) / 100;

    if(sandDollars > 10 && !isEquipmentTradingVisible()) { // unlocks equipment section of trading when 10 sanddollars are earned

        makeEquipmentTradingVisible();
        makeRodVisible(1);

        fishingRods[0].unlocked = true;
    }

    if(sandDollars >= 40 && isBaitVisible(0) && !isHabitatVisible()) { // unlocks habitat section of trading when 40 sanddollars are earned and bait is already unlocked
        makeHabitatTradingVisible();
        makeHabitatVisible(0)
    }

    setSandDollars(sandDollars);
}

function updateAvailableRods() {
    for (let x = 1; x < fishingRods.length; x++) {
        let fishingRodSpan = document.getElementById("rod" + x);
        fishingRodSpan.innerText = fishingRods[x].name;
    }
}

// Update functions
function updateBaitCount(baitNum) {
    let baits = getBaits();

    let baitSpan = document.getElementById("bait" + baitNum + "-count");
    baitSpan.innerText = baits[baitNum].count;
}
function updateFishingRod(currentRod) {
    setCurrentRod(currentRod);
    let fishingRodSpan = document.getElementById("fishingRod");
    fishingRodSpan.innerText = currentRod.name;
}
function updateFishCount(fishNumber, numFish) {
    let fishStats = getFishStats();
    let baits = getBaits();

    fishStats[fishNumber].inventoryCount = numFish;
    setFishStats(fishStats);

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
    
    setBaits(baits);
}

// Update functions
function updateHabitat() {
    let fishHabitatSpan = document.getElementById("fishHabitat");
    let currentHabitat = getCurrentHabitat();
    fishHabitatSpan.innerText = currentHabitat.name;

    // in case message relies on habitat name
    updateMessage();
}

function updateNumFish(fishNum) {
    // changes number of fish displayed in Habitat section
    let fishHabitatSpan = document.getElementById("fish" + fishNum + "-habitat");
    let fishStats = getFishStats();
    fishHabitatSpan.innerText = fishStats[fishNum].habitatCount;
}

// fish labels in inventory and habitat
let fishStats = getFishStats();
for (let x = 0; x < fishStats.length; x++) {
    let fishStatsSpan = document.getElementsByClassName("fish" + x);
    for (let y = 0; y < fishStatsSpan.length; y++) {
        fishStatsSpan[y].innerText = fishStats[x].name;
    }
}

let revenue = 0;
function updateRevenue() {
    let revenueSpan = document.getElementById('revenue');
    revenueSpan.innerText = Math.round(revenue * 100) / 100
}

function updateMessage() {
    let newMessage = "";
    if (fishInHabitat == 0) {
        newMessage = "Where are all the fish :(";
    }
    else if (fishInHabitat < 10) {
        newMessage = "Your fish are a little lonely...";
    }
    else if (fishInHabitat < 50) {
        newMessage = "Your fish are happily swimming in their " + currentHabitat.name + "!";
    }
    else if (fishInHabitat < 100) {
        newMessage = "Lots of gossip going on in the fish world today.";
    }
    else if (fishInHabitat < 125) {
        newMessage = "Your fish have read Kant and now will never be the same."
    }
    else if (fishInHabitat < 150) {
        newMessage = "¡Tus peces han aprendido español!";
    }
    else if (fishInHabitat < 200) {
        newMessage = "Les poissons parlent français et espagnol!";
    }
    else {
        newMessage = "The fish have launched a revolution!"
    }

    let messageSpan = document.getElementById("fish-message");
    messageSpan.innerText = newMessage;
}
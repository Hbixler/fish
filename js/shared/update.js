// update spans
function updateSpan(spanId, text) {
    let span = document.getElementById(spanId);
    if(span) {
        span.innerText = text;
    }
}

// Sand dollar count
function updateSandDollars(sandDollars) {
    let habitats = get("fishHabitats");
    let storage = get("currentStorage");
    let fishStats = get('fishStats');

    if (sandDollars > storage.capacities["Sand Dollars"]) {
        sandDollars = storage.capacities["Sand Dollars"];
    }
    
    set('sandDollars', sandDollars);
    updateBuyButtons(sandDollars);
    updateSailButton(sandDollars);

    for (let x = 0; x < fishStats.length; x++) {
        updateSellButtons(x, fishStats[x].inventoryCount);
    }

    let sandDollarsSpan = (Math.round(sandDollars * 100) / 100).toLocaleString();
    updateSpan('sandDollars', sandDollarsSpan);

    if (sandDollars > 10 && !isSectionVisible("equipment-trading")) { // unlocks equipment trading at 10 SDs
        makeSectionVisible("equipment-trading");
        makeListElementVisible("equipment-trading", 1);
    }

    if (sandDollars >= habitats[1].cost - 5 && isListElementVisible("supplies", 0) && !isSectionVisible("habitat-trading")) { // unlocks habitat trading when 5 less SDs than cost and bait is already unlocked
        makeSectionVisible("habitat-trading");
        makeListElementVisible("habitat-trading", 1);
    }
}

// baits
function updateBaits(baits) {
    set('baits', baits);
}

// bait count
function updateBaitCount(baitNum, numBaits) {
    let baits = get('baits');
    baits[baitNum].count = numBaits;
    set('baits', baits)

    updateSpan("bait" + baitNum + "-count", baits[baitNum].count);
    updateSpan("bait-space", howBigIsMyBait());
}

// current storage
function updateStorage(currentStorage) {
    let fishStats = get('fishStats');

    set('currentStorage', currentStorage);
    updateSpan("storage", currentStorage.name);

    // replacing total capacity values in shared info divs
    updateSpan("sand-dollar-capacity", currentStorage.capacities["Sand Dollars"]);
    updateSpan("fish-capacity", currentStorage.capacities["Fish"]);
    updateSpan("bait-capacity", currentStorage.capacities["Baits"]);

    for (let x = 0; x < fishStats.length; x++) {
        updateSellButtons(x, fishStats[x].inventoryCount);
    }
}

// current fishing rod
function updateFishingRod(currentRod) {
    set('currentRod', currentRod);
    updateSpan("fishingRod", currentRod.name);
}

// fish count
function updateFishCount(fishNumber, numFish) {
    let fishStats = get('fishStats');
    let baits = get('baits');

    fishStats[fishNumber].inventoryCount = numFish;
    set('fishStats', fishStats);

    updateSellButtons(fishNumber, numFish);

    // if in vast unknown
    let narwhalIndex = fishStats.findIndex(fish => fish.name == 'Narwhal');
    updateYesButton(fishStats[narwhalIndex].inventoryCount);

    fishCountSpan = Math.floor(fishStats[fishNumber].inventoryCount);
    updateSpan("fish" + fishNumber + "-count", fishCountSpan);

    if (fishStats[0].inventoryCount >= 5 && !isSectionVisible("fish-trading")) {
        makeSectionVisible("fish-trading");
    }

    if (fishStats[fishNumber].inventoryCount >= 1 && !isListElementVisible("fish-list", fishNumber)) {
        if (fishNumber === 0) {
            // Fishing for goldfish for first time, adding boxes and borders
            makeSectionVisible("fish-list");
            makeSectionVisible("fish-reference-space");
            makeNavBarLinkVisible("Fish Island");
        }

        // makes next bait visible if it should be
        if(fishNumber < fishStats.length - 1) {
            let currentRod = get('currentRod');
            if (!isListElementVisible("bait-trading", fishNumber) && currentRod.rates[fishStats[fishNumber + 1].name] > 0) {
                makeListElementVisible("bait-trading", fishNumber);
                makeListElementVisible("bait-reference-space", fishNumber);
            }
        }
        
        // Add fish to inventory options
        makeListElementVisible("fish-list", fishNumber);
        makeListElementVisible("fish-habitat", fishNumber);
        makeListElementVisible("fish-reference-space", fishNumber);

        if (isNavBarLinkVisible("Habitat")) {
            // If habitat unlocked, make fish option in habitat
            makeListElementVisible("fish-habitat", fishNumber);
        }

        if (fishNumber >= 1) {
            // Add fish to trading option
            makeListElementVisible("fish-trading", fishNumber);
            makeListElementVisible("fish-reference-space", fishNumber);
        }
        
        // shows vehicles section when narwhal is unlocked if the last habitat is also unlocked
        let fishHabitats = get("fishHabitats");
        let currentHabitat = get("currentHabitat");
        if(fishNumber === fishStats.length - 1 && currentHabitat.name === fishHabitats[fishHabitats.length - 1].name) {
            makeSectionVisible("vehicle-trading");
            makeListElementVisible("vehicle-trading", 1);
            
            let visibility = getVisibility(); // makes new button permanently visible
            visibility['vehicle-trading'].list.button.currentButton = 1;
            setVisibility(visibility);
        }
    } 
    
    if (fishStats[0].inventoryCount === 5 && !isSectionVisible("trading")) { // at 5 goldfish
        makeSectionVisible("trading");
        makeListElementVisible("fish-trading", 0);
        makeListElementVisible("fish-reference-space", 0);
    }
    
    set('baits', baits);
    updateSpan("fish-space", howBigAreMyFish());
}

// update coloring of fish counts
function updateHasBait(fishIndex, hasBait) {
    let fishProgressSpan = document.getElementById("fish" + fishIndex + "-progress");
    fishProgressSpan.style.color = hasBait ? 'white' : 'red';
}

// Activates or deactivates buttons based on how many fish you have
function updateSellButtons(fishIndex, inventoryCount) {
    let sellButtons = document.getElementsByClassName("sellFish" + fishIndex)
    let sandDollars = get('sandDollars');
    let fishStats = get('fishStats');
    let sandDollarStorage = get('currentStorage').capacities["Sand Dollars"];

    for (button of sellButtons) {
        let netGain = button.value * fishStats[fishIndex].cost;
        button.disabled = button.value > inventoryCount || netGain + sandDollars > sandDollarStorage;
    }
}

// Goes through all buttons with the class buyButton and enables/diables based on sand dollars
function updateBuyButtons(sandDollars) {
    let currentBaitSize = howBigIsMyBait();
    let buyButtons = document.getElementsByClassName("buyButton");
    let maxBaits = get('currentStorage').capacities["Baits"];
    for (button of buyButtons) {
        button.disabled = (sandDollars < button.value) || (button.hasAttribute('space') ? parseInt(button.getAttribute('space')) + currentBaitSize > maxBaits : false);
    }
}

// Update functions
function updateHabitat(currentHabitat) {
    set('currentHabitat', currentHabitat)

    updateSpan("fishHabitat", currentHabitat.name);
    updateSpan("habitatMaximum", currentHabitat.capacity);
    updateFishMessage();
}

function updateVehicle(currentVehicleNum) {
    let vehicles = get('vehicles');
    currentVehicle = vehicles[currentVehicleNum];

    set('currentVehicle', currentVehicle);
    updateSpan("vehicle", currentVehicle.name);
}

function updateNumFish(fishNum, numFish) {
    // changes number of fish displayed in Habitat section
    let fishStats = get('fishStats');

    fishStats[fishNum].habitatCount = numFish;
    set('fishStats', fishStats);

    fishHabitatSpan = ": " + fishStats[fishNum].habitatCount; 
    updateSpan("fish-" + fishNum + "-count", fishHabitatSpan);
}

function updateRevenue(revenue) {
    set('revenue', revenue);

    revenueSpan = Math.round(revenue * 100) / 100
    updateSpan("revenue", revenueSpan);
}

function updateFishMessage() {
    fishMessages = [
        [200, "Les poissons parlent français et espagnol!"],
        [150, "¡Tus peces han aprendido español!"],
        [125, "Your fish have read Kant and now will never be the same."], 
        [100, "Lots of gossip going on in the fish world today."], 
        [50, "Your fish are happily swimming in their " + currentHabitat.name + "!"], 
        [25, "Your fish are a family."],
        [10, "Your fish are a little lonely..."], 
        [0, "Where are all the fish :("], 
    ];

    for (messages of fishMessages) {
        if(howBigAreMyHabitatFish() >= messages[0]) {
            updateSpan("fish-message", messages[1]);
            break; 
        } else {
            updateSpan("fish-message", "The fish have launched a revolution!");
        }
    }
}

// VAST UNKNOWN
function updateYesButton(numNarwhals) {
    let yesButton = document.getElementById('frog-yes-button');
    if (yesButton) {
        yesButton.disabled = numNarwhals < 10;
    }
}

function updateSailButton(sandDollars) {
    let sailButton = document.getElementById('buy-sail-button');
    if (sailButton) {
        sailButton.disabled = sandDollars < 500;
    }
}

// function to calculate how much space the bait in the inventory are taking up
function howBigIsMyBait() { 
    let baits = get('baits');
    baitsCount = 0;
    for (baitNum in baits) {
        baitsCount += (baits[baitNum].count * baits[baitNum].size);
    }
    return(baitsCount);
}

// function to calculate how much space the fish in the habitat are taking up
function howBigAreMyHabitatFish() { 
    let fishStats = get('fishStats');
    fishInHabitat = 0;
    for (fishNumber in fishStats) {
        fishInHabitat += (fishStats[fishNumber].habitatCount * fishStats[fishNumber].size);
    }

    updateSpan("fishInHabitat", fishInHabitat);
    
    return(fishInHabitat);
}
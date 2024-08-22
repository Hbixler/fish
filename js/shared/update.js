// Sand dollar count
function updateSandDollars(sandDollars) {
    set('sandDollars', sandDollars);
    updateBuyButtons(sandDollars);

    let sandDollarsSpan = document.getElementById('sandDollars');
    if (sandDollarsSpan) {
        sandDollarsSpan.innerText = (Math.round(sandDollars * 100) / 100).toLocaleString();
    }

    if(sandDollars > 10 && !isSectionVisible("equipment-trading")) { // unlocks equipment trading at 10 SDs
        makeSectionVisible("equipment-trading");
        makeListElementVisible("equipment-trading", 1);
    }

    if(sandDollars >= 30 && isListElementVisible("supplies", 0) && !isSectionVisible("habitat-trading")) { // unlocks habitat trading at 40 SDs and bait is already unlocked
        makeSectionVisible("habitat-trading");
        makeListElementVisible("habitat-trading", 0);
    }
}

// baits
function updateBaits(baits) {
    console.log("This is dumb...");
    set('baits', baits);
}

// bait count
function updateBaitCount(baitNum, numBaits) {
    let baits = get('baits');
    baits[baitNum].count = numBaits;
    set('baits', baits)

    let baitSpan = document.getElementById("bait" + baitNum + "-count");
    if(baitSpan) {
        baitSpan.innerText = baits[baitNum].count;
    }
}

// current fishing rod
function updateFishingRod(currentRod) {
    set('currentRod', currentRod);
    let fishingRodSpan = document.getElementById("fishingRod");
    fishingRodSpan.innerText = currentRod.name;
}

// fish count
function updateFishCount(fishNumber, numFish) {
    let fishStats = get('fishStats');
    let baits = get('baits');

    fishStats[fishNumber].inventoryCount = numFish;
    set('fishStats', fishStats);

    updateSellButtons(fishNumber, numFish);

    let fishCountSpan = document.getElementById("fish" + fishNumber + "-count");
    if (fishCountSpan) {
        fishCountSpan.innerText = Math.floor(fishStats[fishNumber].inventoryCount);
    }

    if (fishStats[0].inventoryCount >= 5 && !isSectionVisible("fish-trading")) {
        makeSectionVisible("fish-trading");
    }

    if (fishStats[fishNumber].inventoryCount >= 1 && !isListElementVisible("fish-list", fishNumber)) {
        if (fishNumber === 0) {
            // Fishing for goldfish for first time, adding boxes and borders
            makeSectionVisible("fish-list");
            makeNavBarLinkVisible("Fish Island");
        }

        // Add fish to inventory options
        makeListElementVisible("fish-list", fishNumber);
        makeListElementVisible("fish-habitat", fishNumber);

        if (isNavBarLinkVisible("Habitat")) {
            // If habitat unlocked, make fish option in habitat
            makeListElementVisible("fish-habitat", fishNumber);
        }

        if (fishNumber >= 1) {
            // Add fish to trading option
            makeListElementVisible("fish-trading", fishNumber);
        }
        
        // shows vehicles section when narwhal is unlocked
        if(fishNumber === fishStats.length - 1) {
            makeSectionVisible("vehicle-trading");
            makeListElementVisible("vehicle-trading", 1);
        }
    } 
    
    if (fishStats[0].inventoryCount === 5 && !isSectionVisible("trading")) { // at 5 goldfish
        makeSectionVisible("trading");
        makeListElementVisible("fish-trading", 0);
    }
    
    set('baits', baits);
}

// Update fish progress on navbar
function updateFishProgress(fishIndex, fishProgress) {

    let fishProgressSpan = document.getElementById("fish" + fishIndex + "-progress")
    let newProgressSpan = "";

    for (let x = 1; x <= 4; x++) {
        if (fishProgress > 0.2 * x) {
            newProgressSpan += "*";
        }
        else {
            newProgressSpan += "-";
        }
    }
    fishProgressSpan.innerText = newProgressSpan;
}

// update fishing rates
function updateFishRate(fishIndex, fishRate) {
    let fishProgressSpan = document.getElementById("fish" + fishIndex + "-progress");
    fishProgressSpan.innerText = fishRate + "/s";
}

// update colouring of fish counts
function updateHasBait(fishIndex, hasBait) {
    let fishProgressSpan = document.getElementById("fish" + fishIndex + "-progress");
    fishProgressSpan.style.color = hasBait ? 'white' : 'red';
}

// Activates or deactivates buttons based on how many fish you have
function updateSellButtons(fishIndex, inventoryCount) {
    let sellButtons = document.getElementsByClassName("sellFish" + fishIndex)

    for (button of sellButtons) {
        button.disabled = button.value > inventoryCount;
    }
}

// Goes through all buttons with the class buyButton and enables/diables based on sand dollars
function updateBuyButtons(sandDollars) {
    let buyButtons = document.getElementsByClassName("buyButton");

    for (button of buyButtons) {
        button.disabled = sandDollars < button.value;
    }
}

// Update functions
function updateHabitat(currentHabitat) {
    set('currentHabitat', currentHabitat)

    let fishHabitatSpan = document.getElementById("fishHabitat");

    if (fishHabitatSpan) {
        fishHabitatSpan.innerText = currentHabitat.name;

        // changing habitat maximum
        let habitatMaximumSpan = document.getElementById("habitatMaximum");
        habitatMaximumSpan.innerText = currentHabitat.capacity;

        // in case message relies on habitat name
        updateFishMessage();
    }
}

function updateVehicle(currentVehicleNum) {
    let vehicles = get('vehicles');
    currentVehicle = vehicles[currentVehicleNum];

    set('currentVehicle', currentVehicle);

    let vehicleSpan = document.getElementById('vehicle');

    if (vehicleSpan) {
        vehicleSpan.innerText = currentVehicle.name;
    }
}

function updateNumFish(fishNum, numFish) {
    // changes number of fish displayed in Habitat section
    let fishStats = get('fishStats');

    fishStats[fishNum].habitatCount = numFish;
    set('fishStats', fishStats);

    let fishHabitatSpan = document.getElementById("fish" + fishNum + "-habitat");
    fishHabitatSpan.innerText = fishStats[fishNum].name + ": " + fishStats[fishNum].habitatCount; 
}

function updateRevenue(revenue) {
    set('revenue', revenue);

    let revenueSpan = document.getElementById('revenue');
    revenueSpan.innerText = Math.round(revenue * 100) / 100
}

function updateFishMessage() {
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

// VAST UNKNOWN

function updateVastUnknownMessage(newMsg) {
    let messageSpan = document.getElementById('vast-unknown-message');
    messageSpan.innerText = newMsg;
}

function updateFrogMessage(newMsg) {
    let messageSpan = document.getElementById('frog-message');
    messageSpan.innerText = newMsg;
}

function updateDirectionsMessage(newMsg) {
    let messageSpan = document.getElementById('directions-message');
    messageSpan.innerText = newMsg;
}
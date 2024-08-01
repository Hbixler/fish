// Sand dollar count
function updateSandDollars(sandDollars) {
    setSandDollars(sandDollars);

    updateBuyButtons(sandDollars);

    let sandDollarsSpan = document.getElementById('sandDollars');
    

    if (sandDollarsSpan) {
        sandDollarsSpan.innerText = (Math.round(sandDollars * 100) / 100).toLocaleString();
    }

    if(sandDollars > 10 && !isSectionVisible("equipment-trading")) { // unlocks equipment section of trading when 10 sanddollars are earned

        makeSectionVisible("equipment-trading");
        makeListElementVisible("equipment-trading", 1);

        if (isSectionVisible("equipment-trading")) {
            fishingRods[0].unlocked = true;
        }
    }

    if(sandDollars >= 30 && isListElementVisible("supplies", 0)) { // unlocks habitat section of trading when 40 sanddollars are earned and bait is already unlocked
        makeSectionVisible("habitat-trading");
        makeListElementVisible("habitat-trading", 0);
    }
}

function updateBaits(baits) {
    setBaits(baits);
}

// Update functions
function updateBaitCount(baitNum, numBaits) {
    let baits = getBaits();
    baits[baitNum].count = numBaits;
    setBaits(baits)

    let baitSpan = document.getElementById("bait" + baitNum + "-count");
    if(baitSpan) {
        baitSpan.innerText = baits[baitNum].count;
    }
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

        if (fishNumber === 2 && !fishStats[2].unlocked) {
            makeListElementVisible("bait-trading", 2);
        }

        // Unlock fish
        fishStats[fishNumber].unlocked = true;

        // Add fish to inventory options
        makeListElementVisible("fish-list", fishNumber);

        if (isNavBarLinkVisible("Habitat")) {
            // If habitat unlocked, make fish option in habitat
            makeHabitatFishVisible(fishNumber);
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

    console.log("Fish count is 5: " + fishStats[0].inventoryCount);
    console.log("Trading section is not visible: " + !isSectionVisible("trading"));
    if (fishStats[0].inventoryCount === 5 && !isSectionVisible("trading")) { // at 5 goldfish
        console.log("SELLING FISH SHOULD BE POSSIBLE");
        makeSectionVisible("trading");
        makeListElementVisible("fish-trading", 0);
    }
    
    setBaits(baits);
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

    console.log(fishProgress);
    console.log(newProgressSpan);
    fishProgressSpan.innerText = newProgressSpan;
}

function updateFishRate(fishIndex, fishRate) {
    let fishProgressSpan = document.getElementById("fish" + fishIndex + "-progress");
    fishProgressSpan.innerText = fishRate + "/s";

    console.log(fishProgressSpan);
}

function updateHasBait(fishIndex, hasBait) {
    let fishProgressSpan = document.getElementById("fish" + fishIndex + "-progress");
    fishProgressSpan.style.color = hasBait ? 'white' : 'red';
}

// Activates or deactivates buttons based on how many fish you have
function updateSellButtons(fishIndex, inventoryCount) {
    // I don't love the idea of copying and pasting bullk options like this so potentially optimize this to not do that

    let bulkOptions = [1, 5, 10, 50];

    for (option of bulkOptions) {
        let sellButton = document.getElementById("sellFish" + fishIndex + "x" + option);
        if (sellButton) {
            sellButton.disabled = option > inventoryCount;
        }
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
    setCurrentHabitat(currentHabitat)

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
    let vehicles = getVehicles();
    currentVehicle = vehicles[currentVehicleNum];

    setCurrentVehicle(currentVehicle);

    let vehicleSpan = document.getElementById('vehicle');

    if (vehicleSpan) {
        vehicleSpan.innerText = currentVehicle.name;
    }
}

function updateNumFish(fishNum, numFish) {
    // changes number of fish displayed in Habitat section
    let fishStats = getFishStats();

    fishStats[fishNum].habitatCount = numFish;
    setFishStats(fishStats);

    let fishHabitatSpan = document.getElementById("fish" + fishNum + "-habitat");
    fishHabitatSpan.innerText = fishStats[fishNum].name + ": " + fishStats[fishNum].habitatCount; 
}

// fish labels in inventory and habitat
let fishStats = getFishStats();
for (let x = 0; x < fishStats.length; x++) {
    let fishStatsSpan = document.getElementsByClassName("fish" + x);
    for (let y = 0; y < fishStatsSpan.length; y++) {
        fishStatsSpan[y].innerText = fishStats[x].name;
    }
}

function updateRevenue(revenue) {
    setRevenue(revenue);

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
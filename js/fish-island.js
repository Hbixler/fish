// GETTING AND SETTING INFO
let fishes = getFishStats();
let baits = getBaits();
let fishingRods = getFishingRods();
let fishHabitats = getFishHabitats();
let vehicles = getVehicles();
let sandDollars = getSandDollars();
let bulkOptions = [1, 5, 10, 50, 100];

// HTML GENERATION

// Supplies/Baits
for(x = 0; x < baits.length; x++) {
    let bait = document.createElement('p');
    bait.style.visibility = 'hidden';
    bait.id = "bait" + x + "-div";
    bait.innerText = baits[x].name + ": ";

    let baitCountSpan = document.createElement('span');
    baitCountSpan.innerText = baits[x].count;
    baitCountSpan.id = "bait" + x + "-count";

    document.getElementById('supplies-div').appendChild(bait).appendChild(baitCountSpan);
}  

// Sell fish
for (let x = 0; x < fishes.length; x++) {
    let fishTradingDiv = document.createElement('div');
    fishTradingDiv.style.visibility = 'hidden';
    fishTradingDiv.id = "fishTrading" + x + "-div";
    fishTradingDiv.className = "row";

    let fishListing = document.createElement('p');
    fishListing.innerText = fishes[x].name + " (" + fishes[x].cost + " SD)";

    document.getElementById('fish-trading-div').appendChild(fishTradingDiv).appendChild(fishListing);

    for (let y = 0; y < bulkOptions.length; y++) {
        let sellButton = document.createElement('button');
        if (y === 0) {sellButton.innerText = "Sell 1" } else { sellButton.innerText = bulkOptions[y] }
        sellButton.setAttribute("onclick", "sellFish(" + x + ","  + bulkOptions[y] + ")");
        sellButton.value = bulkOptions[y];
        sellButton.classList = ["sellFish" + x]

        document.getElementById('fishTrading' + x + '-div').appendChild(sellButton);
    }
}

// Buy baits
for (let x = 0; x < baits.length; x++) {
    let baitTradingDiv = document.createElement('div');
    baitTradingDiv.style.visibility = 'hidden';
    baitTradingDiv.id = "baitTrading" + x + "-div";
    baitTradingDiv.className = "row";

    let baitListing = document.createElement('p');
    baitListing.innerText = baits[x].name;
    baitListing.classList.add('tooltipParent');

    let applicableFish = fishes.findIndex(fish => fish.bait === baits[x].name);
    baitListing.setAttribute('data-tooltip', "Use " + baits[x].name + " to catch a " + fishes[applicableFish].name + "!");
    baitListing.setAttribute('data-tooltip-position', 'left');

    let baitPrice = document.createElement('p');
    baitPrice.innerText = " (" + baits[x].cost + " SD)";

    document.getElementById('bait-trading-div').appendChild(baitTradingDiv).appendChild(baitListing);

    for (let y = 0; y < bulkOptions.length; y++) {
        let buyButton = document.createElement('button');
        if (y === 0) {buyButton.innerText = "Buy 1" } else { buyButton.innerText = bulkOptions[y] }
        buyButton.setAttribute("onclick", "buyBait(" + x + ","  + bulkOptions[y] + ")");
        buyButton.id = "buyBait" + x;
        buyButton.classList = ["buyButton"];
        buyButton.value = baits[x].cost * bulkOptions[y];

        document.getElementById('baitTrading' + x + '-div').appendChild(buyButton);
    }
}

// Buy equipment
for (let x = 1; x < fishingRods.length; x++) {
    let equipmentTradingDiv = document.createElement('div');
    equipmentTradingDiv.style.visibility = 'hidden';
    equipmentTradingDiv.id = "fishingRodTrading" + x + "-div";
    equipmentTradingDiv.className = "row";

    let equipmentListing = document.createElement('p');
    equipmentListing.innerText = fishingRods[x].name + " (" + fishingRods[x].cost + " SD)";

    let buyButton = document.createElement('button');
    buyButton.setAttribute("onclick", "buyRod(" + x + ")");
    buyButton.innerText = "Buy";
    buyButton.style.visibility = "hidden";
    buyButton.id = "buyRod" + x;
    buyButton.classList = ["buyButton"];
    buyButton.value = fishingRods[x].cost;

    document.getElementById('equipment-trading-div').appendChild(equipmentTradingDiv).appendChild(equipmentListing).appendChild(buyButton);
}

// Buy habitat
for (let x = 0; x < fishHabitats.length; x++) {
    let habitatTradingDiv = document.createElement('div');
    habitatTradingDiv.style.visibility = 'hidden';
    habitatTradingDiv.id = "habitatTrading" + x + "-div";
    habitatTradingDiv.className = "row";

    let habitatListing = document.createElement('p');
    habitatListing.innerText = fishHabitats[x].name + " (" + fishHabitats[x].cost + " SD)";

    let buyButton = document.createElement('button');
    buyButton.setAttribute("onclick", "buyHabitat(" + x + ")");
    buyButton.innerText = "Buy";
    buyButton.style.visibility = "hidden";
    buyButton.id = "buyHabitat" + x;
    buyButton.classList = ["buyButton"];
    buyButton.value = fishHabitats[x].cost;

    document.getElementById('habitat-trading-div').appendChild(habitatTradingDiv).appendChild(habitatListing).appendChild(buyButton);
}

// Buy vehicles
for (let x = 1; x < 2; x++) {
    let vehiclesTradingDiv = document.createElement('div');
    vehiclesTradingDiv.style.visibility = 'hidden';
    vehiclesTradingDiv.id = "vehicleTrading" + x + "-div";
    vehiclesTradingDiv.className = "row";

    let vehicleListing = document.createElement('p');
    vehicleListing.innerText = vehicles[x].name + " (" + vehicles[x].cost + " SD)";

    let buyButton = document.createElement('button');
    buyButton.setAttribute("onclick", "buyVehicle(" + x + ")");
    buyButton.innerText = "Buy";
    buyButton.style.visibility = "hidden";
    buyButton.id = "buyVehicle" + x;
    buyButton.classList = ["buyButton"];
    buyButton.value = vehicles[x].cost;

    document.getElementById('vehicle-trading-div').appendChild(vehiclesTradingDiv).appendChild(vehicleListing).appendChild(buyButton);
}

// FUNCTIONS

// go fishing button
function goFishing() {
    let fishStats = getFishStats();
    updateFishCount(0, fishStats[0].inventoryCount + 1);
}

// TRADING
// selling fish
function sellFish(fishType, numToSell) {
    let fishStats = getFishStats();
    let fishStat = fishStats[fishType];
    if (fishStat.inventoryCount >= numToSell) {
        updateFishCount(fishType, fishStat.inventoryCount - numToSell); // Update fish value accordingly
        updateSandDollars(getSandDollars() + (fishStat.cost * numToSell)); // Update sand dollar count
    }
}

// buying bait
function buyBait(baitNumber, numToBuy) {
    let baits = getBaits();
    let sandDollars = getSandDollars();
    let fishStats = getFishStats();
    baitValue = baits[baitNumber].cost * numToBuy; // how much the bait would cost

    if (baitValue <= sandDollars) { // if they have enough money to buy bait
        if (baits[baitNumber].count === 0) { // If we previously had no bait, we make the rate white again
            let fishIndex = fishStats.findIndex(fishStat => fishStat.bait == baits[baitNumber].name);
            updateHasBait(fishIndex, true);
        }
       
        updateBaitCount(baitNumber, baits[baitNumber].count + numToBuy); // Update bait
        updateSandDollars(sandDollars - baitValue); // Update sand dollars
    
        if (!isSectionVisible('inventory') || !isSectionVisible('supplies')) { // Unlock inventory and supplies if necessary
            makeSectionVisible('inventory');
            makeSectionVisible('supplies');
        }

        if(!isListElementVisible("supplies", baitNumber)) { 
            makeListElementVisible("supplies", baitNumber); // make bait visible in supplies
        }
    }
}

// buying rods
function buyRod(fishingRodNumber) {
    let sandDollars = getSandDollars();
    let fishStats = getFishStats();
    rodValue = fishingRods[fishingRodNumber].cost;

    if (rodValue <= sandDollars) {
        currentRod = fishingRods[fishingRodNumber];
        updateFishingRod(currentRod); // Update rod

        sandDollars -= rodValue; // Update sand dollars
        updateSandDollars(sandDollars);

        for (let x = 0; x < fishStats.length; x++) { // Update fishing rates in shared info
            updateFishRate(x, currentRod.rates[fishStats[x].name]);
        }

        if (fishingRodNumber === 1) { // makes baits visible
            makeSectionVisible("bait-trading");
            makeListElementVisible("bait-trading", 0);
        } else {
            makeListElementVisible("bait-trading", fishingRodNumber - 1);
        }

        if (fishingRodNumber != fishingRods.length - 1) { // make next rod visible
            makeListElementVisible("equipment-trading", fishingRodNumber + 1);
        } 

        // make current rod buy button invisible
        fishingRodBuyButton = document.getElementById("buyRod" + fishingRodNumber);
        fishingRodBuyButton.style.visibility = 'hidden';
    }
}

// buying habitats
function buyHabitat(fishHabitatNumber) {
    let fishHabitats = getFishHabitats();
    let sandDollars = getSandDollars();

    habitatValue = fishHabitats[fishHabitatNumber].cost;
    if (habitatValue <= sandDollars) {
        currentHabitat = fishHabitats[fishHabitatNumber];
        updateHabitat(currentHabitat); // Update habitat
        
        sandDollars -= habitatValue;
        updateSandDollars(sandDollars); // Update sand dollars

        if (fishHabitatNumber === 0) { // buying a fish bowl unlocks habitat page
            makeNavBarLinkVisible("Habitat");
        }

        if (fishHabitatNumber != fishHabitats.length - 1) { // make next habitat visible
            makeListElementVisible("habitat-trading", fishHabitatNumber + 1);
        }

        // make current habitat buy button invisible
        habitatBuyButton = document.getElementById("buyHabitat" + fishHabitatNumber);
        habitatBuyButton.style.visibility = "hidden";
    }
} 

// buying vehicles
function buyVehicle(vehicleNum) {
    let vehicles = getVehicles();
    let sandDollars = getSandDollars();

    if (vehicles[vehicleNum].cost <= sandDollars) {
        sandDollars -= vehicles[vehicleNum].cost;
        updateSandDollars(sandDollars);
        updateVehicle(1);
        makeNavBarLinkVisible("Vast Unknown");
    }

    vehicleBuyButton = document.getElementById("buyVehicle" + vehicleNum);
    if (vehicleBuyButton) {
        vehicleBuyButton.style.visibility = "hidden";
    }
}

// Visibility toggle -> in visibility.js
visibilityToggle()
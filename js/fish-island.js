// GETTING AND SETTING INFO
let fishes = getFishStats();
let baits = getBaits();
let fishingRods = getFishingRods();
let fishHabitats = getFishHabitats();
let vehicles = getVehicles();
let sandDollars = getSandDollars();
bulkOptions = [1, 5, 10, 50];

// HTML GENERATION

// Supplies
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

    document.getElementById('sell-fish').appendChild(fishTradingDiv).appendChild(fishListing);

    for (let y = 0; y < bulkOptions.length; y++) {
        let sellButton = document.createElement('button');
        if (y === 0) {sellButton.innerText = "Sell 1" } else { sellButton.innerText = bulkOptions[y] }
        sellButton.setAttribute("onclick", "sellFish(" + x + ","  + bulkOptions[y] + ")");
        sellButton.id = "sellFish" + x;

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
    baitListing.innerText = baits[x].name + " (" + baits[x].cost + " SD)";

    document.getElementById('bait-div').appendChild(baitTradingDiv).appendChild(baitListing);

    for (let y = 0; y < bulkOptions.length; y++) {
        let buyButton = document.createElement('button');
        if (y === 0) {buyButton.innerText = "Buy 1" } else { buyButton.innerText = bulkOptions[y] }
        buyButton.setAttribute("onclick", "buyBait(" + x + ","  + bulkOptions[y] + ")");
        buyButton.id = "buyBait" + x;

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

    document.getElementById('equipment-div').appendChild(equipmentTradingDiv).appendChild(equipmentListing).appendChild(buyButton);
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

    document.getElementById('habitat-trading-div').appendChild(habitatTradingDiv).appendChild(habitatListing).appendChild(buyButton);
}

// Buy vehicles
for (let x = 1; x < 2; x++) {
    let vehiclesTradingDiv = document.createElement('div');
    vehiclesTradingDiv.className = "row";

    let vehicleListing = document.createElement('p');
    vehicleListing.innerText = vehicles[x].name + " (" + vehicles[x].cost + " SD)";

    let buyButton = document.createElement('button');
    buyButton.setAttribute("onclick", "buyVehicle(" + x + ")");
    buyButton.innerText = "Buy";
    buyButton.style.visibility = "hidden";
    buyButton.id = "buyVehicle" + x;

    document.getElementById('vehicles-div').appendChild(vehiclesTradingDiv).appendChild(vehicleListing).appendChild(buyButton);
}

// FUNCTIONS

// go fishing button
function goFishing() {
    let fishStats = getFishStats();
    updateFishCount(0, fishStats[0].inventoryCount + 1);
}

// TRADING
function sellFish(fishType, numToSell) {
    let fishStats = getFishStats();
    let fishStat = fishStats[fishType];
    if (fishStat.inventoryCount >= numToSell) {
        // Update fish value accordingly
        fishValue = fishStat.cost * numToSell;
        fishStat.inventoryCount = fishStat.inventoryCount - numToSell;
        updateFishCount(fishType, fishStat.inventoryCount);

        // Update sand dollar count
        sandDollars = getSandDollars() + fishValue;
        updateSandDollars(sandDollars);
    }
    
}

// Buying bait
function buyBait(baitNumber, numToBuy) {
    let baits = getBaits();
    let sandDollars = getSandDollars();
    
    baitName = baits[baitNumber].name;
    baitValue = baits[baitNumber].cost * numToBuy;
    if (baitValue <= sandDollars) {
        // Update bait
        baits[baitNumber].count += numToBuy;
        updateBaitCount(baitNumber, baits[baitNumber].count);

        // Update sand dollars
        sandDollars -= baitValue;
        updateSandDollars(sandDollars);
    
        if(!isBaitVisible(baitNumber)) {
            if (baitNumber === 0) {
                makeSectionVisible('inventory');
                makeSectionVisible('supplies');
            }
            if (baitNumber === 2 && !baitNumber[2].unlocked) {
                makeBaitInTradingVisible(2);
            }
    
            // Unlock fish
            baits[baitNumber].unlocked = true;
            makeBaitVisible(baitNumber);

            updateBaits(baits);
        }

    }    
}

function buyRod(fishingRodNumber) {
    let baits = getBaits();
    let sandDollars = getSandDollars();

    rodValue = fishingRods[fishingRodNumber].cost;
    if (rodValue <= sandDollars) {
        // Update rod
        currentRod = fishingRods[fishingRodNumber];
        updateFishingRod(currentRod);

        // Update sand dollars
        sandDollars -= rodValue; 
        updateSandDollars(sandDollars);

        if (fishingRodNumber === 1) { // the else ifs make the baits visible in inventory and trading section --> could maybe be classes. tried once, could try again
            makeBaitTradingVisible();
            makeBaitInTradingVisible(0);

            updateBaits(baits)
        } else if (fishingRodNumber === 2) {
            makeBaitInTradingVisible(1);
        } else if (fishingRodNumber === 3) {
            makeBaitInTradingVisible(3);
        }

        // toggling visibility as fishing rods are bought
        // console.log(fishingRodNumber);
        if (fishingRodNumber != fishingRods.length - 1) {
            // make next rod visible
            let nextFishingRodNumber = fishingRodNumber + 1;
            makeRodVisible(nextFishingRodNumber);

            // make current rod buy button invisible
            fishingRodBuyButton = document.getElementById("buyRod" + fishingRodNumber);
            fishingRodBuyButton.style.visibility = 'hidden';
        } else { // last time only removes buy button
            // make current rod buy button invisible
            fishingRodBuyButton = document.getElementById("buyRod" + fishingRodNumber);
            fishingRodBuyButton.style.visibility = 'hidden';
        }
    }
}

// buying habitats
function buyHabitat(fishHabitatNumber) {
    let fishHabitats = getFishHabitats();
    let fishStats = getFishStats();
    let sandDollars = getSandDollars();

    habitatValue = fishHabitats[fishHabitatNumber].cost;
    if (habitatValue <= sandDollars) {
        // Update habitat
        currentHabitat = fishHabitats[fishHabitatNumber];
        updateHabitat(currentHabitat);

        // Update sand dollars
        sandDollars -= habitatValue;
        updateSandDollars(sandDollars);

        // toggling visibility as habitats are bought
        if (fishHabitatNumber != fishHabitats.length - 1) {
            if (fishHabitatNumber == 0) {
                makeHabitatSectionVisible();
            }

            // make next habitat visible
            let nextHabitatNumber = fishHabitatNumber + 1;
            makeHabitatVisible(nextHabitatNumber);

            // make current habitat buy button invisible
            habitatBuyButton = document.getElementById("buyHabitat" + fishHabitatNumber);
            habitatBuyButton.style.visibility = 'hidden';
        } else { // last time only removes buy button
            // make current habitat buy button invisible
            habitatBuyButton = document.getElementById("buyHabitat" + fishHabitatNumber);
            habitatBuyButton.style.visibility = 'hidden';
        }

        // changes displays based on what's unlocked --> shows all fish that have been unlocked before they bought the fish bowl
        for (fishNumber in fishStats) { // displays fish that are unlocked
            if (fishStats[fishNumber].unlocked) {
                makeHabitatFishVisible(fishNumber);
            }
        }
    }
} 

function buyVehicle(vehicleNum) {
    let sandDollars = getSandDollars();

    if (vehicles[vehicleNum].cost <= sandDollars) {
        sandDollars -= vehicles[vehicleNum].cost;
        updateSandDollars(sandDollars);
        updateVehicle(1);
    }

    vehicleBuyButton = document.getElementById("buyVehicle" + vehicleNum);
    if (vehicleBuyButton) {
        vehicleBuyButton.style.visibility = "hidden";
    }
}

// FOR TESTING
/* makeEverythingVisible(); */
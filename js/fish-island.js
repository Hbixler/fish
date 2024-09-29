// GETTING AND SETTING INFO
let fishes = get('fishStats');
let baits = get('baits');
let storage = get('storage');
let fishingRods = get('fishingRods');
let fishHabitats = get('fishHabitats');
let vehicles = get('vehicles');
let sandDollars = get('sandDollars');
let bulkOptions = [1, 5, 10, 50, 100];

// HTML GENERATION

// Go fishing button
let goFishingButton = document.createElement('button');
goFishingButton.innerText = "Fish";
goFishingButton.onclick = goFishing;

document.getElementById("go-fishing-button-div").appendChild(goFishingButton);

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
        sellButton.classList = ["sellFish" + x];
        sellButton.disabled = fishes[x].inventoryCount < bulkOptions[y];

        document.getElementById('fishTrading' + x + '-div').appendChild(sellButton);
    }
}

// Buy baits
for (let x = 0; x < baits.length; x++) {
    let baitTradingDiv = document.createElement('div');
    baitTradingDiv.style.visibility = 'hidden';
    baitTradingDiv.id = "baitTrading" + x + "-div";
    baitTradingDiv.className = "row";

    let baitParagraph = document.createElement('p')

    let baitListing = document.createElement('span');
    baitListing.innerText = baits[x].name;
    baitListing.classList.add('tooltipParent');

    let applicableFish = fishes.findIndex(fish => fish.bait === baits[x].name);
    baitListing.setAttribute('data-tooltip', "Use " + baits[x].name);
    baitListing.setAttribute('data-tooltip-2', " to catch a " + fishes[applicableFish].name + "!")
    baitListing.setAttribute('data-tooltip-position', 'left');

    let baitPrice = document.createElement('span');
    baitPrice.innerText = " (" + baits[x].cost + " SD)";

    baitParagraph.appendChild(baitListing);
    baitParagraph.appendChild(baitPrice);

    document.getElementById('bait-trading-div').appendChild(baitTradingDiv).appendChild(baitParagraph);

    for (let y = 0; y < bulkOptions.length; y++) {
        let buyButton = document.createElement('button');
        if (y === 0) {buyButton.innerText = "Buy 1" } else { buyButton.innerText = bulkOptions[y] };
        buyButton.setAttribute("onclick", "buyBait(" + x + ","  + bulkOptions[y] + ")");
        buyButton.id = "buyBait" + x;
        buyButton.classList = ["buyButton"];
        buyButton.value = baits[x].cost * bulkOptions[y];
        buyButton.setAttribute("space", baits[x].size * bulkOptions[y]);

        document.getElementById('baitTrading' + x + '-div').appendChild(buyButton);
    }
}

// Buy storage
for (let x = 1; x < storage.length; x++) {
    let storageTradingDiv = document.createElement('div');
    storageTradingDiv.style.visibility = 'hidden';
    storageTradingDiv.id = "storageTrading" + x + "-div";
    storageTradingDiv.className = "row";

    let storageParagraph = document.createElement('p');

    let storageListing = document.createElement('span');
    storageListing.innerText = storage[x].name;
    storageListing.classList.add('tooltipParent');

    storageListing.setAttribute('data-tooltip', "Capacity: ");
    storageListing.setAttribute('data-tooltip-2', storage[x].capacities["Sand Dollars"].toLocaleString() + " Sand Dollars, ")
    storageListing.setAttribute('data-tooltip-3', storage[x].capacities["Fish"] + " Fish, ")
    storageListing.setAttribute('data-tooltip-4', storage[x].capacities["Baits"] + " Bait")
    storageListing.setAttribute('data-tooltip-position', 'left');

    let storagePrice = document.createElement('span');
    storagePrice.innerText = " (" + storage[x].cost + " SD)";

    storageParagraph.appendChild(storageListing);
    storageParagraph.appendChild(storagePrice);

    document.getElementById("storage-trading-div").appendChild(storageTradingDiv).appendChild(storageParagraph);

    let buyButton = document.createElement('button');
    buyButton.setAttribute("onclick", "buyStorage(" + x + ")");
    buyButton.innerText = "Buy";
    buyButton.style.visibility = "hidden";
    buyButton.id = "buyStorage" + x;
    buyButton.classList = ["buyButton"];
    buyButton.value = storage[x].cost;

    document.getElementById('storageTrading' + x + '-div').appendChild(buyButton);
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
for (let x = 1; x < fishHabitats.length; x++) {
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
    let fishStats = get('fishStats');
    let currentStorage = get('currentStorage').capacities["Fish"];
    let inventoryStorage = howBigAreMyFish();

    if (inventoryStorage + 1 <= currentStorage) {
        updateFishCount(0, fishStats[0].inventoryCount + 1);
    }
}

// TRADING
// selling fish
function sellFish(fishType, numToSell) {
    let fishStats = get('fishStats');
    let fishStat = fishStats[fishType];
    if (fishStat.inventoryCount >= numToSell) {
        updateFishCount(fishType, fishStat.inventoryCount - numToSell); // Update fish value accordingly
        updateSandDollars(get('sandDollars') + (fishStat.cost * numToSell)); // Update sand dollar count
    }
}

// buying bait
function buyBait(baitNumber, numToBuy) {
    let baits = get('baits');
    let sandDollars = get('sandDollars');
    let fishStats = get('fishStats');
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

// buying storage 
function buyStorage(storageNumber) {
    let sandDollars = get('sandDollars');
    storageValue = storage[storageNumber].cost;

    if (storageValue <= sandDollars) {
        currentStorage = storage[storageNumber];
        updateStorage(currentStorage); // update storage

        sandDollars -= storageValue; // update sand dollars
        updateSandDollars(sandDollars);

        if (storageNumber != storage.length - 1) { // make next storage visible
            makeListElementVisible("storage-trading", storageNumber + 1);
        }

        storageBuyButton = document.getElementById("buyStorage" + storageNumber); // make current storage buy button invisible
        storageBuyButton.style.visibility = "hidden";

        visibility = getVisibility(); // makes new button permanently visible
        visibility['storage-trading'].list.button.currentButton = storageNumber + 1;
        setVisibility(visibility);
    }
}

// buying rods
function buyRod(fishingRodNumber) {
    let sandDollars = get('sandDollars');
    rodValue = fishingRods[fishingRodNumber].cost;

    if (rodValue <= sandDollars) {
        currentRod = fishingRods[fishingRodNumber];
        updateFishingRod(currentRod); // Update rod

        sandDollars -= rodValue; // Update sand dollars
        updateSandDollars(sandDollars);

        if (fishingRodNumber === 1) { // makes baits visible
            makeSectionVisible("bait-trading");
            makeListElementVisible("bait-trading", 0);
            makeSectionVisible("storage-trading");
            makeListElementVisible("storage-trading", 1);
        } else if (isListElementVisible("fish-trading", fishingRodNumber - 1)) {
            makeListElementVisible("bait-trading", fishingRodNumber - 1);
        }

        if (fishingRodNumber != fishingRods.length - 1) { // make next rod visible
            makeListElementVisible("equipment-trading", fishingRodNumber + 1);
        } 

        fishingRodBuyButton = document.getElementById("buyRod" + fishingRodNumber); // make current rod buy button invisible
        fishingRodBuyButton.style.visibility = 'hidden';

        visibility = getVisibility(); // makes new button permanently visible
        visibility['equipment-trading'].list.button.currentButton = fishingRodNumber + 1;
        setVisibility(visibility);
    }
}

// buying habitats
function buyHabitat(fishHabitatNumber) {
    let fishHabitats = get('fishHabitats');
    let sandDollars = get('sandDollars');

    habitatValue = fishHabitats[fishHabitatNumber].cost;
    if (habitatValue <= sandDollars) {
        currentHabitat = fishHabitats[fishHabitatNumber];
        updateHabitat(currentHabitat); // Update habitat
        
        sandDollars -= habitatValue;
        updateSandDollars(sandDollars); // Update sand dollars

        if (fishHabitatNumber === 1) { // buying a fish bowl unlocks habitat page
            makeNavBarLinkVisible("Habitat");
        }

        if (fishHabitatNumber != fishHabitats.length - 1) { // make next habitat visible
            makeListElementVisible("habitat-trading", fishHabitatNumber + 1);
        }

        // make current habitat buy button invisible
        habitatBuyButton = document.getElementById("buyHabitat" + fishHabitatNumber);
        habitatBuyButton.style.visibility = "hidden";

        visibility = getVisibility(); // makes new button permanently visible
        visibility['habitat-trading'].list.button.currentButton = fishHabitatNumber + 1;
        setVisibility(visibility);

        // for last habitat: if narwhal is visible, make vehicle section visible
        let fishStats = get("fishStats");
        if (currentHabitat.name === fishHabitats[fishHabitats.length - 1].name && isListElementVisible("fish-trading", fishStats.length - 1)) {
            makeSectionVisible("vehicle-trading");
            makeListElementVisible("vehicle-trading", 1);
            
            let visibility = getVisibility(); // makes new button permanently visible
            visibility['vehicle-trading'].list.button.currentButton = 1;
            setVisibility(visibility);
        }
    }
} 

// buying vehicles
function buyVehicle(vehicleNum) {
    let vehicles = get('vehicles');
    let sandDollars = get('sandDollars');

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

    visibility = getVisibility(); // makes new button permanently visible
    visibility['vehicle-trading'].list.button.currentButton = vehicleNum + 1;
    setVisibility(visibility);
}

// Visibility toggle -> in visibility.js
visibilityToggle()
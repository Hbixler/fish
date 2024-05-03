// Check visibility
function isTradingSectionVisible() {
    let tradingDiv = document.getElementById('trading-div'); // make trading section visible
    return tradingDiv.style.visibility == 'visible';
}
function makeTradingSectionVisible() {
    let tradingDiv = document.getElementById('trading-div'); // make trading section visible
    tradingDiv.style.visibility = 'visible';

    let sellFishHeadingDiv = document.getElementById('sellFishHeading'); // make sell fish heading visible
    sellFishHeadingDiv.style.visibility = 'visible';
}
function isFishTradingVisible(fishNumber) {
    let fishTradeDiv = document.getElementById("fishTrading" + fishNumber + "-div"); // add fish to the trading section
    return fishTradeDiv.style.visibility === 'visible';
}
function makeFishTradingVisible(fishNumber) {
    let fishTradeDiv = document.getElementById("fishTrading" + fishNumber + "-div"); // add fish to the trading section
    fishTradeDiv.style.visibility = 'visible';
}
function isEquipmentTradingVisible() {
    fishingRodHeading = document.getElementById('equipment-heading');
    return fishingRodHeading.style.visibility == 'visible';
}
function makeEquipmentTradingVisible() {
    let fishingRodHeading = document.getElementById('equipment-heading');
    fishingRodHeading.style.visibility = 'visible';
    
    let fishingRodTradingDiv = document.getElementById('equipment-div');
    fishingRodTradingDiv.style.removeProperty('border');
}
function makeRodVisible(rodNum) {
    let fishingRodTrading = document.getElementById('fishingRodTrading' + rodNum + '-div')
    fishingRodTrading.style.visibility = 'visible';

    let fishingRodButton = document.getElementById('buyRod' + rodNum);
    fishingRodButton.style.visibility = 'visible';
}
function makeBaitTradingVisible() {
    baitHeadingDiv = document.getElementById('bait-heading');
    baitHeadingDiv.style.visibility = 'visible';
    
    baitDiv = document.getElementById("bait-div");
    baitDiv.style.removeProperty('border');
}
function makeHabitatTradingVisible() {
    let habitatTradingHeading = document.getElementById('habitat-heading')
    habitatTradingHeading.style.visibility = 'visible';

    let habitatTradingDiv = document.getElementById('habitat-trading-div');
    habitatTradingDiv.style.removeProperty('border'); 
}
function makeHabitatVisible(habitatNum) {
    let fishingHabitatTrading = document.getElementById('habitatTrading' + habitatNum + '-div');
    fishingHabitatTrading.style.visibility = 'visible';

    let fishingHabitatButton = document.getElementById('buyHabitat' + habitatNum);
    fishingHabitatButton.style.visibility = 'visible';

    fishHabitats[habitatNum].unlocked = true;
}
function isVehicleSectionVisible() {
    vehiclesDiv = document.getElementById('vehicles-div'); // displays vehicles
    return vehiclesDiv.style.visibility == 'visible';
}
function makeVehicleSectionVisible() {
    vehiclesDiv = document.getElementById('vehicles-div'); // displays vehicles
    vehiclesDiv.style.visibility == 'visible';
}

// Sand dollar count
function updateSandDollars() {
    let sandDollarsSpan = document.getElementById('sandDollars');
    sandDollarsSpan.innerText = Math.round(sandDollars * 100) / 100;

    if(sandDollars > 10 && !isEquipmentTradingVisible()) { // unlocks equipment section of trading when 10 sanddollars are earned

        makeEquipmentTradingVisible();
        makeRodVisible(0);

        fishingRods[0].unlocked = true;
    }

    if(sandDollars >= 40 && isBaitVisible(0) && !isHabitatVisible()) { // unlocks habitat section of trading when 40 sanddollars are earned and bait is already unlocked
        makeHabitatTradingVisible();
        makeHabitatVisible(0)
    }
}

function updateAvailableRods() {
    for (let x = 0; x < fishingRods.length; x++) {
        let fishingRodSpan = document.getElementById("rod" + x);
        fishingRodSpan.innerText = fishingRods[x].name;
    }
}

let sandDollars = 0;
updateSandDollars();

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
    // console.log(fish)
}


function sellFish(fishType) {
    fishStat = fishStats[fishType]
    if (fishStat.inventoryCount >= 1) {
        // Update fish value accordingly
        fishValue = fishStat.cost;
        fishStat.inventoryCount = fishStat.inventoryCount - 1;
        updateFishCount(fishType);

        // Update sand dollar count
        sandDollars += fishValue;
        updateSandDollars()
    }
}

// Buying bait
function buyBait(baitNumber) {
    baitName = baits[baitNumber].name;
    baitValue = baits[baitNumber].cost;
    if (baitValue <= sandDollars) {
        // Update bait
        baits[baitNumber].count += 1;
        updateBaitCount(baitNumber);

        // Update sand dollars
        sandDollars -= baitValue;
        updateSandDollars();
    }
}

// Buying rods
updateAvailableRods();

function buyRod(fishingRodNumber) {
    rodValue = fishingRods[fishingRodNumber].cost;
    if (rodValue <= sandDollars) {
        // Update rod
        currentRod = fishingRods[fishingRodNumber];
        updateFishingRod();
        updateAvailableRods();

        // Update sand dollars
        sandDollars -= rodValue;
        updateSandDollars();

        if (fishingRodNumber === 0) { // make supplies box and title visible
            makeSuppliesVisible();
        } else if (fishingRodNumber === 1) { // the else ifs make the baits visible in inventory and trading section --> could maybe be classes. tried once, could try again
            makeBaitTradingVisible();
            makeBaitVisible(0);

            baits[0].unlocked = true; // to unlock the habitats section
        } else if (fishingRodNumber === 2) {
            makeBaitVisible(1);
            makeBaitVisible(2);
        } else if (fishingRodNumber === 3) {
            makeBaitVisible(3);
        }

        // toggling visibility as fishing rods are bought
        console.log(fishingRodNumber);
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
    habitatValue = fishHabitats[fishHabitatNumber].cost;
    if (habitatValue <= sandDollars) {
        // Update habitat
        currentHabitat = fishHabitats[fishHabitatNumber];
        updateHabitat();

        // Update sand dollars
        sandDollars -= habitatValue;
        updateSandDollars();

        // toggling visibility as habitats are bought
        console.log(fishHabitatNumber);
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
            

        // changing habitat maximum
        let habitatMaximumSpan = document.getElementById("habitatMaximum");
        habitatMaximumSpan.innerText = currentHabitat.capacity;

        // changes displays based on what's unlocked --> shows all fish that have been unlocked before they bought the fish bowl
        for (fishNumber in fishStats) { // displays fish that are unlocked
            if (fishStats[fishNumber].unlocked) {
                makeHabitatFishVisible(fishNumber);
            }
        }
    }
} 

// habitat labels in trading
for (let x = 0; x < fishHabitats.length; x++) {
    let fishHabitatSpan = document.getElementById("habitat" + x);
    fishHabitatSpan.innerText = fishHabitats[x].name;
}

// win label
for (let x = 0; x < win.length; x++) {
    let winSpan = document.getElementById("win" + x);
    winSpan.innerText = win[x].name;
}

// costs and such of various tradeable things
for (let x = 0; x < fishStats.length; x++) { // selling fish
    let fishCostSpan = document.getElementById("fish" + x + "-cost");
    fishCostSpan.innerText = fishStats[x].cost;
}

for (let x = 0; x < fishingRods.length; x++) { // buying rods
    let rodCostSpan = document.getElementById("rod" + x + "-cost");
    rodCostSpan.innerText = fishingRods[x].cost;
}

for (let x = 0; x < baits.length; x++) { // buying rods
    let baitCostSpan = document.getElementById("bait" + x + "-cost");
    baitCostSpan.innerText = baits[x].cost;
}

for (let x = 0; x < fishHabitats.length; x++) { // buying rods
    let habitatCostSpan = document.getElementById("habitat" + x + "-cost");
    habitatCostSpan.innerText = fishHabitats[x].cost;
}

for (let x = 0; x < win.length; x++) { // buying rods
    let winCostSpan = document.getElementById("win" + x + "-cost");
    winCostSpan.innerText = win[x].cost;
}
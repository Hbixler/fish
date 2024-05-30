// let fishStats = getFishStats();
let baits = getBaits();
let fishingRods = getFishingRods();
let fishHabitats = getFishHabitats();
let vehicles = getVehicles();
let sandDollars = getSandDollars();
let currentRod = getCurrentRod();

// fish labels in inventory
for (let x = 0; x < fishStats.length; x++) {
    let fishStatsSpan = document.getElementsByClassName("fish" + x);
    for (let y = 0; y < fishStatsSpan.length; y++) {
        fishStatsSpan[y].innerText = fishStats[x].name;
    }
}

// Bait labels
for (let x = 0; x < baits.length; x++) {
    let baitsSpan = document.getElementsByClassName("bait" + x);
    for (let y = 0; y < baitsSpan.length; y++) {
        baitsSpan[y].innerText = baits[x].name;
    }
    updateBaitCount(x, baits[x].count)
}

updateSandDollars(sandDollars);

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
}

// Buying rods
updateFishingRod(currentRod);
updateAvailableRods();

// habitat labels in trading
for (let x = 0; x < fishHabitats.length; x++) {
    let fishHabitatSpan = document.getElementById("habitat" + x);
    fishHabitatSpan.innerText = fishHabitats[x].name;
}

// vehicles label
for (let x = 0; x < 1; x++) {
    let vehicleSpan = document.getElementById("vehicle" + x);
    vehicleSpan.innerText = vehicles[x].name;
}

// costs and such of various tradeable things - getFishStats called above
for (let x = 0; x < fishStats.length; x++) { // selling fish
    let fishCostSpan = document.getElementById("fish" + x + "-cost");
    fishCostSpan.innerText = fishStats[x].cost;
}

for (let x = 1; x < fishingRods.length; x++) { // buying rods
    let rodCostSpan = document.getElementById("rod" + x + "-cost");
    rodCostSpan.innerText = fishingRods[x].cost;
}

for (let x = 0; x < baits.length; x++) { // buying baits
    let baitCostSpan = document.getElementById("bait" + x + "-cost");
    baitCostSpan.innerText = baits[x].cost;
}

for (let x = 0; x < fishHabitats.length; x++) { // buying habitats
    let habitatCostSpan = document.getElementById("habitat" + x + "-cost");
    habitatCostSpan.innerText = fishHabitats[x].cost;
}

for (let x = 0; x < 1; x++) { // buying vehicles
    let vehicleCostSpan = document.getElementById("vehicle" + x + "-cost");
    vehicleCostSpan.innerText = vehicles[x].cost.toLocaleString();
}

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
        updateAvailableRods();

        // Update sand dollars
        sandDollars -= rodValue; 
        updateSandDollars(sandDollars);

        if (fishingRodNumber === 0) { // make supplies box and title visible
            makeSuppliesVisible();
        } else if (fishingRodNumber === 1) { // the else ifs make the baits visible in inventory and trading section --> could maybe be classes. tried once, could try again
            makeBaitTradingVisible();
            makeBaitVisible(0);

            baits[0].unlocked = true; // to unlock the habitats section
            updateBaits(baits)
        } else if (fishingRodNumber === 2) {
            makeBaitVisible(1);
        } else if (fishingRodNumber === 3) {
            makeBaitVisible(3);
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
        updateVehicle();
    }
}

// DELETE LATER
makeEverythingVisible();
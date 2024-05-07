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

updateSandDollars();

// Selling fish
for (x = 0; x < fishStats.length; x++) {
    buttonElement = document.getElementById("sellFish" + x);
    fish = fishStats[x];
    // console.log(fish)
}


function sellFish(fishType, numToSell) {
    fishStat = fishStats[fishType]
    if (fishStat.inventoryCount >= numToSell) {
        // Update fish value accordingly
        fishValue = fishStat.cost * numToSell;
        fishStat.inventoryCount = fishStat.inventoryCount - numToSell;
        updateFishCount(fishType);

        // Update sand dollar count
        sandDollars += fishValue;
        updateSandDollars()
    }
}

// Buying bait
function buyBait(baitNumber, numToBuy) {
    baitName = baits[baitNumber].name;
    baitValue = baits[baitNumber].cost * numToBuy;
    if (baitValue <= sandDollars) {
        // Update bait
        baits[baitNumber].count += numToBuy;
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

function buyVehicle(vehicleNum) {
    // Currently means the user won the game!!
    console.log('user won!')
    if (win[vehicleNum].cost <= sandDollars) {
        sandDollars -= win[vehicleNum].cost;
        updateSandDollars();
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
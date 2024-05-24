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

    setBaits(baits);
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

    setFishHabitats(fishHabitats);
} 

function buyVehicle(vehicleNum) {
    // Currently means the user won the game!!
    console.log('user won!')
    let win = getWin();
    let sandDollars = getSandDollars();

    if (win[vehicleNum].cost <= sandDollars) {
        sandDollars -= win[vehicleNum].cost;
        updateSandDollars(sandDollars);
    }

}
// Sand dollar count
function updateSandDollars() {
    let sandDollarsSpan = document.getElementById('sandDollars');
    sandDollarsSpan.innerText = Math.round(sandDollars * 100) / 100;

    if(sandDollars > 10 && !fishingRods[0].unlocked) { // unlocks equipment section of trading when 10 sanddollars are earned
        fishingRodTrading0 = document.getElementById('fishingRodTrading0-div')
        fishingRodTrading0.style.visibility = 'visible';

        fishingRodButton0 = document.getElementById('buyRod0');
        fishingRodButton0.style.visibility = 'visible';

        fishingRodHeading = document.getElementById('equipment-heading');
        fishingRodHeading.style.visibility = 'visible';

        fishingRodTradingDiv = document.getElementById('equipment-div');
        fishingRodTradingDiv.style.removeProperty('border');

        fishingRods[0].unlocked = true;
    }

    if(sandDollars > 40 && baits[0].unlocked && !fishHabitats[0].unlocked) { // unlocks habitat section of trading when 40 sanddollars are earned and bait is already unlocked
        fishingHabitatTrading0 = document.getElementById('habitatTrading0-div');
        fishingHabitatTrading0.style.visiblity = 'visible';

        fishingHabitatButton0 = document.getElementById('buyHabitat0');
        fishingHabitatButton0.style.visibility = 'visible';

        habitatTradingHeading = document.getElementById('habitat-heading')
        habitatTradingHeading.style.visibility = 'visible';

        habitatTradingDiv = document.getElementById('habitat-trading-div');
        habitatTradingDiv.style.removeProperty('border');

        fishHabitats[0].unlocked = true;
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
            suppliesDiv = document.getElementById('supplies-div');
            suppliesDiv.style.visibility = 'visible';
        } else if (fishingRodNumber === 1) { // the else ifs make the baits visible in inventory and trading section --> could maybe be classes. tried once, could try again
            bait0Div = document.getElementById('bait0-div'); 
            bait0Div.style.visibility = 'visible';

            baitDiv = document.getElementById('baitTrading0-div');
            baitDiv.style.visibility = 'visible';

            baitHeadingDiv = document.getElementById('bait-heading');
            baitHeadingDiv.style.visibility = 'visible';
            
            baitDiv = document.getElementById("bait-div");
            baitDiv.style.removeProperty('border');

            baits[0].unlocked = true; // to unlock the habitats section
        } else if (fishingRodNumber === 2) {
            bait1Div = document.getElementById('bait1-div');
            bait1Div.style.visibility = 'visible';

            baitDiv = document.getElementById('baitTrading1-div');
            baitDiv.style.visibility = 'visible';

            bait2Div = document.getElementById('bait2-div');
            bait2Div.style.visibility = 'visible';

            baitDiv = document.getElementById('baitTrading2-div');
            baitDiv.style.visibility = 'visible';
        } else if (fishingRodNumber === 3) {
            bait3Div = document.getElementById('bait3-div');
            bait3Div.style.visibility = 'visible';

            baitDiv = document.getElementById('baitTrading3-div');
            baitDiv.style.visibility = 'visible';
        }

        // toggling visibility as fishing rods are bought
        console.log(fishingRodNumber);
        if (fishingRodNumber != fishingRods.length - 1) {
            // make next rod visible
            let nextFishingRodNumber = fishingRodNumber + 1;
            fishingRodTradingDiv = document.getElementById("fishingRodTrading" + nextFishingRodNumber + "-div");
            fishingRodTradingDiv.style.visibility = 'visible';
            nextFishingRodBuyButton = document.getElementById("buyRod" + nextFishingRodNumber);
            nextFishingRodBuyButton.style.visibility = 'visible';

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
            // make next habitat visible
            let nextHabitatNumber = fishHabitatNumber + 1;
            habitatTradingDiv = document.getElementById("habitatTrading" + nextHabitatNumber + "-div");
            habitatTradingDiv.style.visibility = 'visible';
            nextHabitatBuyButton = document.getElementById("buyHabitat" + nextHabitatNumber);
            nextHabitatBuyButton.style.visibility = 'visible';

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
        if (Object.keys(currentHabitat).length > 0) { // checks if the fish bowl has been bought
            habitatDiv = document.getElementById('habitat-div'); // displays fish bowl
            habitatDiv.style.visibility = 'visible';

            for (fishNumber in fishStats) { // displays fish that are unlocked
                if (fishStats[fishNumber].unlocked) {
                    fishInHabitatDiv = document.getElementById("fishInHabitat" + fishNumber + "-div");
                    fishInHabitatDiv.style.visibility = 'visible';
                }
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
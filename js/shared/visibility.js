// Inventory
function isBaitVisible(baitNum) {
    let baits = getBaits();
    return baits[baitNum].unlocked;
}
function makeBaitVisible(baitNum) {
    let baitDiv = document.getElementById('bait' + baitNum + '-div'); 
    if(baitDiv) {
        baitDiv.style.visibility = 'visible';
    }
    

    let baitTradingDiv = document.getElementById('baitTrading' + baitNum + '-div');
    if (baitTradingDiv) {
        baitTradingDiv.style.visibility = 'visible';
    }
}
function makeSuppliesVisible() {
    let suppliesDiv = document.getElementById('supplies-div');
    suppliesDiv.style.visibility = 'visible';
}
function isInventoryFishVisible(fishNum) {
    let fishStats = getFishStats()
    return fishStats[fishNum].unlocked;
}
function makeInventoryFishVisible(fishNumber) {
    // Add fish to inventory options
    fishDiv = document.getElementById("fish" + fishNumber + "-div");
    if (fishDiv) {
        fishDiv.style.visibility = 'visible';
    }
}
function makeFishListSectionVisible() {
    let fishListSection = document.getElementById("fish-list");
    fishListSection.style.visibility = 'visible';
}
function makeInventorySectionVisible() {
    inventoryHeadingDiv = document.getElementById("inventory-heading");
    if (inventoryHeadingDiv) {

        inventoryHeadingDiv.style.visibility = 'visible';

        inventoryDiv = document.getElementById("inventory-div");
        inventoryDiv.style.removeProperty('border'); 
    }
}

// Trading
function isTradingSectionVisible() {
    let tradingDiv = document.getElementById('trading-div'); // make trading section visible
    return tradingDiv && tradingDiv.style.visibility == 'visible';
}
function makeTradingSectionVisible() {
    let tradingDiv = document.getElementById('trading-div'); // make trading section visible

    if (tradingDiv) {
        tradingDiv.style.visibility = 'visible';
        let sellFishHeadingDiv = document.getElementById('sellFishHeading'); // make sell fish heading visible
        sellFishHeadingDiv.style.visibility = 'visible';
    }
}

function isFishTradingVisible(fishNumber) {
    let fishTradeDiv = document.getElementById("fishTrading" + fishNumber + "-div"); // add fish to the trading section
    return fishTradeDiv.style.visibility === 'visible';
}

function makeFishTradingVisible(fishNumber) {
    let fishTradeDiv = document.getElementById("fishTrading" + fishNumber + "-div"); // add fish to the trading section
    if (fishTradeDiv) {
        fishTradeDiv.style.visibility = 'visible';
    }
}

function isEquipmentTradingVisible() {
    fishingRodHeading = document.getElementById('equipment-heading');
    return fishingRodHeading && fishingRodHeading.style.visibility == 'visible';
}

function makeEquipmentTradingVisible() {
    let fishingRodHeading = document.getElementById('equipment-heading');

    if (fishingRodHeading) {
        fishingRodHeading.style.visibility = 'visible';
    
        let fishingRodTradingDiv = document.getElementById('equipment-div');
        fishingRodTradingDiv.style.removeProperty('border');
    }
}

function makeRodVisible(rodNum) {
    let fishingRodTrading = document.getElementById('fishingRodTrading' + rodNum + '-div')

    if (fishingRodTrading) {
        fishingRodTrading.style.visibility = 'visible';

        let fishingRodButton = document.getElementById('buyRod' + rodNum);
        fishingRodButton.style.visibility = 'visible';
    }
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
    if (vehiclesDiv) {
        vehiclesDiv.style.visibility = 'visible';
    }
}

// Habitat
function isHabitatVisible() { // FIX THIS
    /* let habitatNavButtons = document.getElementsByClassName('habitat-nav-button');
    let habitatButton = habitatNavButtons[0];
    return habitatButton.style.visibility = 'visible'; */
    return true;
}
function makeHabitatSectionVisible() {
    habitatDiv = document.getElementById('habitat-div'); // displays fish bowl

    if (habitatDiv) {
        habitatDiv.style.visibility = 'visible';
    }
}
function makeHabitatFishVisible(fishNumber) {
    if (document.getElementById('habitat-div')) {
        let fishInHabitatDiv = document.getElementById("fishInHabitat" + fishNumber + "-div");
        fishInHabitatDiv.style.visibility = 'visible'; 
    }
}

// Vast Unknown

function makeFrogVisible() {
    let frogDiv = document.getElementById("frog-box");
    if (frogDiv) {
        frogDiv.style.visibility = 'visible';
    }
}


function makeHabitatPageVisible() {
    for (fishNum in fishStats) {
        makeHabitatFishVisible(fishNum);
    }
    makeHabitatSectionVisible();
    makeNavBarVisible();
}

function makeVastUnknownVisible() {
    makeFrogVisible();
    makeNavBarVisible();
}

function makeWiseOldMageVisible() {
    makeNavBarVisible();
}

function makeBetterOceansVisible() {
    makeNavBarVisible();
}

function makeNavBarVisible() {
    makeFishListSectionVisible();
    let fish = getFishStats();
    for (fishNum in fish) {
        makeInventoryFishVisible(fishNum);
    }
}

// Everything
function makeEverythingVisible() {
    console.log('the ocean is big and I can see it');
    for (fishNum in fishStats) {
        makeFishTradingVisible(fishNum);
        makeInventoryFishVisible(fishNum);
    }
    for (baitNum in baits) {
        makeBaitVisible(baitNum);
    }
    makeTradingSectionVisible();
    for (habitatNum in fishHabitats) {
        makeHabitatVisible(habitatNum);
    }
    makeEquipmentTradingVisible();
    for (let rodNum = 1; rodNum < fishingRods.length; rodNum++) {
        makeRodVisible(rodNum);
    }
    makeVehicleSectionVisible();
    makeHabitatTradingVisible();
    makeInventorySectionVisible();
    makeSuppliesVisible();
    makeBaitTradingVisible();
    makeNavBarVisible();
}


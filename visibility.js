// Inventory
function isBaitVisible(baitNum) {
    return baits[baitNum].unlocked;
}
function makeBaitVisible(baitNum) {
    let baitDiv = document.getElementById('bait' + baitNum + '-div'); 
    baitDiv.style.visibility = 'visible';

    let baitTradingDiv = document.getElementById('baitTrading' + baitNum + '-div');
    baitTradingDiv.style.visibility = 'visible';
}
function makeSuppliesVisible() {
    let suppliesDiv = document.getElementById('supplies-div');
    suppliesDiv.style.visibility = 'visible';
}
function isInventoryFishVisible(fishNum) {
    return fishStats[fishNum].unlocked;
}
function makeInventoryFishVisible(fishNumber) {
    // Add fish to inventory options
    fishDiv = document.getElementById("fish" + fishNumber + "-div");
    fishDiv.style.visibility = 'visible';
}
function makeInventorySectionVisible() {
    fishHeadingDiv = document.getElementById("fish-heading");
    fishHeadingDiv.style.visibility = 'visible';

    fishDiv = document.getElementById("fish-div")
    fishDiv.style.removeProperty('border');

    inventoryHeadingDiv = document.getElementById("inventory-heading");
    inventoryHeadingDiv.style.visibility = 'visible';

    inventoryDiv = document.getElementById("inventory-div");
    inventoryDiv.style.removeProperty('border'); 
}

// Trading
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
    vehiclesDiv.style.visibility = 'visible';
}

// Habitat
function isHabitatVisible() {
    return Object.keys(currentHabitat).length > 0;
}
function makeHabitatSectionVisible() {
    habitatDiv = document.getElementById('habitat-div'); // displays fish bowl
    habitatDiv.style.visibility = 'visible';
}
function makeHabitatFishVisible(fishNumber) {
    let fishInHabitatDiv = document.getElementById("fishInHabitat" + fishNumber + "-div");
    fishInHabitatDiv.style.visibility = 'visible'; 
}
// OBJECT OF VISIBILITY
let visibility = {
    'inventory': {
        id: 'inventory-div',
        visible: false,
    },
    'supplies': {
        id: 'supplies-div',
        visible: false,
    },
};
if(!sessionStorage.getItem('visibility')) {sessionStorage.setItem('visibility', JSON.stringify(visibility))}; // initial set
function getVisibility() { // get function
    return JSON.parse(sessionStorage.getItem('visibility'))
}; 
function setVisibility(newVisibility) { // set function
    sessionStorage.setItem('visibility', JSON.stringify(newVisibility))
}; 

// MAKING SECTIONS VISIBLE

function isSectionVisible(section) {
    let div = document.getElementById(visibility[section].id);
    return div && div.style.visibility == 'visible';
}

function makeSectionVisible(section) {
    let sectionVisibility = getVisibility(); 
    div = document.getElementById(visibility[section].id);
    if(div) {
        div.style.visibility = 'visible';
        sectionVisibility[section].visible = true;
        setVisibility(sectionVisibility);
    }
}

// SHARED INFO
function makeFishListSectionVisible() { // makes whole fish list section visible
    let fishListSection = document.getElementById("fish-list");
    fishListSection.style.visibility = 'visible';
}
function isInventoryFishVisible(fishNum) { // checks specific fish 
    let fishStats = getFishStats()
    return fishStats[fishNum].unlocked;
}
function makeInventoryFishVisible(fishNumber) { // makes specific fish visible
    fishDiv = document.getElementById("fish" + fishNumber + "-div");
    if (fishDiv) {
        fishDiv.style.visibility = 'visible';
    }
}


// FISH ISLAND
// supplies
function isBaitVisible(baitNum) {
    let baits = getBaits();
    return baits[baitNum].unlocked;
}
function makeBaitVisible(baitNum) {
    let baitDiv = document.getElementById('bait' + baitNum + '-div'); 
    if(baitDiv) {
        baitDiv.style.visibility = 'visible';
    }
}


// trading
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
function makeBaitInTradingVisible(baitNum) {
    let baitTradingDiv = document.getElementById('baitTrading' + baitNum + '-div');
    if (baitTradingDiv) {
        baitTradingDiv.style.visibility = 'visible';
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
    let vehiclesDiv = document.getElementById('vehicles-div'); // displays vehicles
    return vehiclesDiv.style.visibility == 'visible';
}
function makeVehicleSectionVisible() {
    vehiclesDiv = document.getElementById('vehicles-div'); // displays vehicles
    if (vehiclesDiv) {
        vehiclesDiv.style.visibility = 'visible';
    }

    let vehicleButton = document.getElementById("buyVehicle1");
    if(vehicleButton) {
        vehicleButton.style.visibility = "visible";
    }
}

// HABITAT
function isHabitatVisible() { // THIS WILL EVENTUALLY BE THE NAV BAR VISIBILITY
    return true
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

function makeHabitatPageVisible() {
    for (fishNum in fishStats) {
        makeHabitatFishVisible(fishNum);
    }
    makeHabitatSectionVisible();
    makeSharedInfoVisible();
}

// VAST UNKNOWN
function makeFrogVisible() {
    let frogDiv = document.getElementById("frog-box");
    if (frogDiv) {
        frogDiv.style.visibility = 'visible';
    }
}

function makeVastUnknownVisible() {
    makeFrogVisible();
    makeSharedInfoVisible();
}

// WISE OLD MAGE
function makeWiseOldMageVisible() {
    makeSharedInfoVisible();
}

// BETTER OCEANS
function makeBetterOceansVisible() {
    makeSharedInfoVisible();
}

// FOR EVERYTHING FUNCTION
function makeSharedInfoVisible() { // makes shared info section visible
    makeFishListSectionVisible();
    let fish = getFishStats();
    for (fishNum in fish) {
        makeInventoryFishVisible(fishNum);
    }
}

function makeNavBarVisible() {
    getNavBarLinks();
    for (item in navBarLinks) {
        let link = document.getElementById(navBarLinks[item].id);
        link.style.visibility = 'visible';
    }
}

// EVERYTHING
function makeEverythingVisible() {
    let baits = getBaits();
    let fishHabitats = getFishHabitats();
    let fishingRods = getFishingRods();

    console.log('the ocean is big and I can see it');
    for (fishNum in fishStats) {
        makeFishTradingVisible(fishNum);
        makeInventoryFishVisible(fishNum);
    }
    for (baitNum in baits) {
        makeBaitVisible(baitNum);
        makeBaitInTradingVisible(baitNum);
    }
    makeTradingSectionVisible();
    for (habitatNum in fishHabitats) {
        makeHabitatVisible(habitatNum);
    }
    makeEquipmentTradingVisible();
    for (let rodNum = 1; rodNum < fishingRods.length; rodNum++) {
        makeRodVisible(rodNum);
    }

    // shared
    makeSharedInfoVisible();
    makeNavBarVisible();

    // fish island
    makeSectionVisible('inventory');
    makeSectionVisible('supplies');

    makeBaitTradingVisible();
    makeVehicleSectionVisible();

    // habitat
    makeHabitatTradingVisible();    
}


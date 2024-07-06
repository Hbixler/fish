// OBJECT OF VISIBILITY
let visibility = { // sections
    // fish island
    'inventory': {
        id: 'inventory-div',
        visible: false,
    },
    'supplies': {
        id: 'supplies-div',
        visible: false,
    },
    'trading': {
        id: 'trading-div',
        visible: false,
    },
    'fish-trading': {
        id: 'fish-trading-div',
        visible: false,
    },
    'equipment-trading': {
        id: 'equipment-trading-div',
        visible: false,
    },
    'bait-trading': {
        id: 'bait-trading-div',
        visible: false,
    },
    'habitat-trading': {
        id: 'habitat-trading-div',
        visible: false,
    },
    /* 'vehicle-trading': {
        id: 'vehicle-trading-div',
        visible: false,
    }, */

    // Shared
    'fish-list': { 
        id: 'fish-list',
        visible: false,
    }
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
    div = document.getElementById(sectionVisibility[section].id);
    if(div) {
        div.style.visibility = 'visible';
        sectionVisibility[section].visible = true;
        setVisibility(sectionVisibility);
    }
}

// SHARED INFO

// nav bar
function makeNavBarLinkVisible(navBarLink) {
    let navbar = getNavBarLinks();
    div = document.getElementById(navbar[navBarLink].id);
    div.style.visibility = 'visible';
    navbar[navBarLink].visible = true;
    setNavBarLinks(navbar);
}

// right side
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
function makeRodVisible(rodNum) {
    let fishingRodTrading = document.getElementById('fishingRodTrading' + rodNum + '-div')

    if (fishingRodTrading) {
        fishingRodTrading.style.visibility = 'visible';

        let fishingRodButton = document.getElementById('buyRod' + rodNum);
        fishingRodButton.style.visibility = 'visible';
    }
}
function makeHabitatVisible(habitatNum) {
    let fishingHabitatTrading = document.getElementById('habitatTrading' + habitatNum + '-div');
    fishingHabitatTrading.style.visibility = 'visible';

    let fishingHabitatButton = document.getElementById('buyHabitat' + habitatNum);
    fishingHabitatButton.style.visibility = 'visible';

    fishHabitats[habitatNum].unlocked = true;
}
function isVehicleSectionVisible() {
    let vehiclesDiv = document.getElementById('vehicle-trading-div'); // displays vehicles
    return vehiclesDiv.style.visibility == 'visible';
}
function makeVehicleSectionVisible() { // list/buttons
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
    makeSectionVisible("fish-list");
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
    for (habitatNum in fishHabitats) {
        makeHabitatVisible(habitatNum);
    }
    for (let rodNum = 1; rodNum < fishingRods.length; rodNum++) {
        makeRodVisible(rodNum);
    }

    // everything
    for (section in visibilityList) {
        let sectionBox = document.getElementById(visibilityList[section].id);
        if (sectionBox && visibilityList[section].visible === true) {
            sectionBox.style.visibility = "visible";
        }
    }

    makeNavBarVisible();

    for (item in visibility) {
        makeSectionVisible(item);
    }
}


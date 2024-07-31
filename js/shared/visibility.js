// OBJECT OF VISIBILITY
let visibility = {
    // fish island
    'inventory': {
        id: 'inventory-div',
        visible: false,
    },
    'supplies': {
        id: 'supplies-div',
        visible: false,
        list: {
            idStart: "bait",
            firstItem: 0,
            highestVisible: -1,
        },
    },
    'trading': {
        id: 'trading-div',
        visible: false,
    },
    'fish-trading': {
        id: 'fish-trading-div',
        visible: false,
        list: {
            idStart: "fishTrading",
            firstItem: 0,
            highestVisible: -1,
        },
    },
    'equipment-trading': {
        id: 'equipment-trading-div',
        visible: false,
        list: {
            idStart: "fishingRodTrading",
            firstItem: 1,
            highestVisible: 0,
            buttonId: "buyRod",
        },
    },
    'bait-trading': {
        id: 'bait-trading-div',
        visible: false,
        list: {
            idStart: "baitTrading",
            firstItem: 0,
            highestVisible: -1,
        },
    },
    'habitat-trading': {
        id: 'habitat-trading-div',
        visible: false,
        list: {
            idStart: "habitatTrading",
            firstItem: 0,
            highestVisible: -1,
            buttonId: "buyHabitat",
        },
    },
    'vehicle-trading': {
        id: 'vehicle-trading-div',
        visible: false,
        list: {
            idStart: "vehicleTrading",
            firstItem: 1,
            highestVisible: 0,
            buttonId: "buyVehicle",
        },
    },

    // shared info
    'fish-list': { 
        id: 'fish-list',
        visible: false,
    },
};
if(!sessionStorage.getItem('visibility')) { sessionStorage.setItem('visibility', JSON.stringify(visibility))}; // initial set
function getVisibility() { // get function
    return JSON.parse(sessionStorage.getItem('visibility'))
}; 
function setVisibility(newVisibility) { // set function
    sessionStorage.setItem('visibility', JSON.stringify(newVisibility))
}; 

// SECTIONS 
function isSectionVisible(section) {
    let visibility = getVisibility();
    let div = document.getElementById(visibility[section].id);
    return div && div.style.visibility == 'visible';
}
function makeSectionVisible(section) {
    let visibility = getVisibility(); 
    let div = document.getElementById(visibility[section].id);
    if(div) {
        div.style.visibility = 'visible';
        visibility[section].visible = true;
        setVisibility(visibility);
    }
}

// LIST ELEMENTS
function isListElementVisible(section, elementNum) {
    let visibility = getVisibility();
    let div = document.getElementById(visibility[section].list.idStart + elementNum + "-div");
    return div && div.style.visibility == "visible";
}
function makeListElementVisible(section, elementNum) {
    let visibility = getVisibility();
    let listElement = document.getElementById(visibility[section].list.idStart + elementNum + "-div");
    if (listElement) {
        listElement.style.visibility = "visible";
        let buttonDiv = document.getElementById(visibility[section].list.buttonId + elementNum);
        if(buttonDiv) {
            buttonDiv.style.visibility = "visible";
        }
        if (listElement > visibility[section].list.highestVisible) {
            visibility[section].list.highestVisible = elementNum;
            setVisibility(visibility);
        }
    }
}

// NAV BAR
function isNavBarLinkVisible(navBarLink) {
    let navBar = getNavBarLinks();
    let navBarIndex = navBar.findIndex(link => link.name === navBarLink);
    let div = document.getElementById(navBar[navBarIndex].id);
    return div && div.style.visibility == 'visible';
}
function makeNavBarLinkVisible(navBarLink) {
    let navBar = getNavBarLinks();
    let navBarIndex = navBar.findIndex(link => link.name === navBarLink);
    let div = document.getElementById(navBar[navBarIndex].id);
    div.style.visibility = 'visible';
    navBar[navBarIndex].visible = true;
    setNavBarLinks(navBar);
}

// SHARED INFO
function isInventoryFishVisible(fishNum) { // checks specific fish 
    let fishStats = getFishStats();
    return fishStats[fishNum].unlocked;
}
function makeInventoryFishVisible(fishNumber) { // makes specific fish visible
    let fishStats = getFishStats();
    fishDiv = document.getElementById("fish" + fishNumber + "-div");
    if (fishDiv) {
        fishDiv.style.visibility = 'visible';
    }
    fishStats[fishNumber].visible = true;
    setFishStats(fishStats);
}

// HABITAT
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

// PERMANENT VISIBILITY FUNCTION
function permanentVisibility() {
    let visibilityList = getVisibility(); // sections
    for (section in visibilityList) {
        let sectionBox = document.getElementById(visibilityList[section].id);
        if (sectionBox && visibilityList[section].visible) {
            sectionBox.style.visibility = "visible";
        }
        if (visibilityList[section].list) { //lists
            for (let x = visibilityList[section].list.firstItem; x <= visibilityList[section].list.highestVisible; x++) {
                let listElement = document.getElementById(visibilityList[section].list.idStart + x + "-div");
                if (listElement) {
                    listElement.style.visibility = "visible";
                }
            }
        }
    }
    let visibilityNavBar = getNavBarLinks(); // nav bar
    for (navBar in visibilityNavBar) {
        let navBarLink = document.getElementById(visibilityNavBar[navBar].id);   
        if (navBarLink && visibilityNavBar[navBar].visible) {
            navBarLink.style.visibility = "visible";
        }
    }
}
function fishListVisibility() { // shared info fish list
    let inventoryFish = getFishStats(); // fish
    for (fish in inventoryFish) {
        let element = document.getElementById("fish" + fish + "-div");
        if (element && fishStats[fish].visible) {
            element.style.visibility = "visible";
        }
    }
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
    console.log('the ocean is big and I can see it');

    makeNavBarVisible();
    makeSharedInfoVisible();

    visibility = getVisibility();
    for (section in visibility) {
        makeSectionVisible(section);
        if(visibility[section].list) {
            let x = visibility[section].list.firstItem;
            while (x < 100) { // 100 has no significance, needed a condition for it to work
                let div = document.getElementById(visibility[section].list.idStart + x + "-div");
                if(div) {
                    makeListElementVisible(section, x);
                    x++;
                } else {
                    break;
                }
            }
        }
    }
}
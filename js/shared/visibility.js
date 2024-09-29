// VISIBILITY TOGGLE
function visibilityToggle() {
    makeEverythingVisible();
    permanentVisibility(); // DO NOT TOUCH
}

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
            button: {
                buttonId: "buyRod",
                currentButton: 0,
            },
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
    'storage-trading': {
        id: 'storage-trading-div',
        visible: false,
        list: {
            idStart: 'storageTrading',
            firstItem: 1,
            highestVisible: 0,
            button: {
                buttonId: "buyStorage",
                currentButton: 0,
            },
        },
    },
    'habitat-trading': {
        id: 'habitat-trading-div',
        visible: false,
        list: {
            idStart: "habitatTrading",
            firstItem: 1,
            highestVisible: 0,
            button: {
                buttonId: "buyHabitat",
                currentButton: 0,
            },
        },
    },
    'vehicle-trading': {
        id: 'vehicle-trading-div',
        visible: false,
        list: {
            idStart: "vehicleTrading",
            firstItem: 1,
            highestVisible: 0,
            button: {
                buttonId: "buyVehicle",
                currentButton: 0,
            },
        },
    },

    // habitat
    'fish-habitat': {
        id: 'fishCount',
        visible: true,
        list: {
            idStart: "fishInHabitat",
            firstItem: 0,
            highestVisible: -1,
        },
    },

    // vast unknown
    'sir-frog': {
        id: 'frog-box',
        visible: false,
    },

    // shared info
    'fish-list': { 
        id: 'fish-list',
        visible: false,
        list: {
            idStart: "fish",
            firstItem: 0,
            highestVisible: -1,
        },
    },
};
if(!sessionStorage.getItem('visibility')) { sessionStorage.setItem('visibility', JSON.stringify(visibility))}; // initial set
function getVisibility() { // get function
    // console.log(sessionStorage.getItem('visibility'));
    return JSON.parse(sessionStorage.getItem('visibility'));
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
        if (visibility[section].list.button) {
            let buttonDiv = document.getElementById(visibility[section].list.button.buttonId + elementNum);
            if (buttonDiv) {
                buttonDiv.style.visibility = "visible";
            }
        }
    }
    if (elementNum > visibility[section].list.highestVisible) { // for permanent visibility
        visibility[section].list.highestVisible = elementNum;
        setVisibility(visibility);
    }
}

// NAV BAR
function isNavBarLinkVisible(navBarLink) {
    let navBar = get('navBarLinks');
    let navBarIndex = navBar.findIndex(link => link.name === navBarLink);
    let div = document.getElementById(navBar[navBarIndex].id);
    return div && div.style.visibility == 'visible';
}
function makeNavBarLinkVisible(navBarLink) {
    let navBar = get('navBarLinks');
    let navBarIndex = navBar.findIndex(link => link.name === navBarLink);
    let div = document.getElementById(navBar[navBarIndex].id);
    div.style.visibility = 'visible';
    navBar[navBarIndex].visible = true;
    set('navBarLinks', navBar);
}
function makeNavBarLinkInvisible(navBarLink) {
    let navBar = get('navBarLinks');
    let navBarIndex = navBar.findIndex(link => link.name === navBarLink);
    let div = document.getElementById(navBar[navBarIndex].id);
    div.style.visibility = 'hidden';
    navBar[navBarIndex].visible = false;
    set('navBarLinks', navBar);
}

// PERMANENT VISIBILITY FUNCTION
function permanentVisibility() {
    console.log("Fish are forever");
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
            if (visibilityList[section].list.button) { // buttons
                let buttonDiv = document.getElementById(visibilityList[section].list.button.buttonId + visibilityList[section].list.button.currentButton);
                if (buttonDiv) {
                    buttonDiv.style.visibility = "visible";
                }
            }
        }
    }
    let visibilityNavBar = get('navBarLinks'); // nav bar
    for (navBar in visibilityNavBar) {
        let navBarLink = document.getElementById(visibilityNavBar[navBar].id);   
        if (navBarLink && visibilityNavBar[navBar].visible) {
            navBarLink.style.visibility = "visible";
        }
    }
}

// FOR EVERYTHING FUNCTION
function makeSharedInfoVisible() { // makes shared info section visible
    makeSectionVisible("fish-list");
    let fish = get('fishStats');
    for (fishNum in fish) {
        makeListElementVisible("fish-list", fishNum);
    }
}

function makeNavBarVisible() {
    get('navBarLinks');
    for (item in navBarLinks) {
        let link = document.getElementById(navBarLinks[item].id);
        link.style.visibility = 'visible';
    }
}

// EVERYTHING FUNCTION
function makeEverythingVisible() {
    console.log('the ocean is big and I can see it');

    makeNavBarVisible();
    makeSharedInfoVisible();

    visibility = getVisibility(); // sections and lists
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
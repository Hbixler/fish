// NAV BAR
let navBarLinks = [
    {
        name: 'Fish Island',
        link: 'index.html',
    },
    {
        name: 'Habitat',
        link: 'habitat.html',
    },
    {
        name: 'Vast Unknown',
        link: 'vast-unknown.html',
    },
    {
        name: 'Wise Old Mage',
        link: 'wise-old-mage.html',
    },
    {
        name: 'Better Oceans',
        link: 'better-oceans.html',
    },
]

// making nav bar
for(x = 0; x < navBarLinks.length; x++) {
    let navDiv = document.createElement('div');
    
    let navButton = document.createElement('a');
    navButton.innerText = navBarLinks[x].name;
    navButton.setAttribute('href', navBarLinks[x].link);
    navButton.className = 'nav-button';
    navDiv.appendChild(navButton);

    document.getElementById('nav-bar').appendChild(navDiv);
}


// SHARED INFO 
// sand dollars
let sandDollarsShared = getSandDollars();
let sharedInfoSD = document.createElement('div');
sharedInfoSD.innerText = 'Sand Dollars (SD): ';
sharedInfoSD.className = 'shared-info-div'; 

let sandDollarSpan = document.createElement('span');
sandDollarSpan.innerText = sandDollarsShared;
sandDollarSpan.id = 'sandDollars';

document.getElementById('shared-info').appendChild(sharedInfoSD).appendChild(sandDollarSpan);

// equipment
let equipmentShared = getCurrentRod();
let sharedInfoEquipment = document.createElement('div');
sharedInfoEquipment.innerText = 'Equipment: ';
sharedInfoEquipment.className = 'shared-info-div';

let equipmentSpan = document.createElement('span');
equipmentSpan.innerText = equipmentShared.name;
equipmentSpan.id = 'fishingRod'

document.getElementById('shared-info').appendChild(sharedInfoEquipment).appendChild(equipmentSpan);

// vehicles
let currentVehicleShared = getCurrentVehicle();
let sharedInfoVehicles = document.createElement('div');
sharedInfoVehicles.innerText = 'Vehicle: ';
sharedInfoVehicles.className = 'shared-info-div'; 

let vehicleSpan = document.createElement('span');
vehicleSpan.innerText = currentVehicleShared.name;
vehicleSpan.id = 'vehicle';

document.getElementById('shared-info').appendChild(sharedInfoVehicles).appendChild(vehicleSpan);

// fish
let fishList = getFishStats();
let sharedInfoFish = document.createElement('div');
sharedInfoFish.className = 'shared-info-div'; 
sharedInfoFish.id = 'fish-list'
sharedInfoFish.style.visibility = "hidden";
document.getElementById('shared-info').appendChild(sharedInfoFish);

let fishLabel = document.createElement('p');
fishLabel.innerText = 'Fish:';
document.getElementById('fish-list').appendChild(fishLabel);

for(x = 0; x < fishList.length; x++) {
    let fish = document.createElement('p');
    fish.style.visibility = 'hidden';
    fish.id = "fish" + x + "-div";
    fish.innerText = fishList[x].name + ": ";

    let fishCountSpan = document.createElement('span');
    fishCountSpan.innerText = fishList[x].inventoryCount;
    fishCountSpan.id = "fish" + x + "-count";

    document.getElementById('fish-list').appendChild(fish).appendChild(fishCountSpan);
}
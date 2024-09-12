// SHARED INFO 
// sand dollars
let sandDollarsShared = get('sandDollars');
let sharedInfoSD = document.createElement('div');
sharedInfoSD.innerText = 'Sand Dollars (SD): ';
sharedInfoSD.className = 'shared-info-div'; 

let sandDollarSpan = document.createElement('span');
sandDollarSpan.innerText = Math.round(sandDollarsShared);
sandDollarSpan.id = 'sandDollars';

document.getElementById('shared-info').appendChild(sharedInfoSD).appendChild(sandDollarSpan);

// equipment
let equipmentShared = get('currentRod');
let sharedInfoEquipment = document.createElement('div');
sharedInfoEquipment.innerText = 'Equipment: ';
sharedInfoEquipment.className = 'shared-info-div';

let equipmentSpan = document.createElement('span');
equipmentSpan.innerText = equipmentShared.name;
equipmentSpan.id = 'fishingRod'

document.getElementById('shared-info').appendChild(sharedInfoEquipment).appendChild(equipmentSpan);

// habitat
let habitatShared = get('currentHabitat');
let sharedInfoHabitat = document.createElement('div');
sharedInfoHabitat.innerText = "Habitat: ";
sharedInfoHabitat.className = "shared-info-div";

let habitatSpan = document.createElement("span");
habitatSpan.innerText = habitatShared.name;
/* habitatSpan.id = "fishHabitat" */

document.getElementById("shared-info").appendChild(sharedInfoHabitat).appendChild(habitatSpan);

// vehicles
let currentVehicleShared = get('currentVehicle');
let sharedInfoVehicles = document.createElement('div');
sharedInfoVehicles.innerText = 'Vehicle: ';
sharedInfoVehicles.className = 'shared-info-div'; 

let vehicleSpan = document.createElement('span');
vehicleSpan.innerText = currentVehicleShared.name;
vehicleSpan.id = 'vehicle';

document.getElementById('shared-info').appendChild(sharedInfoVehicles).appendChild(vehicleSpan);

// fish
let fishList = get('fishStats');
let sharedInfoFish = document.createElement('div');
sharedInfoFish.className = 'shared-info-div'; 
sharedInfoFish.id = 'fish-list';
sharedInfoFish.style.visibility = "hidden";
document.getElementById('shared-info').appendChild(sharedInfoFish);

let fishLabel = document.createElement('p');
fishLabel.innerText = 'Fish:';
document.getElementById('fish-list').appendChild(fishLabel);

for(let x = 0; x < fishList.length; x++) {
    let fish = document.createElement('p');
    fish.style.visibility = 'hidden';
    fish.id = "fish" + x + "-div";
    fish.innerText = fishList[x].name + ": ";

    let fishCountSpan = document.createElement('span');
    fishCountSpan.innerText = Math.floor(fishList[x].inventoryCount);
    fishCountSpan.id = "fish" + x + "-count";

    let currentRod = get('currentRod');

    let fishProgressSpan = document.createElement('span');
    fishProgressSpan.id = "fish" + x + "-progress";
    fishProgressSpan.style.float = 'right';
    fishProgressSpan.innerText = currentRod.rates[fishList[x].name] + "/s";

    fish.appendChild(fishCountSpan);
    fish.appendChild(fishProgressSpan);

    document.getElementById('fish-list').appendChild(fish);
}

// baits
let baitsList = get('baits');
let sharedInfoBaits = document.createElement('div');
sharedInfoBaits.className = 'shared-info-div';
sharedInfoBaits.id = 'supplies-div';
sharedInfoBaits.style.visibility = "hidden";
document.getElementById('shared-info').appendChild(sharedInfoBaits);

let baitLabel = document.createElement('p');
baitLabel.innerText = "Baits:";
document.getElementById("supplies-div").appendChild(baitLabel);

for (let x = 0; x < baitsList.length; x++) {
    let bait = document.createElement('p');
    bait.style.visibility = "hidden";
    bait.id = "bait" + x + "-div";
    bait.innerText = baitsList[x].name + ": "

    let baitCountSpan = document.createElement('span');
    baitCountSpan.innerText = baitsList[x].count;
    baitCountSpan.id = "bait" + x + "-count";

    bait.appendChild(baitCountSpan);

    document.getElementById("supplies-div").appendChild(bait);
}

// VISIBILITY
fishListVisibility();
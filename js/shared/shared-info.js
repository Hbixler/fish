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

// VISIBILITY
fishListVisibility();
// SHARED INFO 
// sand dollars
let sandDollarsShared = get('sandDollars');
let currentStorageShared = get('currentStorage');
let sharedInfoSD = document.createElement('div');
sharedInfoSD.innerText = 'Sand Dollars (SD): ';
sharedInfoSD.className = 'shared-info-div'; 
sharedInfoSD.id = "shared-info-SD"

let sandDollarSpace = document.createElement('span'); // next line
sandDollarSpace.innerText = "\n";

let sandDollarSpan = document.createElement('span'); // total sand dollar 
sandDollarSpan.innerText = (Math.round(sandDollarsShared).toLocaleString());
sandDollarSpan.id = 'sandDollars';

let sandDollarSlash = document.createElement("span"); // slash between values
sandDollarSlash.innerText = " / ";
sandDollarSlash.id = "sand-dollar-slash";

let sandDollarCapacitySpan = document.createElement('span'); // sand dollar capacity based on storage
sandDollarCapacitySpan.id = "sand-dollar-capacity";
sandDollarCapacitySpan.innerText = currentStorageShared.capacities["Sand Dollars"].toLocaleString();

document.getElementById('shared-info').appendChild(sharedInfoSD).appendChild(sandDollarSpace);
document.getElementById("shared-info-SD").appendChild(sandDollarSpan);
document.getElementById("shared-info-SD").appendChild(sandDollarSlash);
document.getElementById("shared-info-SD").appendChild(sandDollarCapacitySpan);

// storage
let storageShared = get('currentStorage');
let sharedInfoStorage = document.createElement('div');
sharedInfoStorage.innerText = 'Storage: ';
sharedInfoStorage.className = 'shared-info-div';

let storageSpan = document.createElement('span');
storageSpan.innerText = storageShared.name;
storageSpan.id = 'storage'

document.getElementById('shared-info').appendChild(sharedInfoStorage).appendChild(storageSpan);

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
fishLabel.innerText = 'Fish: ';
fishLabel.id = "fish-label";
document.getElementById('fish-list').appendChild(fishLabel);

let fishSpace = document.createElement("span"); // current space taken up by fish
fishSpace.id = "fish-space";
fishSpace.innerText = howBigAreMyFish();

let fishSlash = document.createElement("span"); // slash between values
fishSlash.innerText = " / ";
fishSlash.id = "fish-slash";

let fishCapacity = document.createElement("span"); // total fish capacity based on storage
fishCapacity.id = "fish-capacity";
fishCapacity.innerText = currentStorageShared.capacities["Fish"];

document.getElementById("fish-label").appendChild(fishSpace);
document.getElementById("fish-label").appendChild(fishSlash);
document.getElementById("fish-label").appendChild(fishCapacity);

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
baitLabel.innerText = "Baits: ";
baitLabel.id = "bait-label";
document.getElementById("supplies-div").appendChild(baitLabel);

let baitSpace = document.createElement("span"); // current space taken up by baits
baitSpace.id = "bait-space";
baitSpace.innerText = howBigIsMyBait();

let baitSlash = document.createElement("span"); // slash between values
baitSlash.innerText = " / "
baitSlash.id = "bait-slash";

let baitCapacity = document.createElement("span"); // total bait capacity based on storage
baitCapacity.id = "bait-capacity";
baitCapacity.innerText = currentStorageShared.capacities["Baits"];

document.getElementById("bait-label").appendChild(baitSpace);
document.getElementById("bait-label").appendChild(baitSlash);
document.getElementById("bait-label").appendChild(baitCapacity);

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
/* fishListVisibility(); */
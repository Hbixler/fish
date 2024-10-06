// fish
let fishStats = get('fishStats');
let fishSpaceReference = document.createElement('div');
fishSpaceReference.className = 'shared-info-div'; 
fishSpaceReference.id = 'fish-reference-space';
fishSpaceReference.style.visibility = "hidden";
document.getElementById('references').appendChild(fishSpaceReference);

let fishReferenceLabel = document.createElement('p');
fishReferenceLabel.innerText = 'Fish Space Reference: ';
fishReferenceLabel.id = "fish-space-label";
document.getElementById('fish-reference-space').appendChild(fishReferenceLabel);

for(let x = 0; x < fishStats.length; x++) {
    let fish = document.createElement('p');
    fish.style.visibility = 'hidden';
    fish.id = "fishSpace" + x + "-div";
    fish.innerText = fishStats[x].name + ": " + fishStats[x].size;

    document.getElementById('fish-reference-space').appendChild(fish);
}

// bait
let baitStats = get('baits');
let baitSpaceReference = document.createElement('div');
baitSpaceReference.className = "shared-info-div";
baitSpaceReference.id = 'bait-reference-space';
baitSpaceReference.style.visibility = "hidden";
document.getElementById('references').appendChild(baitSpaceReference);

let baitReferenceLabel = document.createElement('p');
baitReferenceLabel.innerText = "Bait Space Reference: ";
baitReferenceLabel.id = "bait-space-label";
document.getElementById("bait-reference-space").appendChild(baitReferenceLabel);

for (let x = 0; x < baitStats.length; x++) {
    let bait = document.createElement('p');
    bait.style.visibility = "hidden";
    bait.id = "baitSpace" + x + "-div";
    bait.innerText = baitStats[x].name + ": " + baitStats[x].size;

    document.getElementById("bait-reference-space").appendChild(bait);
}
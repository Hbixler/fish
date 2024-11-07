// Keeps everything visible across pages
permanentVisibility();

let currentHabitat = get('currentHabitat');
let revenue = get('revenue');
let fishStats = get('fishStats');
let operations = [
    {
        name: "plus",
        symbol: "+"
    },
    {
        name: "minus",
        symbol: "-",
    },
]

// sets original fish space being taken up as 0
let fishInHabitat = 0;
let fishInHabitatSpan = document.getElementById('fishInHabitat');
fishInHabitatSpan.innerText = fishInHabitat;

// Display revenue
updateRevenue(revenue);
howBigAreMyHabitatFish();

// HTML GENERATION 

// fish in habitat counts and buttons
let newRow = document.createElement("div"); // making overall div that everything goes
newRow.id = "newRow";
newRow.className = "row";
document.getElementById("fishCount").appendChild(newRow)

let columns = 2; // making columns
for (let x = 0; x < columns; x++) {
    let columnDiv = document.createElement("div");
    columnDiv.className = "column";
    columnDiv.id = "column" + x;

    document.getElementById("newRow").appendChild(columnDiv);
}

for (let x = 0; x < fishStats.length; x++) { // making each fish's div
    let fishInHabitatDiv = document.createElement("div"); 
    fishInHabitatDiv.className = "row";
    fishInHabitatDiv.id = "fishInHabitat" + x + "-div";
    fishInHabitatDiv.style.visibility = "hidden";

    let fishLabelDiv = document.createElement("div");
    fishLabelDiv.className = "column fish-count";

    let fishLabel = document.createElement("p");

    let fishNameLabel = document.createElement("span");
    fishNameLabel.innerText = fishStats[x].name;
    fishNameLabel.classList.add('tooltipParent');
    fishNameLabel.id = "fish" + x + "-habitat";

    fishNameLabel.setAttribute('data-tooltip', "Size: " + fishStats[x].size)
    fishNameLabel.setAttribute('data-tooltip-2', "Revenue: " + fishStats[x].revenue + " SD/s");
    fishNameLabel.setAttribute('data-tooltip-position', 'left');
    fishLabel.appendChild(fishNameLabel);

    let fishCountSpan = document.createElement("span");
    fishCountSpan.id = "fish-" + x + "-count";
    fishCountSpan.innerText = ": " + fishStats[x].habitatCount;

    fishLabel.appendChild(fishCountSpan);
    fishLabelDiv.appendChild(fishLabel);

    buttonDiv = document.createElement("div");
    buttonDiv.className = "button-col";

    for (let y = 0; y < operations.length; y++) { // plus and minus buttons
        let operationDiv = document.createElement("div");
        operationDiv.className = "row";

        operationButton = document.createElement("button");
        operationButton.className = "plus-minus";
        operationButton.id = operations[y].name;
        operationButton.innerText = operations[y].symbol;
        operationButton.setAttribute("onclick", operations[y].name + "(" + x + ")");
        
        operationDiv.appendChild(operationButton);
        buttonDiv.appendChild(operationDiv);
    }

    fishInHabitatDiv.appendChild(fishLabelDiv);
    fishInHabitatDiv.appendChild(buttonDiv);

    let col = 0; // decides which column each fish goes into
    if ((x + 1) <= Math.ceil(fishStats.length / columns)) {
        col = 0;
    } else {
        col = 1;
    }

    document.getElementById("column" + col).appendChild(fishInHabitatDiv);

}

// FUNCTIONS

// setting habitat name and fish message
updateHabitat(currentHabitat);
updateFishMessage();

// buttons for adding and removing fish from habitat
function plus(fishNumber) {
    let fishStats = get('fishStats');
    let revenue = get('revenue');

    newSpace = fishInHabitat + fishStats[fishNumber].size; // obj = arr.find(o => o.name === 'string 1')
    if (fishStats[fishNumber].inventoryCount >= 1 && newSpace <= currentHabitat.capacity) { // only if there is fish in the inventory to put in the habitat and it wouldn't exceed the maximum space
        let inventoryCount = fishStats[fishNumber].inventoryCount - 1; // takes fish out of inventory
        let habitatCount = fishStats[fishNumber].habitatCount + 1; // puts fish into habitat
        
        updateNumFish(fishNumber, habitatCount); // change fish displayed in Habitat
        updateFishCount(fishNumber, inventoryCount); // change fish displayed in Inventory
        howBigAreMyHabitatFish(); // recalculates and displays how much space fish are taking up
        updateRevenue(revenue + fishStats[fishNumber].revenue); // change revenue
        updateFishMessage(); // updates habitat message
    }
    
}
function minus(fishNumber) {
    let fishStats = get('fishStats');
    let revenue = get('revenue');

    let inventoryStorage = howBigAreMyFish();
    let currentStorage = get("currentStorage").capacities["Fish"];

    if(fishStats[fishNumber].habitatCount >= 1 && inventoryStorage + fishStats[fishNumber].size <= currentStorage) { // can't have negative fish or too many in the inventory
        let habitatCount = fishStats[fishNumber].habitatCount - 1; // takes fish out of habitat
        let inventoryCount = fishStats[fishNumber].inventoryCount + 1; // puts fish back into inventory

        updateNumFish(fishNumber, habitatCount) // change fish displayed in Habitat
        updateFishCount(fishNumber, inventoryCount) // change fish displayed in Inventory
        howBigAreMyHabitatFish(); // recalculates and displays how much space fish are taking up
        updateRevenue(revenue - fishStats[fishNumber].revenue) // update revenue
        updateFishMessage(); // updates habitat message
    }
}



// Visibility toggle -> in visibility.js
visibilityToggle()
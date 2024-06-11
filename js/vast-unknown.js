// VAST UNKNOWN - PUT SEQUENCE BACK: NENWWNNEESW
let frogPattern = "N";
let frogToOldMan = "EESSSESWWSWNNWSSSEESWWWNN";
let currentSailPattern = "";
let hasDirections = false;
updateVastUnknownMessage("The world is bleak. Ocean, behind. Ocean, ahead. You are but a small mite in the grand scheme of the vast unknown.");

function sail(direction) {
    if (currentSailPattern == "XXX") {
        // User has already crashed and is stranded on a rock.
        updateVastUnknownMessage("No point in wandering around now. May as well start over...")
    }
    else {
        currentSailPattern += direction;
        if (currentSailPattern == frogPattern.slice(0,currentSailPattern.length)) {
            // Correct choice!
            updateVastUnknownMessage("You continue sailing, uncertain of the perils that await beyond.");

            if (currentSailPattern == frogPattern) {
                // Found the frog!
                updateVastUnknownMessage("You found a frog!");

                makeFrogVisible();
                updateFrogMessage('Ribbit! Would you like my assistance getting to your next destination?');
                sirFrogTalks();
            }
        }
        else {
            // Incorrect choice
            updateVastUnknownMessage("You crashed into a rock. Better luck next time!");
            currentSailPattern = "XXX";
        }
    }
}

function reset() {
    currentSailPattern = "";
    updateVastUnknownMessage("You set forth again, ready to tackle the world.")
}

// THE HONOURABLE SIR FROG
function buySail() { 
    let vehicles = getVehicles();
    let cost = vehicles[2].cost;
    let sandDollars = getSandDollars();

    if (cost <= sandDollars) {
        sandDollars -= cost;
        updateSandDollars(sandDollars);
        updateVehicle(2);
        updateFrogMessage("You'll need this for the journey ahead. Best of luck!");
        sirFrogTalks();
    }
}

function clearButtonColumns() {
    for (let x = 1; x <= 3; x++) {
        buttonCol = document.getElementById('button-column-' + x);
        if (buttonCol.firstChild) {
            buttonCol.firstChild.remove();
        }
    }
}

function dummyFunction() { // REMOVE THIS ONCE ALL FUNCTIONS ARE REPLACED
    console.log('not a real function');
}

function sirFrogTalks() {
    let vehicles = getVehicles();
    let currentVehicle = getCurrentVehicle();
    clearButtonColumns();

    // Create ask for directions button
    console.log(hasDirections);
    if (!hasDirections) {
        let askForDirections = document.createElement('button');
        askForDirections.innerText = 'Ask For Directions';
        askForDirections.onclick = ask4Directions;

        buttonOneCol = document.getElementById('button-column-1');
        buttonOneCol.appendChild(askForDirections);
    }

    // Create buy sail button
    if (currentVehicle.name != 'Sailboat') {
        let buyingSail = document.createElement('button');
        buyingSail.onclick = buySail;

        let vehicleCost = document.createElement('span');
        vehicleCost.innerText = 'Buy Sail (' + vehicles[1].cost.toLocaleString() + ' SD)'
        buyingSail.appendChild(vehicleCost);
        
        buttonTwoCol = document.getElementById('button-column-2');
        buttonTwoCol.appendChild(buyingSail);
    }

    // Create punch frog button
    punchFrog = document.createElement('button');
    punchFrog.innerText = 'Punch Frog with Passion';
    punchFrog.onclick = punchTheFrog;
    
    buttonThreeCol = document.getElementById('button-column-3');
    buttonThreeCol.appendChild(punchFrog);
}

function ask4Directions() {
    clearButtonColumns();
    updateFrogMessage("Cuestan diez narvales. ¿Estás segure?");

    // Create yes button
    yesButton = document.createElement('button');
    yesButton.innerText = 'Yes';
    yesButton.onclick = getDirections;

    buttonOneCol = document.getElementById('button-column-1');
    buttonOneCol.appendChild(yesButton);

    // Create no button
    noButton = document.createElement('button');
    noButton.innerText = 'No';
    noButton.onclick = noDirectionsThanks;

    buttonThreeCol = document.getElementById('button-column-3');
    buttonThreeCol.appendChild(noButton);
}

function getDirections() {
    let fishStats = getFishStats();
    narwhalIndex = fishStats.findIndex(fish => fish.name == 'Narwhal');
    if (fishStats[narwhalIndex].inventoryCount >= 10) {
        // Subtract narwhals from inventory
        updateFishCount(narwhalIndex, fishStats[narwhalIndex].inventoryCount - 10);

        // Update with directions
        hasDirections = true;
        updateFrogMessage("Thanks! From here, the pattern is " + frogToOldMan + ". It's quite a long ways though, so make sure you have sailboat!");
        updateDirectionsMessage(frogToOldMan);
    }
    else {
        updateFrogMessage("Looks like you don't have enough narwhals! Come back when you have more.")
    }
    sirFrogTalks();
}

function noDirectionsThanks() {
    clearButtonColumns(); 
    sirFrogTalks();
    updateFrogMessage("Ah okay :(. Need anything else?")
}

function punchTheFrog() {
    clearButtonColumns();
    updateFrogMessage("Merde! Donne-moi cinq mille clypéasters pour ta liberté"); // If Kai learns how to spell other french swear words, we can replace this
    
    // Make sail buttons go away, as you cannot sail until you do an action
    document.getElementById('sail-north').disabled = true;
    document.getElementById('sail-west').disabled = true;
    document.getElementById('sail-south').disabled = true;
    document.getElementById('sail-east').disabled = true;
    document.getElementsByClassName('restart')[0].disabled = true;


    // Create pay button
    payButton = document.createElement('button');
    payButton.innerText = 'Pay Frog';
    payButton.onclick = payTheFrog;

    buttonOneCol = document.getElementById('button-column-1');
    buttonOneCol.appendChild(payButton);

    // Create kick button
    kickButton = document.createElement('button');
    kickButton.innerText = 'Kick Frog';
    kickButton.onclick = kickTheFrog;

    buttonThreeCol = document.getElementById('button-column-2');
    buttonThreeCol.appendChild(kickButton);

    // Create seduce frog button
    seduceButton = document.createElement('button');
    seduceButton.innerText = 'Seduce Frog';
    seduceButton.onclick = seduceTheFrog;

    buttonThreeCol = document.getElementById('button-column-3');
    buttonThreeCol.appendChild(seduceButton);
}

function enableSailing() {
    document.getElementById('sail-north').disabled = false;
    document.getElementById('sail-west').disabled = false;
    document.getElementById('sail-south').disabled = false;
    document.getElementById('sail-east').disabled = false;
    document.getElementsByClassName('restart')[0].disabled = false;
}

function payTheFrog() {
    cost = 5000;
    
    let sandDollars = getSandDollars();

    if (cost <= sandDollars) {
        sandDollars -= cost;
        updateSandDollars(sandDollars);
        updateFrogMessage("You are forgiven... for now. Good luck on your travels.")

        clearButtonColumns();
        sirFrogTalks();
        enableSailing();
    }
    else {
        updateFrogMessage('It appears that you are broke. Better luck next time.')
    }
}

function kickTheFrog() {
    updateVehicle(0);
    clearButtonColumns();
    sirFrogTalks();
    enableSailing();
    updateFrogMessage('Sassy frog line about taking rowboat')
}

function seduceTheFrog() {
    clearButtonColumns();
    sirFrogTalks();
    enableSailing();
    updateFrogMessage('I am going to croak without you in my life.');
}
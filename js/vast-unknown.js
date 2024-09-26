// Keeps everything visible across pages
permanentVisibility();

// VAST UNKNOWN - PUT SEQUENCES BACK: NENWWNNEESW    EESSSESWWSWNNWSSSEESWWWNN
let frogPattern = "N";
let frogToOldMan = "S";
let currentSailPattern = "";
let hasDirections = false;
let hasFoundFrog = false;
let defaultFrogMessage = 'Ribbit! Would you like my assistance getting to your next destination? You can get there without my directions, but you will definitely need a sail.';
let stupidSailMessage = 'Sailing without a sail? Isn\'t that called rowing? Such foolishness!';

updateVastUnknownMessage("The world is bleak. Ocean, behind. Ocean, ahead. You are but a small mite in the grand scheme of the vast unknown.");

function sail(direction) {
    let currentVehicle = get('currentVehicle');
    let vehicles = get('vehicles');
    if (currentSailPattern == "XXX") {
        // User has already crashed and is stranded on a rock.
        updateVastUnknownMessage("No point in wandering around now. May as well start over...")
    }
    else {
        currentSailPattern += direction;
        let neededPattern = hasFoundFrog ? frogToOldMan : frogPattern;

        if (currentSailPattern == neededPattern.slice(0,currentSailPattern.length)) {
            // Correct choice!
            updateVastUnknownMessage("You continue sailing, uncertain of the perils that await beyond.");

            if (currentSailPattern == frogPattern) {
                // Found the frog!
                updateVastUnknownMessage("You found a frog!");

                hasFoundFrog = true;
                currentSailPattern = ""
                
                makeSectionVisible("sir-frog");
                updateFrogMessage(defaultFrogMessage);
                sirFrogTalks();
            }
            else if (currentSailPattern == frogToOldMan) {
                if (currentVehicle.name === vehicles[2].name) {
                    // Found the old man!
                    updateVastUnknownMessage("In the distance, an old man huddles on top of a rock. You approach with caution.");
                }
                else {
                    updateFrogMessage(stupidSailMessage);
                }
            }
        }
        else {
            // Incorrect choice
            updateVastUnknownMessage("You crashed into a rock. Better luck next time!");
            currentSailPattern = "XXX";
            if (hasFoundFrog && currentVehicle.name != vehicles[2].name) {
                updateFrogMessage(stupidSailMessage);
            }
        }
    }
}

function reset() {
    currentSailPattern = "";
    updateVastUnknownMessage("You set forth again, ready to tackle the world.")
    updateFrogMessage(defaultFrogMessage);
}

// THE HONOURABLE SIR FROG
function buySail() { 
    let vehicles = get('vehicles');
    let cost = vehicles[2].cost;
    let sandDollars = get('sandDollars');
    // console.log(cost)

    if (cost <= sandDollars) {
        // console.log("Buying a sail")
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

function sirFrogTalks() {
    let vehicles = get('vehicles');
    let currentVehicle = get('currentVehicle');
    let sandDollars = get('sandDollars');
    clearButtonColumns();

    // Create ask for directions button
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
        buyingSail.id = 'buy-sail-button';
        buyingSail.disabled = sandDollars < 500;


        let vehicleCost = document.createElement('span');
        vehicleCost.innerText = 'Buy Sail (' + vehicles[2].cost.toLocaleString() + ' SD)';
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
    let fishStats = get('fishStats');
    clearButtonColumns();
    updateFrogMessage("Cuestan diez narvales. ¿Estás segure?");

    // Create yes button
    yesButton = document.createElement('button');
    yesButton.innerText = 'Yes';
    yesButton.onclick = getDirections;
    yesButton.id = 'frog-yes-button';
    let narwhalIndex = fishStats.findIndex(fish => fish.name == 'Narwhal');
    yesButton.disabled = fishStats[narwhalIndex].inventoryCount < 10;

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
    let fishStats = get('fishStats');
    let narwhalIndex = fishStats.findIndex(fish => fish.name == 'Narwhal');
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

    buttonTwoCol = document.getElementById('button-column-2');
    buttonTwoCol.appendChild(kickButton);

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
    
    let sandDollars = get('sandDollars');

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

function backToTheIsland() {
    let backToTheIsland = document.createElement('button');
    backToTheIsland.innerText = 'Back to Fish Island';
    backToTheIsland.onclick = fishIsland;

    let buttonTwoCol = document.getElementById('button-column-2');
    buttonTwoCol.appendChild(backToTheIsland); 
    
    let navButtons = document.getElementsByClassName('nav-button');
    for (button of navButtons) {
        button.setAttribute('href', 'javascript:void(0)');
    }
}

function fishIsland() {
    makeNavBarLinkInvisible("Vast Unknown");

    visibility = getVisibility();
    visibility['vehicle-trading'].list.button.currentButton = 1;
    setVisibility(visibility);

    location.href = "index.html";
}

function kickTheFrog() {
    updateVehicle(0);
    /* makeListElementVisible("vehicle-trading", 1); */ // make buy button visible for buying a rowboat - this doesn't currently work
    

    clearButtonColumns();
    updateFrogMessage('Who raised you? I\'ll be taking that rowboat to get back to my rock and keeping it as a form of your apology for your terrible manners. Guess you\'ll need to buy another one back on fish island. Sounds like a you problem.')
    backToTheIsland();
}

function seduceTheFrog() {
    clearButtonColumns();
    sirFrogTalks();
    enableSailing();
    updateFrogMessage('I am going to croak without you in my life.');
}

// Visibility toggle -> in visibility.js
visibilityToggle()
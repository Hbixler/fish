// VAST UNKNOWN - PUT SEQUENCE BACK: NENWWNNEESW
let frogPattern = "N";
// CAN USE LATER: let frogToOldMan = "EESSSESWWSWNNWSSSEESWWWNN";
let currentSailPattern = "";
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

                // TODO: Make frog visible here
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
function buySail() { // FIX THIS
    let cost = vehicles[1].cost;
    let sandDollars = getSandDollars();

    if (cost <= sandDollars) {
        sandDollars -= cost;
        updateSandDollars(sandDollars);
        updateVehicle(vehicles[1]);
        updateFrogMessage("You'll need this for the journey ahead. Best of luck!")

        // Get rid of button
        let buyButton = document.getElementById('buyVehicle1');
        buyButton.style.visibility = 'hidden';
    }
}

/*
span = document.createElement('span')
div = document.createElement('div')
button = document.createElement('button')

div.classList.add('row')

div.appendChild(span)

<div><span></span></div>


<button onclick="yes">Yes</button>
*/

function clearButtonColumns() {
    for (let x = 1; x <= 3; x++) {
        buttonCol = document.getElementById('button-column-' + x);
        buttonCol.firstChild.remove();
    }
}

function dummyFunction() {
    console.log('not a real function');
}

function sirFrogTalks() {
    let vehicles = getVehicles();
    updateFrogMessage('Ribbit! Would you like my assistance getting to your next destination?');
    clearButtonColumns();

    // Create ask for directions button
    askForDirections = document.createElement('button');
    askForDirections.innerText = 'Ask For Directions';
    askForDirections.onclick = askForDirections;

    buttonOneCol = document.getElementById('button-column-1');
    buttonOneCol.appendChild(askForDirections);

    // Create buy sail button
    buySail = document.createElement('button');
    buySail.onclick = buySail;

    let vehicleCost = document.createElement('span');
    vehicleCost.innerText = 'Buy Sail (' + vehicles[1].cost.toLocaleString() + ' SD)'
    buySail.appendChild(vehicleCost);
    
    buttonTwoCol = document.getElementById('button-column-2');
    buttonTwoCol.appendChild(buySail);

    // Create punch frog button
    punchFrog = document.createElement('button');
    punchFrog.innerText = 'Punch Frog with Passion';
    punchFrog.onclick = dummyFunction;
    
    buttonThreeCol = document.getElementById('button-column-3');
    buttonThreeCol.appendChild(punchFrog);
}

function askForDirections() {
    updateFrogMessage("Cuestan diez narvales. ¿Estás segure?");

    // Create yes button
    yesButton = document.createElement('button');
    yesButton.innerText = 'Yes';
    yesButton.onclick = dummyFunction();

    buttonOneCol = document.getElementById('button-column-1');
    buttonOneCol.appendChild(yesButton);

    // Create no button
    noButton = document.createElement('button');
    noButton.innerText = 'No';
    noButton.onclick = dummyFunction();

    buttonThreeCol = document.getElementById('button-column-3');
    buttonThreeCol.appendChild(noButton);
}
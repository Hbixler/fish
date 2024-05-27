// VAST UNKNOWN
let frogPattern = "NENWWNNEESW";
// CAN USE LATER: let frogToOldMan = "EESSSESWWSWNNWSSSEESWWWNN";
let currentSailPattern = "";
updateMessage("The world is bleak. Ocean, behind. Ocean, ahead. You are but a small mite in the grand scheme of the vast unknown.");

function sail(direction) {
    if (currentSailPattern == "XXX") {
        // User has already crashed and is stranded on a rock.
        updateMessage("No point in wandering around now. May as well start over...")
    }
    else {
        currentSailPattern += direction;
        if (currentSailPattern == frogPattern.slice(0,currentSailPattern.length)) {
            // Correct choice!
            updateMessage("You continue sailing, uncertain of the perils that await beyond.");

            if (currentSailPattern == frogPattern) {
                // Found the frog!
                updateMessage("You found a frog!");
            }
        }
        else {
            // Incorrect choice
            updateMessage("You crashed into a rock. Better luck next time!");
            currentSailPattern = "XXX";
        }
    }
}

function reset() {
    currentSailPattern = "";
    updateVastUnknownMessage("You set forth again, ready to tackle the world.")
}

// SIR FROG THE GREAT
function buySail(cost) { // FIX THIS
    currentVehicle = 'Sailboat';
    let sandDollars = getSandDollars();
    sandDollars -= cost;
    updateSandDollars(sandDollars);
}
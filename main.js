console.log("I am a fish");

// Sand dollar count
let sandDollars = 0;
let sandDollarsSpan = document.getElementById('sandDollars');
sandDollarsSpan.innerText = sandDollars;

// Income count
let income = 0;
let incomeSpan = document.getElementById('income');
incomeSpan.innerText = income;

// fish size
let fishSize = {
    'goldfish': 1,
    'swordfish': 8,
    'shark': 12,
    'whale': 30,
    'narwhal': 60
}

// fish count
let fishCount = {
    'numGoldfish': 0,
    'numSwordfish': 0,
    'numShark': 0,
    'numWhale': 0,
    'numNarwhal': 0
};

for (fish in fishCount) {
    let fishSpan = document.getElementById(fish);
    fishSpan.innerText = fishCount[fish];
}

// go fishing button
function goFishing() {
    fishCount['numGoldfish'] = fishCount['numGoldfish'] + 1;
    let goldfishSpan = document.getElementById('numGoldfish');
    goldfishSpan.innerText = fishCount['numGoldfish'];
}

// bait count
let baitCount = {
    'numGummyWorms': 0,
    'numSaltineCrackers': 0,
    'numChickenNuggets': 0,
    'numCakeSlices': 0
}

for (bait in baitCount) {
    let baitSpan = document.getElementById(bait);
    baitSpan.innerText = baitCount[bait];
}

// Fishing rod values
let fishingRods = [// rates are in fish/second
    {
        name: "A Fishing Rod",
        rates: {
            goldfish: 0.5,
            swordfish: 0,
            shark: 0,
            whale: 0,
            narwhal: 0
        }
    },
    {
        name: "A Better Fishing Rod",
        rates: {
            goldfish: 1,
            swordfish: 0.25,
            shark: 0,
            whale: 0,
            narwhal: 0
        }
    },
    {
        name: "An Even Better Fishing Rod",
        rates: {
            goldfish: 2,
            swordfish: 1,
            shark: 0.5,
            whale: 0.25,
            narwhal: 0
        }
    },
    {
        name: "The Best Fishing Rod",
        rates: {
            goldfish: 4,
            swordfish: 2,
            shark: 1,
            whale: 0.5,
            narwhal: 0.01
        }
    }
]

let currentRod = fishingRods[0];
let fishingRodSpan = document.getElementById("fishingRod");
fishingRodSpan.innerText = currentRod.name;

for (let x = 1; x < fishingRods.length; x++) {
    let fishingRodSpan = document.getElementById("rod" + x);
    fishingRodSpan.innerText = fishingRods[x].name;
}

function buyRod(fishingRod) {
    currentRod = fishingRods[fishingRod];
    let fishingRodSpan = document.getElementById("fishingRod");
    fishingRodSpan.innerText = currentRod.name;
}

// in habitat count
let habitatFishCount = {
    'numGoldfishHabitat': 0,
    'numSwordfishHabitat': 0,
    'numSharkHabitat': 0,
    'numWhaleHabitat': 0,
    'numNarwhalHabitat': 0
}

for (habitatFishNum in habitatFishCount) {
    let fishSpan = document.getElementById(habitatFishNum);
    fishSpan.innerText = habitatFishCount[habitatFishNum];
}

// Fishing habitat values
let fishHabitats = [
    {
        name: "Fish Bowl",
        capacity: 5
    },
    {
        name: "Fish Tank",
        capacity: 25
    },
    {
        name: "Aquarium",
        capacity: 200
    }
]

let currentHabitat = fishHabitats[0];
let fishHabitatSpan = document.getElementById("fishHabitat");
fishHabitatSpan.innerText = currentHabitat.name;

// habitat labels in trading
for (let x = 1; x < fishHabitats.length; x++) {
    let fishHabitatSpan = document.getElementById("habitat" + x);
    fishHabitatSpan.innerText = fishHabitats[x].name;
}

// buying habitats
function buyHabitat(fishHabitat) {
    currentHabitat = fishHabitats[fishHabitat];
    let fishHabitatSpan = document.getElementById("fishHabitat");
    fishHabitatSpan.innerText = currentHabitat.name;
} 

// buttons for adding and removing fish from habitat
function plus(fishName) {
    habitatFishCount[fishName] = habitatFishCount[fishName] + 1;
    let fishSpan = document.getElementById(fishName);
    fishSpan.innerText = habitatFishCount[fishName];
}

function minus(fishName) {
    if(habitatFishCount[fishName] > 0) {
        habitatFishCount[fishName] = habitatFishCount[fishName] - 1;
    }
    let fishSpan = document.getElementById(fishName);
    fishSpan.innerText = habitatFishCount[fishName];
}
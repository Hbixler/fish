console.log("I am a fish"); // MAXIMUM IMPORTANCE - DO NOT REMOVE

// SPEED OF GAME
speedInitial = 5; // intervals per second
if(!sessionStorage.getItem('speed')) {sessionStorage.setItem('speed', JSON.stringify(speedInitial))}; // initial set
function getSpeed() { // get function
    return JSON.parse(sessionStorage.getItem('speed'))
}; 

// SAND DOLLARS
let sandDollarsInitial = 0; // initial sand dollars
if(!sessionStorage.getItem('sandDollars')) {sessionStorage.setItem('sandDollars', JSON.stringify(sandDollarsInitial))}; // initial set
function getSandDollars() { // get function
    return JSON.parse(sessionStorage.getItem('sandDollars'))
};
function setSandDollars(newSandDollars) { // set function
    sessionStorage.setItem('sandDollars', JSON.stringify(newSandDollars))
};

// REVENUE
let revenueInitial = 0; // initial revenue
if(!sessionStorage.getItem('revenue')) {sessionStorage.setItem('revenue', JSON.stringify(revenueInitial))}; // intial set
function getRevenue() { // get function
    return JSON.parse(sessionStorage.getItem('revenue'))
}; 
function setRevenue(newRevenue) { // set function
    sessionStorage.setItem('revenue', JSON.stringify(newRevenue))
}; 

// FISH STATS
let fishStatsInitial = [ // original fish stats array - revenue is in SD/second
    {
        name: 'Goldfish',
        size: 1,
        cost: 1,
        revenue: 0.1,
        bait: "",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
    {
        name: 'Swordfish',
        size: 8,
        cost: 5,
        revenue: 1,
        bait: "Gummy Worms",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
    {
        name: 'Shark',
        size: 12,
        cost: 8,
        revenue: 2,
        bait: "Saltine Crackers",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
    {
        name: 'Whale',
        size: 30,
        cost: 22,
        revenue: 3,
        bait: "Chicken Nuggets",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
    {
        name: 'Narwhal',
        size: 60,
        cost: 350,
        revenue: 6.5,
        bait: "Cake Slices",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
]
if(!sessionStorage.getItem('fishStats')) {sessionStorage.setItem('fishStats', JSON.stringify(fishStatsInitial));} // initial set
function getFishStats() { // get function
    return JSON.parse(sessionStorage.getItem('fishStats'));
} 
function setFishStats(newFishStats) { // set function
    sessionStorage.setItem('fishStats', JSON.stringify(newFishStats));
} 

// FISHING RODS
let fishingRodStats = [// rates are in fish/second
    {
        name: "Bare Hands",
        rates: {
            "Goldfish": 0,
            "Swordfish": 0,
            "Shark": 0,
            "Whale": 0,
            "Narwhal": 0,
        },
        cost: 0,
        unlocked: true,
    },
    {
        name: "A Fishing Rod",
        rates: {
            'Goldfish': 0.5,
            'Swordfish': 0.25,
            'Shark': 0,
            'Whale': 0,
            'Narwhal': 0,
        },
        cost: 25,
        unlocked: false,
    },
    {
        name: "A Better Fishing Rod",
        rates: {
            'Goldfish': 1,
            'Swordfish': 0.5,
            'Shark': 0.25,
            'Whale': 0,
            'Narwhal': 0,
        },
        cost: 50,
        unlocked: false,
    },
    {
        name: "An Even Better Fishing Rod",
        rates: {
            'Goldfish': 2,
            'Swordfish': 1,
            'Shark': 0.5,
            'Whale': 0.25,
            'Narwhal': 0,
        },
        cost: 100,
        unlocked: false,
    },
    {
        name: "The Best Fishing Rod",
        rates: {
            'Goldfish': 4,
            'Swordfish': 2,
            'Shark': 1,
            'Whale': 0.5,
            'Narwhal': 0.02,
        },
        cost: 300,
        unlocked: false,
    },
]
if(!sessionStorage.getItem('fishingRods')) {sessionStorage.setItem('fishingRods', JSON.stringify(fishingRodStats))}; // initial set
function getFishingRods() { // get function
    return JSON.parse(sessionStorage.getItem('fishingRods'))
}; 
function setFishingRods(newFishingRods) { // set function
    sessionStorage.setItem('fishingRods', JSON.stringify(newFishingRods))
}; 

// CURRENT FISHING ROD
let currentRodStats = fishingRodStats[0]; // sets original rod to bare hands
if(!sessionStorage.getItem('currentRod')) {sessionStorage.setItem('currentRod', JSON.stringify(currentRodStats))}; // initial set
function getCurrentRod() { // get function
    return JSON.parse(sessionStorage.getItem('currentRod'))
}; 
function setCurrentRod(currentRod) { // set function
    sessionStorage.setItem('currentRod', JSON.stringify(currentRod))
}; 

// HABITATS
let fishHabitatsInitial = [
    {
        name: "Fish Bowl",
        capacity: 10,
        cost: 50,
        unlocked: false,
    },
    {
        name: "Fish Tank",
        capacity: 25,
        cost: 100,
        unlocked: false,
    },
    {
        name: "Aquarium",
        capacity: 200,
        cost: 300,
        unlocked: false,
    },
    {
        name: "Small Lake",
        capacity: 400,
        cost: 500,
        unlocked: false,
    }
]
if(!sessionStorage.getItem('fishHabitats')) {sessionStorage.setItem('fishHabitats', JSON.stringify(fishHabitatsInitial))}; // initial set
function getFishHabitats() { // get function
    return JSON.parse(sessionStorage.getItem('fishHabitats'))
};
function setFishHabitats(newFishHabitats) { // set function
    sessionStorage.setItem('fishHabitats', JSON.stringify(newFishHabitats))
};

// CURRENT HABITAT
let currentHabitatInitial = {}; // sets original habitat to nothing
if(!sessionStorage.getItem('currentHabitat')) {sessionStorage.setItem('currentHabitat', JSON.stringify(currentHabitatInitial))}; // initial set
function getCurrentHabitat() { // get function
    return JSON.parse(sessionStorage.getItem('currentHabitat'))
};
function setCurrentHabitat(currentHabitat) { // set function
    sessionStorage.setItem('currentHabitat', JSON.stringify(currentHabitat))
};

// BAITS
let baitsInitial = [
    {
        name: "Gummy Worms",
        cost: 1,
        count: 0,
        unlocked: false,
    },
    {
        name: "Saltine Crackers",
        cost: 3,
        count: 0,
        unlocked: false,
    },
    {
        name: "Chicken Nuggets",
        cost: 5,
        count: 0,
        unlocked: false,
    },
    {
        name: "Cake Slices",
        cost: 6,
        count: 0,
        unlocked: false,
    },
]
if(!sessionStorage.getItem('baits')) {sessionStorage.setItem('baits', JSON.stringify(baitsInitial))}; // initial set
function getBaits() { // get function
    return JSON.parse(sessionStorage.getItem('baits'))
};
function setBaits(newBaits) { // set function
    sessionStorage.setItem('baits', JSON.stringify(newBaits))
};

// VEHICLE
let vehiclesInitial = [
    {
        name: "None",
        cost: 0,
    },
    {
        name: "Rowboat",
        cost: 10000,
    }, 
    {
        name: "Sailboat",
        cost: 20000,
    }
]
if(!sessionStorage.getItem('vehicles')) {sessionStorage.setItem('vehicles', JSON.stringify(vehiclesInitial))}; // intial set
function getVehicles() { // get function
    return JSON.parse(sessionStorage.getItem('vehicles'));
};
function setVehicles() { // set function
    return JSON.parse(sessionStorage.getItem('vehicles'));
}

// CURRENT VEHICLE
let currentVehicle = vehiclesInitial[0]; // sets original vehicle to nothing
if(!sessionStorage.getItem('currentVehicle')) {sessionStorage.setItem('currentVehicle', JSON.stringify(currentVehicle))}; // initial set
function getCurrentVehicle() { // get function
    return JSON.parse(sessionStorage.getItem('currentVehicle'))
};
function setCurrentVehicle(currentVehicle) { // set function
    sessionStorage.setItem('currentVehicle', JSON.stringify(currentVehicle))
};
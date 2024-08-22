console.log("I am a fish"); // MAXIMUM IMPORTANCE - DO NOT REMOVE

// GET AND SET FUNCTION
function get(savedObject) {
    return JSON.parse(sessionStorage.getItem(savedObject));
}

function set(savedObject, newObject) {
    sessionStorage.setItem(savedObject, JSON.stringify(newObject));
}

let speedInitial = 10; // intervals per second
let sandDollarsInitial = 0; // initial sand dollars
let revenueInitial = 0; // initial revenue

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
    },
    {
        name: 'Swordfish',
        size: 8,
        cost: 5,
        revenue: 1,
        bait: "Gummy Worms",
        inventoryCount: 0,
        habitatCount: 0,
    },
    {
        name: 'Shark',
        size: 12,
        cost: 8,
        revenue: 2,
        bait: "Saltine Crackers",
        inventoryCount: 0,
        habitatCount: 0,
    },
    {
        name: 'Whale',
        size: 30,
        cost: 22,
        revenue: 3,
        bait: "Chicken Nuggets",
        inventoryCount: 0,
        habitatCount: 0,
    },
    {
        name: 'Narwhal',
        size: 60,
        cost: 350,
        revenue: 6.5,
        bait: "Cake Slices",
        inventoryCount: 0, 
        habitatCount: 0,
    },
]

// FISHING RODS
let fishingRodsInitial = [// rates are in fish/second
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
        cost: 10, // usually 25
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
    },
]
let currentRodInitial = fishingRodsInitial[0]; // sets original rod to bare hands

// HABITATS
let fishHabitatsInitial = [
    {
        name: "Fish Bowl",
        capacity: 10,
        cost: 20, // usually 50
    },
    {
        name: "Fish Tank",
        capacity: 25,
        cost: 100,
    },
    {
        name: "Aquarium",
        capacity: 200,
        cost: 300,
    },
    {
        name: "Small Lake",
        capacity: 400,
        cost: 500,
    }
]
let currentHabitatInitial = {}; // sets original habitat to nothing

// BAITS
let baitsInitial = [
    {
        name: "Gummy Worms",
        cost: 1,
        count: 0,
    },
    {
        name: "Saltine Crackers",
        cost: 3,
        count: 0,
    },
    {
        name: "Chicken Nuggets",
        cost: 5,
        count: 0,
    },
    {
        name: "Cake Slices",
        cost: 6,
        count: 0,
    },
]

// VEHICLE
let vehiclesInitial = [
    {
        name: "None",
        cost: 0,
    },
    {
        name: "Rowboat",
        cost: 100, // usually 10,000
    }, 
    {
        name: "Sailboat",
        cost: 500, // usually 20,000
    }
]
let currentVehicleInitial = vehiclesInitial[0]; // sets original vehicle to nothing

// GAME INITIALIZED - initial set for all objects
let gameInitialized = false;
if(!sessionStorage.getItem('gameInitialized')) {
    set('speed', speedInitial);
    set('sandDollars', sandDollarsInitial);
    set('revenue', revenueInitial);
    set('fishStats', fishStatsInitial);
    set('fishingRods', fishingRodsInitial);
    set('currentRod', currentRodInitial);
    set('fishHabitats', fishHabitatsInitial);
    set('currentHabitat', currentHabitatInitial);
    set('baits', baitsInitial);
    set('vehicles', vehiclesInitial);
    set('currentVehicle', currentVehicleInitial);

    gameInitialized = true;
    set('gameInitialized', gameInitialized);
};
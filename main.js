console.log("I am a fish"); // MAXIMUM IMPORTANCE - DO NOT REMOVE

// SPEED OF GAME
speedInitial = 1; // intervals per second
if(!sessionStorage.getItem('speed')) { // initial set
    console.log('speed reset');
    const speedStringified = JSON.stringify(speedInitial);
    sessionStorage.setItem('speed', speedStringified);
}

function getSpeed() { // get function
    let speed = sessionStorage.getItem('speed')
    return JSON.parse(speed)
}

// SAND DOLLARS
let sandDollarsInitial = 0;
if(!sessionStorage.getItem('sandDollars')) { // initial set
    console.log('sandDollars reset');
    const sandDollarsStringified = JSON.stringify(sandDollarsInitial);
    sessionStorage.setItem('sandDollars', sandDollarsStringified);
}

function getSandDollars() { // get function
    let sandDollars = sessionStorage.getItem('sandDollars')
    return JSON.parse(sandDollars)
}

function setSandDollars(newSandDollars) { // set function
    const sandDollarsStringified = JSON.stringify(newSandDollars);
    sessionStorage.setItem('sandDollars', sandDollarsStringified);
}

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

if(!sessionStorage.getItem('fishStats')) { // initial set
    console.log('fishStats reset');
    const fishStatsStringified = JSON.stringify(fishStatsInitial);
    sessionStorage.setItem('fishStats', fishStatsStringified);
}

function getFishStats() { // get function
    let fishStats = sessionStorage.getItem('fishStats')
    return JSON.parse(fishStats)
}

function setFishStats(newFishStats) { // set function
    const fishStatsStringified = JSON.stringify(newFishStats);
    sessionStorage.setItem('fishStats', fishStatsStringified);
}

// FISHING RODS
let fishingRodsInitial = [// rates are in fish/second
    {
        name: "A Fishing Rod",
        rates: {
            'Goldfish': 0.5,
            'Swordfish': 0,
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
            'Swordfish': 0.25,
            'Shark': 0,
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

if(!sessionStorage.getItem('fishingRods')) { // initial set
    console.log('fishingRods reset');
    const fishingRodsStringified = JSON.stringify(fishingRodsInitial);
    sessionStorage.setItem('fishingRods', fishingRodsStringified);
}

function getFishingRods() { // get function
    let fishingRods = sessionStorage.getItem('fishingRods')
    return JSON.parse(fishingRods)
}

function setFishingRods(newFishingRods) { // set function
    const fishingRodsStringified = JSON.stringify(newFishingRods);
    sessionStorage.setItem('fishingRods', fishingRodsStringified);
}

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

if(!sessionStorage.getItem('fishHabitats')) { // initial set
    console.log('fishHabitats reset');
    const fishHabitatsStringified = JSON.stringify(fishHabitatsInitial);
    sessionStorage.setItem('fishHabitats', fishHabitatsStringified);
}

function getFishHabitats() { // get function
    let fishHabitats = sessionStorage.getItem('fishHabitats')
    return JSON.parse(fishHabitats)
}

function setFishHabitats(newFishHabitats) { // set function
    const fishHabitatsStringified = JSON.stringify(newFishHabitats);
    sessionStorage.setItem('fishHabitats', fishHabitatsStringified);
}


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
        count: 0
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
        count: 0
    },
]

if(!sessionStorage.getItem('baits')) { // initial set
    console.log('baits reset');
    const fishBaitsStringified = JSON.stringify(baitsInitial);
    sessionStorage.setItem('baits', fishBaitsStringified);
}

function getBaits() { // get function
    let baits = sessionStorage.getItem('baits')
    return JSON.parse(baits)
}

function setBaits(newBaits) { // set function
    const baitsStringified = JSON.stringify(newBaits);
    sessionStorage.setItem('baits', baitsStringified);
}

// WIN
let winInitial = [
    {
        name: "Rowboat",
        cost: 10000,
    }
]

if(!sessionStorage.getItem('win')) { // initial set
    console.log('win reset');
    const winStringified = JSON.stringify(winInitial);
    sessionStorage.setItem('win', winStringified);
}

function getWin() { // get function
    let win = sessionStorage.getItem('win')
    return JSON.parse(win)
}
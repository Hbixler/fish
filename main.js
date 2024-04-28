console.log("I am a fish"); // MAXIMUM IMPORTANCE - DO NOT REMOVE

// Fishing rod values
let fishingRods = [// rates are in fish/second
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
            'Narwhal': 0.01,
        },
        cost: 300,
    },
]

// fish stats
let fishStats = [ // revenue is in SD/second
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
        cost: 4,
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
        cost: 15,
        revenue: 3,
        bait: "Chicken Nuggets",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
    {
        name: 'Narwhal',
        size: 60,
        cost: 30,
        revenue: 6.5,
        bait: "Cake Slices",
        inventoryCount: 0,
        habitatCount: 0,
        unlocked: false,
    },
]

// Fishing habitat values
let fishHabitats = [
    {
        name: "Fish Bowl",
        capacity: 5,
        cost: 25,
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
]

let baits = [
    {
        name: "Gummy Worms",
        cost: 2,
        count: 0
    },
    {
        name: "Saltine Crackers",
        cost: 4,
        count: 0
    },
    {
        name: "Chicken Nuggets",
        cost: 8,
        count: 0
    },
    {
        name: "Cake Slices",
        cost: 15,
        count: 0
    },
]

let win = [
    {
        name: "Rowboat",
        cost: 10000,
    }
]
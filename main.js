console.log("I am a fish"); // MAXIMUM IMPORTANCE - DO NOT REMOVE

// speed of game
speed = 1; // intervals per second

/*
localStorage.setItem("bar", foo);
var foo = localStorage.getItem("bar");
http://diveintohtml5.info/storage.html

var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
*/

// sand dollars
let sandDollars = 0;

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

// Fishing habitat values
let fishHabitats = [
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

let baits = [
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

let win = [
    {
        name: "Rowboat",
        cost: 10000,
    }
]
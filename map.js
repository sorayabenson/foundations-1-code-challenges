// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    // use map to return an array with the pets names
    return arr.map(item => item.name);
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    // use map to add isHungry: true to each object
    let hungryPets = [];
    
    hungryPets = arr.map((item) =>  { 
        return {
            isHungry: true, 
            name: item.name,
            type: item.type,
        }});
    
    return hungryPets;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    // map through arr to capitalize name

    let shouts = [];

    shouts = arr.map(item => {
        return {
            name: item.name.toUpperCase(),
            type: item.type,
        }
    })

    return shouts;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    // map through arr
    // return each object's values as string

    let strings = [];

    strings = arr.map(item => `${item.name}${item.type}`);

    return strings;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    // map through arr
    // turn each object into its own array that holds a mini array [key, value] as strings
    let arrayArray = [];

    arrayArray = arr.map(item => {
        let miniArray = [
            ['name', `${item.name}`],
            ['type', `${item.type}`]
        ];

        return miniArray;
    })

    return arrayArray;
}
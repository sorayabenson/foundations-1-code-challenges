// use Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    //get keys in an array
    //return joined array

    const keys = Object.keys(someObject);

    return keys.join('');
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let scream = {}

    const keys = Object.keys(someObject);
    // const values = Object.values(someObject);
    
    // same thing:
    // for(let i = 0; i < keys.length; i++) {
    //     scream[keys[i].toUpperCase()] = values[i];
    // }

    keys.forEach(key => scream[key.toUpperCase()] = someObject[key]);

    return scream;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    // return an array with an array for each key value pair
    let tuples = []

    const keys = Object.keys(someObject);
    // const values = Object.values(someObject);

    // for(let i = 0; i < keys.length; i++) {
    //     tuples.push([keys[i], values[i]]);
    // }

    // same thing:
    keys.forEach(key => tuples.push([key, someObject[key]]));

    return tuples;
}

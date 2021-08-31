// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

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

export function makeArrayOfNames(arr) {
    // return an array of only names
    // use forEach
    let names = [];

    arr.forEach((item) => names.push(item.name));

    return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    // return an array of types using forEach and reverse.

    let types = [];

    arr.forEach(item => types.push(item.type));

    return types.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    // cambia los keys a español, manteniendo los valores. usa forEach

    let spanishArray = [];

    arr.forEach((item) => {
        spanishArray.push({ nombre: item.name, tipo: item.type });
    })

    return spanishArray;
}


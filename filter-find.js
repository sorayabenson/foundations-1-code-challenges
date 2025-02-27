// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    // filter arr to return an array of all category dairy
    let dairyArr = [];

    dairyArr = arr.filter((item) => item.category === 'dairy');

    // same as:
    // dairyArr = arr.filter((item) => {
    //     if(item.category === 'dairy') return item;
    // });

    return dairyArr;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    // if a fruit costs more than 2 dollars return it
    return [arr.find((item) => {
        if(item.category === 'fruit' && item.price > 2) return item;
    })];
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    return arr.find((item) => item.id === 'cheese');
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    //return id if category === fruit
    let fruits = [];

    arr.filter((item) => {
        item.category === 'fruit' ?  
        fruits.push(item.id)
        : null;
    })

    return fruits;
}
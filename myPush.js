// Implementation of push function

/**
 * 
 * @param {array} arr
 * @param {any} item
 */

function myPush(arr, item) {
    let newarray = arr;
    newarray[newarray.length] = item;
    return newarray;
}

let christ = ['yo', 'yo'];

let jesus = myPush(christ, 2);
jesus.forEach(element => console.log(element));
console.log(jesus.length);
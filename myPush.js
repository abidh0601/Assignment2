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

//Implementation of forEach function

/**
 * 
 * @param {array} arr
 * @param {function} callback
 */

function myEach(arr, callback)
{
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
    return;
}
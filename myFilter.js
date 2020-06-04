// JavaScript source code

/**
 * 
 * @param {array} arr
 * @param {function} callback
 */
function myFilter(arr, callback) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        console.log(callback(arr[i]));
        if (callback(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}


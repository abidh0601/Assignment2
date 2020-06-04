// JavaScript source code

/**
 * 
 * @param {Array} arr
 * @param {any} query
 * @param {number} fromIndex
 * 
 * 
 * @returns {number} 
 */
const myUnshift = function (arr, query, fromIndex) {
    let found = -1
   
    if (fromIndex == undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === query) {
                found = i;

            }
        }
    }

    else if (fromIndex >= 0) {
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === query) {
                found = i;
            }
        }
    }

    else if (fromIndex < 0) {
        for (let i = (arr.length + fromIndex); i < arr.length; i++) {
            if (arr[i] === query) {
                found = i;

            }
        }
    }

    return found;

}

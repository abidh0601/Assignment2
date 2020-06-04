// JavaScript source code

/**
 * 
 * @param {Object} obj
 * 
 * @returns {Array}
 */
const grabKeys = function (obj) {

    let keys = [];
    for (x in obj) {
        keys.push(x);
    }
    return keys;
}
// JavaScript source code

/**
 * 
 * @param {object} obj
 */
const grabValues = function (obj) {
    let values = [];

    for (x in obj) {
        values.push(obj[x]);
    }

    return values;
}
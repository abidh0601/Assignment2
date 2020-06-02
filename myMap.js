//Implementation of map


/**
 * 
 * @param {array} arr
 * @param {function} callback
 */
function myMap(arr, callback)
{
    let newarray = arr;
    for (let i = 0; i < newarray.length; i++)
    {
        newarray[i] = callback(newarray[i]);    
    }
    return newarray;
}

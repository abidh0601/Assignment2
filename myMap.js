//Implementation of map


/**
 * 
 * @param {array} arr
 * @param {function} callback
 */
function myMap(arr, callback)
{
    let newarray= [];
    for (let i = 0; i < arr.length; i++)
    {
        newarray[i] = callback(arr[i]);    
    }
    return newarray;
}

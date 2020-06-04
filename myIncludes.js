// JavaScript source code
const myIncludes = function (arr, query, fromIndex) {

    if (fromIndex == undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === query) {
                return true;
            }
        }
    }
    if (fromIndex >= 0) {
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === query) {
                return true;
            }
        }
    }
    if (fromIndex < 0) {
        for (let i = (arr.length + fromIndex); i < arr.length; i++) {
            if (arr[i] === query) {
                return true;
            }
        }
    }
    return false;
}
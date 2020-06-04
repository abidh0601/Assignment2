// JavaScript source code

const myIndexOf = function (arr, query, fromIndex) {
    if (fromIndex == undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === query) {
                return i;
            }
        }
    }

    else if (fromIndex >= 0) {
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === query) {
                return i;
            }
        }
    }

    else if (fromIndex < 0) {
        for (let i = (arr.length + fromIndex); i < arr.length; i++) {
            if (arr[i] === query) {
                return i;
            }
        }
    }

    return -1;
}

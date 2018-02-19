function getFilteredArray(arr = [], callBack) {
    let filteredArray = [];
    forEach(arr, function(elem, i){
        if (callBack(elem) == true) {
            filteredArray.push(arr[i]);
        }
    });
    return filteredArray;
}
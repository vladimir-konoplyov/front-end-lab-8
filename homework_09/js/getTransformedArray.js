function getTransformedArray(arr=[], callBack) {
    let transformedArray = [];
    forEach(arr, function(elem, i){
        transformedArray[i] = callBack(elem);
    });
    return transformedArray;
}
function collectIds(movies) {
    let newArray = [] = getFilteredArray(movies, function(movies) {
        return movies.rating > 3.0;
    });
    let result = [] = getTransformedArray(newArray, function(elem) {
        return elem.id;
    });
    return result;
}
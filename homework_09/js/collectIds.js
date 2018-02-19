function collectIds(movies) {
    let newArray = [];
    getFilteredArray(movies, function(movies) {
        if (movies.rating > 3.0) {
            newArray.push(movies.id);
        }
    });
    return newArray;
}
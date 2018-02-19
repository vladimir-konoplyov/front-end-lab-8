function cypherPhrase(obj, str) {
    let arr = [] = str.split('');
    let newString = getTransformedArray(arr, function(elem) {
        for (let key in obj) {
            if (elem === key) {
                return obj[key];
            } 
        }
        return elem;
    });
    return newString.join(''); 
}
function cypherPhrase(obj, str) {
    let arr = [] = str.split('');
    let newString = getTransformedArray(arr, function(elem) {
        return obj[elem] || elem;
    });
    return newString.join(''); 
}
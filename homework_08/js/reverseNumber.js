function reverseNumber(num) {
    num = num + "";
    let reversed = Math.abs(parseInt(num.split("").reverse().join("")));
    if (num[0] === "-") {
        return -1 *  reversed;   
    }
    return reversed;
}
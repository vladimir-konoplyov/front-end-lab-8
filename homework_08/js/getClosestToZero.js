function getClosestToZero() {
    let closestNumber = Math.abs(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < closestNumber) {
            closestNumber = arguments[i];
        }
    }
    return closestNumber;
}
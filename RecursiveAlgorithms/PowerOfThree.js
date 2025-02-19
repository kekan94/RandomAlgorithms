function isPowerOfThree(num) {
    if (num === 0) {
        return false;
    } else if (num === 1) {
        return true;
    } else if (num % 3 === 0) {
        if (isPowerOfThree(num / 3)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isPowerOfThree(15));
function sumOfIntegers(array) {
    if (array.length === 1) {
        return array[0];
    } else {
        return array.shift() + sumOfIntegers(array);
    }
}

console.log(sumOfIntegers([1, 2, 3, 4, 5]));
function fibonacciNumber(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
    }
}

console.log(fibonacciNumber(5));

function fibonacciNumberBottomUp(num) {
    if (num <= 1) {
        return num;
    }

    let array = new Array(num + 1);

    array[0] = 0;
    array[1] = 1;

    for (let i = 2; i <= num; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    return array[num];
}

console.log(fibonacciNumberBottomUp(6));
/*function fibonacciSequenceSum(num) {
    let array = [];
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        array.push(1);
        array.push(fibonacciNumber(num - 1) + fibonacciNumber(num - 2));
    }
    console.log(array);
    return array.reduce((acc, currVal) => acc + currVal);
}

console.log(fibonacciSequenceSum(5));*/
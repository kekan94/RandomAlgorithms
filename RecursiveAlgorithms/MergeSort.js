const mergeAscending = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift());
      } else {
        sortedArray.push(rightArray.shift());
      }
    }
    
    return sortedArray.concat(leftArray).concat(rightArray);
}

const mergeSortAscending = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    return mergeAscending(mergeSortAscending(leftArray), mergeSortAscending(rightArray))
}

const mergeDescending = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] > rightArray[0]) {
        sortedArray.push(leftArray.shift());
      } else {
        sortedArray.push(rightArray.shift());
      }
    }
    
    return sortedArray.concat(leftArray).concat(rightArray);
}

const mergeSortDescending = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    return mergeDescending(mergeSortDescending(leftArray), mergeSortDescending(rightArray))
}
  
  
const inputArr = [3, 5, 2, 90, 4, 7];
  
console.log(mergeSortAscending(inputArr));
console.log(mergeSortDescending(inputArr));
  
module.exports = {mergeSortAscending, mergeSortDescending};
// Only change code below this line
function rangeOfNumber(startN, endN) {
    if(startN > endN) {
        return "The starting number will always be less then or equal to the ending number"
    }
    
      if(startN == endN) {
        return [endN];
    }
    
    var array = rangeOfNumber(startN+1, endN);
    array.unshift(startN);
    return array;
    }
    // Only change code above this line
    console.log(rangeOfNumber(1, 7));
    console.log(rangeOfNumber(3, 10));
    console.log(rangeOfNumber(5, 5));
    console.log(rangeOfNumber(7, 5));
    module.exports = rangeOfNumber;
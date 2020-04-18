array=[1,2,3]
let sum = 0;
for(let i=0;i<array.length;i++){
    sum+=array[i];
}

Array.prototype.myReduce = function(callbackFn,initialValue){
    if (this === null || this === 'undefined') {
        throw new TypeError('Array Undefined');
    }

    if (Object.prototype.toString.call(callbackFn) != '[object function]') {
        throw new TypeError(callbackFn + 'is not a funciton');
    }

    let O = Object(this);
    let len = O.length;
    let k = 0;
    let accumulator = initialValue;
    if (accumulator === undefined) {
        for (k;k<len;k++){
            if (k in O) {
                accumulator = O[k];
                k++;
                break;
            }
        }
    }

    if (k === len && accumulator === undefined) {
        throw new TypeError('Empty Array')
    }

    for(k;k<len;k++){
        if (k in O) {
            accumulator = callbackFn(accumulator,O[k],k,O);
        }
    }

    return accumulator;
}



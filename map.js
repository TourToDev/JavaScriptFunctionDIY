Array.prototype.myMap = function(callbackFn, thisArg) {
    //数组的map函数接收一个回调函数和指定函数中this的参数
    //检查是不是有数组调用该函数
    if (this === null || this === undefined) {
        throw new TypeError('Cannot read property map of null or undefined ');
    }

    //处理回调函数的类型异常
    if (Object.prototype.toString.call(callbackFn) != "[object function]") {
        throw new TypeError(callbackFn + ' is not a function');        
    }

    let O = Object(this);//将数组转化为对象
    let T = thisArg;

    let len = O.length;
    let A = new Array(len);
    for(let k=0;k<len;k++){
        if (k in O) {
            let kValue = O[k];

            let mappedValue = callbackFn.call(T,kValue,k,O);
            A[k] = mappedValue;
        }
    }
    
    return A;

}
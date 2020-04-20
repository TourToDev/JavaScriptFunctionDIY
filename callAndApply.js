//call,接受一個对象作为this的指向，并传入参数直接执行
Function.prototype.myCall = function (context) {
    //检测是否有传入匹配的上下文，如果没有则绑定上下文为window
    context = context || global;
    var uniqueID = '00' + Math.random();
    while (context.hasOwnProperty(uniqueID)) {
        uniqueID = '00' + Math.random();
    }

    context[uniqueID] = this;
    const args = [];

    for (let i = 0; i < arguments.length; i++) {
        args.push('arguments['+i+']');
    }

    //这里args会自动调用数组的tostring方法
    let result = eval('context[uniqueID](' + args + ')');
    delete context[uniqueID];
    return result;
}

Function.prototype.apply = function (context, arr) {
    context = context || global;
    var uniqueID = '00' + Math.random();
    while (context.hasOwnProperty(uniqueID)) {
        uniqueID = '00' + Math.random();
    }

    context[uniqueID] = this;
    if (!arr) {
        result = context[uniqueID]();
    } else {
        for (let i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context[uniqueID](' + args + ')');
    }

    delete context[uniqueID];
    return result;

}
Function.prototype.myBind = function (context) {
    fn = this;
    argsPrv =  Array.slice.call(arguments);
    object = argsPrv.shift();

    return function () {
        fn.apply(object,argsPrv.concat(Array.prototype.slice.call(arguments)));
    }
}
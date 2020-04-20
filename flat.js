arr = [2,3,5,[2,3],4];

//调用数组flat方法
arr1=arr.flat(Infinity)
arr1
//将数组变成字符串，替换其中的所有[],再用split构造数组
str=JSON.stringify(arr);
str1=str.replace(/(\[|\])/g,"");
arr2=str1.split(',');
arr2
//递归：如果数组中的元素不是数组，则加入新数组，若是，
//则对其递归调用函数
let result=[];
let flatrecu = (arr)=>{
    for(let i=0;i<arr.length;i++){
        let item = arr[i]
        if (item instanceof Array) {
            flatrecu(item);
        }
        else{
            result.push(arr[i]);
        }
    }
}
flatrecu(arr);
result

//利用reduce函数迭代
function flatten(arr){
    return arr.reduce((pre,cur)=>{
        return pre.concat( Array.isArray(cur)? flatten(cur):cur );
    },[]);
}


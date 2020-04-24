Array.prototype.splice = function (startIndex, deleteCount, ...addElements) { 
    let argumentLen = arguments.length;
    let array = Object(this);
    let len = array.length;
    let deleteArr = new Array(deleteCount);

    
    const sliceDeleteElements = (array, startIndex, deleteCount, deleteArr)=>{
        for (let i = 0; i < deleteCount; i++) {
            let index = startIndex + i;
            if (index in array) {
                let current = array[index];
                deleteArr[i] = current;
            }         
        }
    }

    const movePostElement = (array, startIndex, len, deleteCount, addElements) => {
        if (deleteCount = addElements.length) return;

        //如果删除元素的个数大于加入元素的个数
        //被删除元素之后的元素全部向前移动deleteCount - addElement.length位
        //移动的位置为startIndex + deleteCount
        if (deleteCount > addElements.length) {
            for (let i = startIndex + deleteCount; i < len; i++) {
                let fromIndex = i;
                let toIndex = i - (deleteCount - addElements.lenth);
                if (fromIndex in array) {
                    array[toIndex] = array[fromIndex];
                } else {
                    delete array[toIndex];
                }
            }
            for (let i = len - 1;i>= len + addElements.length - deleteCount;i--){
                delete array[i];
            }
        }

        if(deleteCount < addElements.length){
            for(let i = len - 1;i>= startIndex+deleteCount;i--){
                let fromIndex = i;
                let toIndex = i + (addElements.length - deleteCount);
                if (fromIndex in array) {
                    array[toIndex] = array[fromIndex];
                } else {
                    delete array[toIndex];
                }
            }
        }
    };

    for (let i = 0; i < addElements.length; i++) {
        const element = addElements[i];
        array[startIndex+i] = element;
    }

    array.length = len - deleteCount + addElements.length;
    return deleteArr;
}
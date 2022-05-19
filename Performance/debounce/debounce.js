// 自定义防抖函数，第一个参数是回调函数，第二个是等待时间
function debounce(func,wait,immediate) {
    let timeout,result;
    let decounced = function() {
        // 为了防止setTimeout的this指向为window，所以利用apply改变函数内部的this指向
        let context = this;
        // 获取事件e
        let args = arguments;
        if(timeout) clearTimeout(timeout);
        // 是否立即执行
        if(immediate){
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            },wait);
            // 立即执行
            if (callNow) result = func.apply(context,args)
        } else {
            // 不立即执行
            timeout = setTimeout(function(){
                func.apply(context,args)
            },wait);
        }
        // 函数的返回值
        return result;
    }
    // 取消防抖
    decounced.cancel = function(){
        clearTimeout(timeout);
        //防止内存泄露，置空
        timeout = null;
    }
    return decounced;
}
let count = 0;
// querySelector获取文档中的第一个元素
let container = document.querySelector('#container');
let btn = document.querySelector('#btn');
function doSomeThing(e) {
    // 改变执行函数内部this的指向
    console.log(this);
    // 获取触发函数
    console.log(e);
    //可以在这里执行一些异步操作或ajax请求
    container.innerHTML = count++;
    return "想要的结果"
}
let doSome = debounce(doSomeThing,10000)
// 取消防抖
btn.onclick = function(){
    doSome.cancel()
}
// 高阶函数，防抖
container.onmousemove = doSome;
// 防抖：事件响应函数在一段时间后才执行，如果这段时间内再次执行，则重现计算（归零）执行时间，当预定的时间内没有再次调用该函数，则执行响应函数。
// 通俗而讲就是执行最后一次后计时完毕后才能执行下一次。
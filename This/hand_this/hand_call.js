// 实现call
var joney={
    name:"joney",
    phoneBattery:70,
    charge:function(level1,level2){
        this.phoneBattery=level1+level2
    }
}

var woody={
    name:"woody",
    phoneBattery:30
}

Function.prototype.myCall = function (context) {
    // 先判断调用myCall是不是一个函数，这里的this就是调用myCall的方法
    if (typeof this !== 'function') {
      throw new TypeError("Not a Function")
    }
    context = context || window // 不传参数默认为window，使用短路赋值
    context.fn = this // 把this指向的函数赋给当前环境
    // 保存参数，Array.from 把伪数组对象转为数组
    let args = Array.from(arguments).slice(1) 
    let result = context.fn(...args) // 调用函数
    // 删除当前的函数被赋予的函数
    delete context.fn
    return result
}

console.log(woody);  //{ name: 'woody', phoneBattery: 30 }
// 此时执行的环境是charge，所以this指向charge函数
joney.charge.myCall(woody,40,45) 
console.log(woody); //{ name: 'woody', phoneBattery: 85 }
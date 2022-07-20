// 实现apply
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

Function.prototype.myApply = function (context) {
    // 判断this是不是函数
    if (typeof this !== "function") {
      throw new TypeError("Not a Function")
    }
    let result
    context = context || window   // 默认是window
    context.fn = this  // 保存this
    // arguments是传入的参数列表，在call中因为是单个的参数，所以用Array.from(...arguments).slice(1)截取
    // 而在apply中，传入的第二个参数就是一个数组，所以直接用arguments[1]获取即可
    if (arguments[1]) {  // 是否传参
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
    delete context.fn
    return result
}

joney.charge.myApply(woody,[50,45])
console.log(woody.phoneBattery) // 95
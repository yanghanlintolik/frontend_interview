// 实现bind
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

Function.prototype.myBind = function(context,...args){
    //判断是否是一个函数
    if(typeof this != 'function'){
        throw new Error('not a function')
    }
    // 使用const保存不变值调用bind的函数
    const self = this;
    // bind 要返回一个函数, 就不会立即执行了
    let fBound = function(...rest){
        return self.call(context,...args, ...rest)
    } 
    return fBound;
};

let woody_charge = joney.charge.myBind(woody)
woody_charge(50,45)
console.log(woody)
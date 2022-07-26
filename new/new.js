// 手写实现new

// 自定义new函数
// 传入构造函数constructor
const myNew = function(constructor){
    // 扩展运算符取出参数对象的所有可遍历属性，然后拷贝到当前对象之中
    return function(...args){
        // 1、新建一个空对象
        var obj = new Object();
        // 2、空对象的原型属性指向构造函数的原型
        obj._proto_ = constructor.prototype;
        // 3、在obj的this上下文中调用构造函数
        var conReturned = constructor.call(obj,...args);
        // 4、如果构造函数本身有特定的返回值，则直接返回，如果没有，则返回生成的对象
        // 用短路运算
        return typeof conReturned === 'object'?conReturned:obj
    }
}

// 示例 1，构造函数无返回值
function T1 (arg1, arg2) {
    this.arg1 = arg1
    this.arg2 = arg2
}
const ins1 = myNew(T1)(1,2)
console.log(ins1)  // {arg1: 1, arg2: 2}
  
// 示例 2，构造函数有返回值
function T2 (arg1, arg2) {
  this.arg1 = arg1
  this.arg2 = arg2
  return { a: 'aa' }
}
const ins2 = myNew(T2)(1,2)
console.log(ins2)  // {a: "aa"}
  

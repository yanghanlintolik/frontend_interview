// 手写instanceof，判断对象是否是某个构造函数生成
// 实例.__proto__ === 类.prototype
function myInstanceof(example,classFunc){
    // 获取对象原型
    let proto = Object.getPrototypeOf(example);
    while(true){
        if(proto == null) return false;
        // 在当前实例对象的原型链上，找到了当前类
        if(proto == classFunc.prototype) return true;
        // 沿着原型链__ptoto__一层一层向上查
        proto = proto._proto_
    }
}
let str = new String('xxx')
console.log(myInstanceof(str,String))
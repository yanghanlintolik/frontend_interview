// 对象深拷贝
let obj1 = {
    a:1,
    author:'he',
    b:{
        nation:'china'
    },
    fn1:function(){
        console.log('我是方法1')
    }
}

// 浅拷贝
let obj2 = obj1
obj2.author = 'me'
console.log(obj1)

// 深拷贝
// 方法一：原生object.assign()方法，类似于数组的Array.from()
// Object.assign()方法可以把任意多个的源对象自身的可枚举属性拷贝给目前目前对象，然后返回目标对象。但引用类型仍拷贝引用。
let obj3 = Object.assign(obj1)
obj3.author = 'she'
obj3.b.nation = 'america'
console.log('拷贝后对象：',obj3)
console.log('原对象',obj1)

// 方法二：原生JSON.stringify()方法，把对象转换成字符串，再用JSON.parse把字符串转换成新的对象
// 如果对象中包含函数function 或 正则表达式RegExp 则不能用这种方法
// 无法拷贝对象原型链上的属性和方法 
// 当数据的层次很深，会栈溢出
let obj4 = JSON.parse(JSON.stringify(obj1))
console.log(obj4)

// 方法三：递归,创造一个递归函数，把原对象的值递归赋值给新对象。
// 用new obj.constructor ()构造函数新建一个空的对象，而不是使用{}或者[],这样可以保持原形链的继承；
// 用obj.hasOwnProperty(key)来判断属性是否来自原型链上，因为for..in..也会遍历其原型链上的可枚举属性。
// 上面的函数用到递归算法，在函数有名字，而且名字以后也不会变的情况下，这样定义没有问题。但问题是这个函数的执行与函数名 factorial 紧紧耦合在了一起。为了消除这种紧密耦合的现象，需要使用 `arguments.callee`。
var clone = function(obj){
    if(obj === null) return null;
    // 如果不是对象类型数据，则直接返回该数据即完成了深拷贝
    if(typeof obj != 'object') return obj;
    // 如果是特殊类型的对象，则直接利用对应构造函数创建返回，完成深拷贝
    if(obj.constructor === Date) return new Date(obj);
    if(obj.constructor === RegExp) return new RegExp(obj);
    var newObj = new obj.constructor();
    for(let key in obj){
        // forin会遍历其原型链上属性，用hasOwnProperty判断，不遍历其原型链上的属性
        if(obj.hasOwnProperty(key)){
            // 如果该属性是不是Object，如果是则递归复制
            if(typeof obj[key] === 'object'){
                newObj[key] = clone(obj[key])
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}
let obj5 = clone(obj1)
console.log(obj5)

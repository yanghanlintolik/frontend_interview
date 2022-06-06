// prototype：对象的原型和函数的原型对象

// 新增一个Person函数，其内部包含一个prototype属性，指向一个对象，称为原型对象
function Person() { } // prototype = {}

// Person的原型对象上可以挂载属性和方法
Person.prototype.name = '小明'
Person.prototype.age = 22
Person.prototype.getName = function () {
  return this.name
}

// Person.prototype和xiaoming的[[Prototype]]都指向同一个对象，这个对象对于Person构造函数而言叫做原型对象，对于xiaoming实例而言叫做原型
const xiaoming = new Person()

console.log('xiaoming: ', xiaoming) // Person {}
console.log('getName: ',xiaoming.getName()) // 小明
console.log('xiaoming.tostring', xiaoming.toString()) // [object Object]

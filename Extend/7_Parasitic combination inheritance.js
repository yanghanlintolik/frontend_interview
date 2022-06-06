// 寄生式组合继承
// 与组合继承类似，只是改用寄生式语法，性能优化

function inherit(Son, Father) {
    const prototype = Object.create(Father.prototype) // 获取父类原型对象副本
    prototype.constructor = Son // 将获取的副本的constructor指向子类，以此增强副本原型对象
    Son.prototype = prototype // 将子类的原型对象指向副本原型对象
}

function Person(eyes) {
  this.eyes = eyes
  this.colors = ['white', 'yellow', 'black']
}

Person.prototype.getEyes = function () {
  return this.eyes
}

function YellowRace() {
  Person.call(this, 'black') // 调用构造函数并传参
}

inherit(YellowRace, Person) // 寄生式继承，不用第二次调用构造函数

const hjy = new YellowRace()
hjy.colors.push('green')

const laowang = new YellowRace()

console.log(hjy.colors) // ['white', 'yellow', 'black', 'green']
console.log(laowang.colors) // ['white', 'yellow', 'black']
console.log(hjy.getEyes()) // black
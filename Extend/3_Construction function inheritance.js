// 构造函数继承
// 核心原理是通过在子类中调用父类构造函数实现上下文的绑定

// 父类构造函数 this由哪个对象调用就指向那个对象
function Person(eyes) {
    this.eyes = eyes;
    this.colors = ['white', 'yellow', 'black'];
    this.getEyes = function () {
        return this.eyes
    }
}

Person.prototype.ReturnEyes = function () {
    return this.eyes
}

// 子类构造函数 call 方法调用函数，同时指定this 
function YellowRace() {
  Person.call(this, 'black') // 调用构造函数并传参，call第一个参数是this指向对象，后面参数用逗号分隔
}

const hjy = new YellowRace()
hjy.colors.push('green')
console.log(hjy.colors) // ['white', 'yellow', 'black', 'green']
console.log(hjy.eyes) // black


const laowang = new YellowRace()
console.log(laowang.colors) // ['white', 'yellow', 'black']
console.log(laowang.eyes) // black

console.log(hjy.getEyes()) // black
// console.log(hjy.ReturnEyes()) // TypeError: hjy.ReturnEyes is not a function
  
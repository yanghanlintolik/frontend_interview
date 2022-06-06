// 原型链继承
// 核心：将父类的实例作为子类的原型

// 父类Person
function Person() {
    this.head = 1
    this.hand = 2
    this.colors = ['white', 'yellow', 'black']
}

// 字类YellowRace，并通过原型链进行继承绑定
function YellowRace() { }
YellowRace.prototype = new Person()

// 示例1
const hjy = new YellowRace()

console.log(hjy.head) // 1
console.log(hjy.hand) // 2
console.log(hjy.colors) // ['white', 'yellow', 'black', 'green']

// 改变原型链上的变量
hjy.hand = 3
hjy.colors.push('green')

const xiaoming = new YellowRace()
console.log(xiaoming.hand) // 2
console.log(xiaoming.colors) // ['white', 'yellow', 'black', 'green']
console.log(hjy) // Person { hand: 3 }


  


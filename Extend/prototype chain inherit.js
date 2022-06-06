// 原型链继承
// 核心：将父类的实例作为子类的原型

function Person() {
    this.head = 1
    this.hand = 2
  }
  
  function YellowRace() { }
  YellowRace.prototype = new Person()
  
  const hjy = new YellowRace()
  
  console.log(hjy.head) // 1
  console.log(hjy.hand) // 2
  


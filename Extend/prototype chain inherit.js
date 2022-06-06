// 原型链继承
// 核心：将父类的实例作为子类的原型

// 新增动物类作为父类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
  }

// 新增原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};

// 新增猫类作为子类
function Cat(){ 
}

// 将父类的实例作为子类的原型
Cat.prototype = new Animal();
// 子类原型定义name为cat
// Cat.prototype.name = 'cat';

//　新增子类实例
var cat1 = new Cat('cat1');
console.log(cat1.name); //cat
console.log(cat1.eat('fish'));
console.log(cat1.sleep());
console.log(cat1 instanceof Animal); //true 
console.log(cat1 instanceof Cat); //true

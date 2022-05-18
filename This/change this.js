// call 和 apply 、bind都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向
// 1、call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向
var o = {
	name: 'andy'
}
function fn(a, b) {
      console.log(this);
      console.log(a+b)
};
fn(1,2)// 此时的this指向的是window 运行结果为3
fn.call(o,1,2)//此时的this指向的是对象o,参数使用逗号隔开,运行结果为‘andy’和3
// call第一个作用是可以调用函数 第二个可以改变函数内的this指向。
// call的主要作用可以实现继承

function Father(unam,age,sex){
    this.uname=uname;
    this.age=age;
    this.sex=sex;
}
function Son(uname,age,sex){
    //调用Father的构造函数，把father的this指向son的this，这里传递this是son实例，这样father的构造函数的this指向的就是son实例，就完成了构造
    Father.call(this,uname,age,sex);
}
var son = new Son('刘德华',18,'男');

// 2、apply() 方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指向，与call不同，参数使用数组传递
var o = {
	name: 'andy'
}
 function fn(a, b) {
      console.log(this);
      console.log(a+b)
};
fn()// 此时的this指向的是window 运行结果为3
fn.apply(o,[1,2])//此时的this指向的是对象o,参数使用数组传递 运行结果为3

// 3、bind() 方法不会调用函数,但是能改变函数内部this 指向,返回的是原函数改变this之后产生的新函数
var o = {
    name: 'andy'
};
function fn(a, b) {
       console.log(this);
       console.log(a + b);
};
var f = fn.bind(o, 1, 2); //此处的f是bind返回的新函数
f();//调用新函数  this指向的是对象o 参数使用逗号隔开
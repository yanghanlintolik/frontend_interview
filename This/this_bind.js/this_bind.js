// this的绑定机制
// 1.隐式绑定
function foo1(){
    console.log(this.a);
}

var obj1 = {
    a:2,
    // foo作为引用对象添加到obj中
    foo1:foo1,
};
// 2
obj1.foo1();

// 2.显式绑定：硬绑定
function foo2(){
    console.log(this.a);
}
var obj2 = {
    a:2
}
var obj3 = {
    a:3
}
var bar = function(){
    foo2.call(obj2);
}
foo2.call(obj2); // 2
foo2.call(obj3); // 3
bar(); //2
setTimeout(bar,100); // 2
bar.call(obj3); // 2

// // 3.显式绑定：软绑定
// function foo3(){
//     console.log(this.a);
// }
// var obj4 = {
//     a:4
// }
// var obj5 = {
//     a:5
// }
// var bar2 = function(){
//     foo3.softBind(obj4);
// }

// bar2(); //4
// bar2.call(obj5); // 5

// 4.new 绑定
function foo(a){
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a) // 2
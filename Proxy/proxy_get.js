// proxy的get、set拦截操作
var obj = {
    name:'小明',
    todo:'数学',
}
console.log( obj.name ) // 小明

// 定义proxy拦截行为
let handler1 = {
    // 一个handler中可以定义多种拦截行为，以属性的形式书写，给属性赋值一个函数
    get:function(target,p1){
        if( target.name === '小明'){
            return '小红'
        }
    },
    set:function(target,p1,v1){
        // 如果要修改的属性名为todo
        if( p1 === 'todo'){
            // 则无论怎么操作，修改后属性都是英语
            // 
            target[p1] = '英语'
        }
    }
}
// 创建被代理的proxy对象
let proobj = new Proxy(obj,handler1);
console.log(proobj.name); // 小红

proobj.todo = '语文';
console.log(proobj.todo); // 英语
console.log(proobj);
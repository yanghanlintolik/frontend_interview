// Promise使用的具体实例1
// 想要某个函数拥有promise功能，只需让其返回一个promise即可。
//做饭
function cook(){
    console.log('开始做饭。');
    // 此时还未定义做饭成功或失败的回调函数，后续在then中定义
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('做饭完毕！');
            // 调用成功函数resolve
            resolve('鸡蛋炒饭');
        }, 1000);
    });
    return p;
}
 
//吃饭
function eat(data){
    console.log('开始吃饭：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('吃饭完毕!');
            resolve('一块碗和一双筷子');
        }, 2000);
    });
    return p;
}
 
function wash(data){
    console.log('开始洗碗：' + data);
    var p = new Promise(function(resolve, reject){        //做一些异步操作
        setTimeout(function(){
            console.log('洗碗完毕!');
            resolve('干净的碗筷');
        }, 2000);
    });
    return p;
}

// 1、使用 then 链式调用上面三个方法
cook()
.then(function(data){ // 此时由于只传入了一个function，function默认为resolve函数
    return eat(data); // 成功的回调是返回一个新的Promise eat形成Promise链
}) // 执行到这里时，相当于是eat().then
.then(function(data){
    return wash(data);
})
.then(function(data){
    console.log(data);
});

// 2、简化代码，直接传入Promise，相当于resolve函数为直接调用下一个Promise
cook()
.then(eat)
.then(wash)
.then(function(data){
    console.log(data);
});
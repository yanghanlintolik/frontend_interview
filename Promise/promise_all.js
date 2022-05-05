// Promise.all()使用
// Promise.all()方法接收一个promise的iterable类型输入，只返回一个Promise实例，输入的所有promise的resolve回调的结果是一个数组。

// Promise.resolve（）相当于调用Promise执行resolve中的参数，等同于向形参data传值
// const promise = new Promise((resolve,reject) => {console.log(data)})
// Promise.resolve('data') 等价于 new Promise(resolve => resolve('data'))。
const promise1 = Promise.resolve(3)
const promise2 = 42 // 可以传入常数
const promise3 = new Promise((resolve,reject) => {
    // 100毫秒后执行resolve，传递的参数为'foo'
    setTimeout(resolve,100,'foo')
})

// 调用原生Promise对象的all方法
// 因为需要传入iterable形式的参数，因此用数组封装
// 此时返回的仍是一个Promise，需要定义其resolve，指定成功后的执行
Promise.all([promise1,promise2,promise3]).then((values) =>{
    console.log(values) // [ 3, 42, 'foo' ]
})
// all顺序执行所有Promise，返回所有Prommise的resolve回调结果的数组
// 如果有一个reject或者不合法Promise，立即抛出错误，all的reject是第一个抛出的reject或错误。

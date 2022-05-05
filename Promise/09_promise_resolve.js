// 9、reomise.resolve()
// Promise.resolve(value)方法返回一个以给定值执行resolve后的Promise对象
// Promise.resolve('foo') 等价于new Promise(resolve => resolve('foo'))

// 注意是调用的原生Promise对象
// resolve返回一个promise对象
const p1 = Promise.resolve(123)


p1.then((value) => {
    console.log(value)
})


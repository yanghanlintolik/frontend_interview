// 7、promise.finally()
// finally()方法返回一个Promise。
// 在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。
// 避免了如果需要最终同样的语句需要在then()和catch()中各写一次的情况。

const p1 = new Promise((resolve,reject) => {
    resolve(1)
})

p1.then((success) => {
    console.log(success)
}).finally(() => {
    console.log("无论如何都执行！")
}) // 由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况


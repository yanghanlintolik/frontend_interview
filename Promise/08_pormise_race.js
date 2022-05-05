// 8、promise.race()
// Promise.race(iterable)方法返回一个promise，一旦迭代器中的某个promise解决或拒绝，返回的promise就会解决或拒绝。
// 与all不同的是，race只会输出最先完成的Promise结果，与any不同的是，race会执行所有的Promise。

const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'one')
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(reject,100,'two')
})

// 返回的仍是一个Promise
Promise.race([p1,p2]).then(
    value => {
        console.log(value)},
    reason => {
        console.log(reason)
    }
)

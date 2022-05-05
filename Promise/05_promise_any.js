// 05、Promise.any()
// Promise.any()接收一个Promise可迭代对象，只要其中的一个promise成功，就返回成功的promise。
// 如果可迭代对象中没有一个promise成功（即所有的promises都失败/拒绝），就返回一个失败的promise和AggregateError类型的实例，是Error的子类，把单一的错误集合在一起。
// 本质上，Promise.any()和Promise.all()是相反的。

// 如果传入的参数是一个空的可迭代对象，则返回一个已失败（already rejected）状态的Promise
const promise1 = []
// 如果传入的参数不包含任何promise，则返回一个异步完成的Promise
const promise2 = [1]

const pErr = new Promise((resolve,reject) => {
    reject("总是失败")
})

const pSlow = new Promise((resolve,reject) => {
    setTimeout(resolve,800,'慢成功')
})

const pFast = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'快成功')
})

const promise3 = [pErr,pSlow,pFast];

Promise.any(promise1).then(values => console.log(values),reason => console.log(reason))
Promise.any(promise2).then(values => console.log(values))
Promise.any(promise3).then(values => console.log(values))
// 06、Promise.catch()
// catch捕获reject或者抛出的错误，返回一个Promise对象。
// 由于reject中可以定义失败时的处理函数，所以catch常用于捕获错误，而不是处理promise失败信息。

const p1 = new Promise((resolve,reject) => {
    const time = Date.now()
    if(time %2 === 0){
        resolve("success")
    } else {
        reject('reasons')
    }
})

p1.then(value => {
    console.log(value)
    throw 'oh,no!'
}).catch(e => {
    console.log(e)
}).then(() => {
    console.log("在catch捕获后，Promise链被重置")
},() => {
    console.log("未捕获到错误")
})

// Expecting successful output：
// success
// oh,no!
// 在catch捕获后，Promise链被重置

// Expecting failure output：
// reasons
// 在catch捕获后，Promise链被重置

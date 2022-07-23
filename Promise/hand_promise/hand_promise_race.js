// 手写Promise.race
Promise.myRace = (promises) => {
    return new Promise((resolve,reject) =>{
        promises.forEach((p,i) => {
            // 对p进行一次包装，防止非Promise对象
            // 对p进行监听，将我们自己返回的Promise的resolve，reject传递给p，
            // 由于then和catch会把状态和值回传，所以哪个先改变状态，我们返回的Promise也将会是什么状态
            Promise.resolve(p).then(resolve).catch(reject)
        })
    })
}
// 测试一下
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 1)
  })
  
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2)
})

Promise.myRace([p1, p2]).then((value) => {
  console.log(value) // 2
})

Promise.myRace([p1, p2, 3]).then((value) => {
  console.log(value) // 3
})
  

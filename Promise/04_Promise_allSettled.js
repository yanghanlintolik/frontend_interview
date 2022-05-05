// Promise.allSettled()返回一个所有给定promise都已settled的promise，并带有一个对象数组，每个对象表示对应的promise状态结果
// 如果一个 promise 已经被兑现(fulfilled)或被拒绝(rejected),那么我们也可以说它处于已敲定（settled）状态

// 用原生Promise对象resolve返回一个Promise对象
const promise1 = Promise.resolve(3);
// 用构造函数创建新的Promise对象
const promise2 = new Promise((resolve,reject) => {
    setTimeout(reject,100,'foo')
});

// 返回一个带有对象数组的新Promise
Promise.allSettled([promise1,promise2]).then((result)=>{
    console.log(result);
    result.forEach((result)=>{
        console.log(result.status)
    })
})
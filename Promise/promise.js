// Promise创建
// 以new Promise构造函数创建Promise
// Promise接受一个处理器函数作为参数，此处理器函数中处理的是异步操作
const myFirstPromise = new Promise(function(resolve,reject){
    // 以setTimeout模拟异步
    setTimeout(function(){
      // 调用resolve成功函数
      resolve('第一个Promise成功!')
    },250)
});
// 箭头函数形式的处理器函数
const mySecondPromise = new Promise((resolve,reject) =>{
  setTimeout(() => {
    const time = Date.now()
    // 当前时间偶数时成功，奇数时失败
    if(time % 2 === 0){
      resolve('成功的数据,time='+time)
    } else {
      reject('失败的数据,time='+time)
    }
  })
})

// then传入2个参数，分别是resolve和reject处理函数，只写了一个默认的是resolve
myFirstPromise.then(function(successMessage){
  //successMessage的值是上面调用resolve(...)方法传入的值.
  console.log(successMessage)
})

mySecondPromise.then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)
  }
)

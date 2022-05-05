// 10、promise.then()
// then()方法返回一个Promise。它最多需要两个参数：Promise 的成功和失败情况的回调函数。

const p = new Promise((resolve,reject) => {})

//p.then(onFulfilled,onRejected)
p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
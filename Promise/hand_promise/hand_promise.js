// 手写实现promise

// 1.实现Promise
// myPromise构造函数，需要传入一个函数fn
function MyPromise(fn){
    // this指向调用者，也即调用此构造函数产生的Promise对象,因为每个Promise对象有自己的状态
    this.PromiseState = 'pending';
    this.PromiseResult = undefined;
    // 保存实列对象的this值
    const self = this;
    // resolve和reject是构造函数中就有的，用来更改当前实例的状态和值，只需被调用即可
    function resolve(data) {// 如果不使用self，这里内部的this会指向window
        // 如果当前的promise实例不是pending的状态则退出，否则更改当前的promise实例的状态和值
        if (self.PromiseState !== "pending"){
            return;
          }
          // 1.修改对象的状态 promiseState
          // 2.设置对象结果值 promiseResult
          self.PromiseState = "fulfilled";
          self.PromiseResult = data;
    }
    function reject(error) {
        // 如果当前的Promise实例不是pending状态则退出，否则更改当前的promise实例的状态和值
        if (self.PromiseState !== 'pending'){
            return;
        }
        // 1.修改对象的状态 promiseState
        // 2.设置对象结果值 promiseResult
        self.PromiseState = 'rejected';
        self.PromiseResult = error;
    }
    // 而每次通过new来创建Promise对象时，传入的函数会执行，因此直接调用fn函数，并传入resolve和reject这2个函数。
    // 而如果执行过程中抛出异常，则需要捕获异常，同时状态也应置为reject
    try{
        fn(resolve,reject);
    } catch(e){
        // 修改状态为rejected，同时error为异常值e
        reject(e);
    }

}
// then,catch方法在Promise的原型上
MyPromise.prototype.then = function(thenCallback) {

}
MyPromise.prototype.catch = function(catchCallback) {

}
const p = new MyPromise((resolve, reject) => {
    resolve(1);
    reject(2);
});
console.log(p);

// 2.实现.then
// then方法中有2个参数，且2个参数都是函数，第一个参数会在promise执行resolve时调用，第二个参数会在promise执行reject时调用。
// .catch只不过是调用.then第二个参数的语法糖而已
MyPromise.prototype.then = function(thenCallback,catchCallback){
    // 返回一个新的Promise
    return new Promise((resolve,reject) => {
        // 根据调用者Promise（也即this）的状态，确定执行then还是catch的回调
        if(this.PromiseState === 'fulfilled'){
            // 将调用者Promise的结果传给then回调，而后结果传给resolve
            const result = thenCallback(this.PromiseResult);
            resolve(result);
        }
        if(this.PromiseState === 'rejected'){
            const result = catchCallback(this.PromiseResult);
            reject(result);
        }
    })
}
const pt = new MyPromise((resolve, reject) => {
    reject(1);
});
const pt1 = pt.then(
    (res) => {
      console.log(res, "成功");
    },
    (err) => {
      console.log(err, "失败");
    }
);
console.log(pt, 111);
console.log(pt1, 222);


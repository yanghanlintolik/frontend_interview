// 手撕Promise.all
Promise.myAll = (promises) => {
    // 直接返回一个Promise
    return new Promise((resolve,reject)=>{
        // 计数器
        let count = 0;
        // 存放结果
        let result = [];
        const len = promises.length
        // 如果为空，直接返回
        if(len === 0){
            return resolve([])
        }
        // 递归判断
        promises.forEach((element,index) => {
            // 数组中有的可能不是Promise，则需要手动转化
            Promise.resolve(element).then((res) => {
                count += 1;
                // 收集每个Promise的值
                result[index] = res;
                // 当遍历结束，所有Promise都在then中被调用，证明没有reject，返回
                if(count === len){
                resolve(result)
                }
            }).catch(reject) // 监听数组项中的Promise catch只要有一个失败，那么我们自己返回的Promise也会失败
        });
    })
}

// 测试一下
const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000)
})
const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')

// 1. 所有的Promise都成功了
const p11 = Promise.myAll([ p1, p2, p3 ])
	.then(console.log) // [ 1, 2, 3 ]
      .catch(console.log)
      
// 2. 有一个Promise失败了
const p12 = Promise.myAll([ p1, p2, p4 ])
	.then(console.log)
      .catch(console.log) // err4
      
// 3. 有两个Promise失败了，可以看到最终输出的是err4，第一个失败的返回值
const p13 = Promise.myAll([ p1, p4, p5 ])
	.then(console.log)
      .catch(console.log) // err4
// 与原生的Promise.all返回是一致的    


// 手写Promise.allSettled
Promise.myAllSettled = (promises) => {
    return new Promise((resolve,reject) => {
        // 计数
        let count = 0;
        // 存放结果数组
        let result = [];
        // 获取Promise数组长度
        const len = promises.length;
        // 如果传入为空数组，直接返回空结果Promise
        if(len === 0){
            resolve([]);
        }

        // 循环执行
        promises.forEach((p,i) => {
            Promise.resolve(p).then((res) => {
                // 每执行完一个Promise都计数加1
                count += 1;
                // Promise成功时的属性设置
                result[i] = {
                    status: 'fulfilled',
                    value: res,
                }
                // 每执行完一个Promise都进行判断
                if(count === len) {
                    resolve(result);
                }
            }).catch((err) => {
                count += 1;
                result[i] = {
                    status: 'fulfilled',
                    reason: err,
                };
                // 每执行完一个Promise都进行判断
                if(count === len) {
                    resolve(result);
                }
            })
        })
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
const p11 = Promise.myAllSettled([ p1, p2, p3 ]).then((res) => console.log(res));
// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "fulfilled",
    "value": 3
  }
]
*/
      
// 2. 有一个Promise失败了
const p12 = Promise.myAllSettled([ p1, p2, p4 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))
        
// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "rejected",
    "reason": "err4"
  }
]
*/
      
// 3. 有两个Promise失败了
const p13 = Promise.myAllSettled([ p1, p4, p5 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)))
        
// 输出 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "rejected",
    "reason": "err4"
  },
  {
    "status": "rejected",
    "reason": "err5"
  }
]
*/




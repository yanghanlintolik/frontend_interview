// 完全背包问题
let m = 4 //背包容量
let a = [1,3,4] // 重量数组
let v = [15,20,30] // 价值数组

// 1、2、dp数组定义及初始化
const dp = new Array(m+1).fill(0)

// 4、遍历顺序
for(let i=0; i<a.length; i++){
    // 唯一不同点在于从小到大遍历，可以放入多个物品
    // j=a[i]即此次循环起码要能放下i物品，再进行比较，如果从0开始，会发生数组越界，产生NaN
    for(let j=a[i]; j<=m; j++){
        // 2、递推公式
        dp[j] = Math.max(dp[j],dp[j-a[i]]+v[i])
    }
}

// 5、举例推导
console.log(dp)
console.log(dp[m])

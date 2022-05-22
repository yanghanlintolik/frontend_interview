// 01背包问题，采用一维滚动数组

let m = 4 //背包容量
let a = [1,3,4] // 重量数组
let v = [15,20,30] // 价值数组

// 1、2、dp数组定义及初始化
const dp = new Array(m+1).fill(0)

// 4、遍历顺序
for(let i=0; i<a.length; i++){
    for(let j=m; j>= a[i]; j--){
        // 2、递推公式
        dp[j] = Math.max(dp[j],dp[j-a[i]]+v[i])
    }
}

// 5、举例推导
console.log(dp)
console.log(dp[m])

// return dp[m]
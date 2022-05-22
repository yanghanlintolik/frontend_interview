// 01背包问题

let m = 4 //背包容量
let a = [1,3,4] // 重量数组
let v = [15,20,30] // 价值数组

// 1、dp数组定义
const dp = new Array(a.length).fill(0).map(() => new Array(m+1).fill(0))
// 3、dp数组初始化
for(let i=1 ; i<dp[0].length ;i++){
    if(i>=a[0]) dp[0][i] = v[0]
    else continue
}
// 4、循环
for(let i=1 ; i<a.length ; i++){
    for(let j=1 ; j<=m ; j++){
        // 5、递推
        // 如果j<a[i]，肯定不能放入i物品
        if(j<a[i]) dp[i][j] = dp[i-1][j]
        // 否则比较放入i物品和不放i物品以产生最大值
        else dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-a[i]]+v[i])
    }
}
// 5、举例
console.log(dp)
console.log(dp[a.length-1][m])
// return dp[a.length-1][m]
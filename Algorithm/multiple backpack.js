// 多重背包

let m = 10 //背包容量
let a = [1,3,4] //重量数组
let v = [15,20,30] // 价值数组
let n = [2,3,2] // 个数数组

// 物品数量打平
for(let i = 0; i<n.length ;i++){
    while(n[i] > 1){ // n保留到1，把多余1的物品都展开
        a.push(a[i])
        v.push(v[i])
        n[i]--
    }
}
console.log('打平后的数组',a,v)
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
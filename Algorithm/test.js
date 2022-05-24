
const result = [] // 存放符合条件结果的集合
let path = [] // ⽤来存放过程中符合条件结果
var backtracking = function(n,k,startIndex){
    if (path.length === k) {
         result.push(path);
         return;
    }
    for(let i = startIndex; i <= n; i++) { // 控制树的横向遍历
         path.push(i); // 处理节点
         backtracking(n, k, i + 1); // 递归：控制树的纵向遍历，注意下⼀层搜索要从i+1开始
         path.pop(); // 回溯，撤销处理的节点
    }
}
backtracking(4,2,1)
console.log(result)
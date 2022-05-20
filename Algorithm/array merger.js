// 携程面试真题：给定数组，合并相邻相同元素，并统计个数进行输出。
var n = 8;
var nums = [3,3,2,3,13,13,13,2];

console.log('---------------方法一------------------')
let pointer = 0
let re1 = []
for (;pointer<n;){
    let count = 1
    for (let j = 1 ; nums[pointer]===nums[pointer+j] ; j++){
        count++
    }
    if(count != 1){
        re1.push(nums[pointer]+'('+count+')')
    } else {
        re1.push(nums[pointer])
    }
    pointer +=count
}
console.log(re1)
console.log('---------------------------------------')

console.log('---------------方法二------------------')
let wpointer = 0
let re2 = []
while(wpointer<n){
    let count = 1
    for (let j = 1 ; nums[wpointer]===nums[wpointer+j] ; j++){
        count++
    }
    if(count != 1){
        re2.push(nums[wpointer]+'('+count+')')
    } else {
        re2.push(nums[wpointer])
    }
    wpointer +=count
}
console.log(re2)
console.log('--------------------------------------')

console.log('---------------方法三------------------')
var result = []
for(let i = 0 ; i<n ; i++){
    count = 1
    nums[i]
    for (let j = i+1 ; j < n && nums[i]===nums[j] ; j++){
        count++
    }
    result.push(count)
}

let re = []
for(let k = 0 ; k<n ; k++){
    if (result[k] != 1) {
        result.splice(k+1,result[k]-1)
    }
}

let co = 0
for(let l = 0 ; l<result.length;l++){
    if(result[l] != 1){
        re.push(nums[co]+"("+result[l]+")")
        co += result[l]
    } else {
        re.push(nums[co])
        co += result[l]
    }
}
console.log(re)
console.log('-------------------------------------')
// 数组深拷贝
let nums1 = [1,2,3]

// 浅拷贝
let nums2 = nums1
// 浅拷贝结果
nums1.push(4)
console.log(nums2)

// 深拷贝
// 方法一：利用slice截取新的数组,slice截取产生新数组，不改变原来的数组
let nums3 = nums1.slice()
// 方法二：concat拼接数组
let nums4 = nums1.concat()
// 方法三：扩展运算符
let nums5 = [...nums1]
// 方法四：Array对象产生新的数组
let nums6 = Array.from(nums1)

nums1.push(5)
console.log('原数组',nums1)
console.log('深拷贝数组',nums3,nums4,nums5,nums6)



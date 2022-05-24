// 数组深拷贝

// 一、浅拷贝示例：
const result = []

let item1 = [1]
const item2 = [2]

result.push(item1) // 1、此时是浅拷贝，把item数组的地址拷贝给result数组

item1 = [3] // 此时赋新值给let可变类型的item1,相当于创建了一个新的数组，item指向新的数组地址
result.push(item1)  // 2、此时也是浅拷贝，但拷贝的是改变后的item1数组地址

result.push(item2) // 3、此时也是浅拷贝，拷贝的是item2数组地址
item2[0] = '改变后数据' // 此时const类型的item2,只能在原数组上操作，不能赋新值
result.push(item2) // 4、此时push的仍是item2的地址，浅拷贝，不能保留原来的值

console.log('浅拷贝：',result)

// 二、浅拷贝示例：
const deepresult = []
const deepitem = [1]

deepresult.push(deepitem.slice()) // 方法一：slice传入两个参数 start,end

deepitem[0] = [2]
deepresult.push(deepitem.concat()) // 方法二：concat传入待拼接数组

deepitem[0] = [3]
deepresult.push([...deepitem]) // 方法三：ES6扩展运算符，扩展运算符先把数组或对象转为用逗号分隔的参数序列，再用[]数组包裹形成数组

deepitem[0] = [4]
deepresult.push(Array.from(deepitem)) // 方法四：Array.from()创建新数组

console.log(deepresult) // [ [ 1 ], [ [ 2 ] ], [ [ 3 ] ], [ [ 4 ] ] ]

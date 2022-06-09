// 不同for循环比较

// 1、for循环
const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (let index=0; index < arr.length; index++) {
  const elem = arr[index];
  console.log(index, elem);
}

// Output:
// 0, 'a'
// 1, 'b'
// 2, 'c'

// 2、for...in循环
// 迭代出所有本身和原型链上的属性
const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (const key in arr) {
  console.log(key);
}

// Output:
// '0'
// '1'
// '2'
// 'prop'

// 3、for... Each循环
const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

arr.forEach((elem, index) => {
  console.log(elem, index);
});

// Output:
// 'a', 0
// 'b', 1
// 'c', 2

// 4、for..of循环
const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (const elem of arr) {
  console.log(elem);
}
// Output:
// 'a'
// 'b'
// 'c'
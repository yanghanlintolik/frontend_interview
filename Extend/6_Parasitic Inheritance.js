// 寄生式继承
function inherit(o) {
  let clone = Object.create(o)
  clone.sayHi = function () { // 增强对象
    console.log('Hi')
  }
  return clone
}

const hjy = {
  eyes: 'black',
  colors: ['white', 'yellow', 'black']
}

const laowang = inherit(hjy)

console.log(laowang.eyes) // black
console.log(laowang.colors) // ['white', 'yellow', 'black']
laowang.sayHi() // Hi
  
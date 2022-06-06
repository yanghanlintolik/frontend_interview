// 原型继承
// 通过ES5的create方法进行继承，本质和原型链类似

const hjy = {
  eyes: 'black',
  colors: ['white', 'yellow', 'black']
}

const laowang = Object.create(hjy, {
  name: {
    value: '老王',
    writable: false,
    enumerable: true,
    configurable: true
  },
  age: {
    value: '32',
    writable: true,
    enumerable: true,
    configurable: false
  }
})
console.log(laowang.eyes) // black
console.log(laowang.colors) // ['white', 'yellow', 'black']
console.log(laowang.name) // 老王
console.log(laowang.age) // 32
  

  
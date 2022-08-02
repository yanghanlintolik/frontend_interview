// 劫持getter和setter
// const obj = {
//   a: 3,
// };

// Object.defineProperty(obj, "a", {
//   value: 4,
//   writable: true, // 是否可以修改属性的值
//   configurable: true, // 配置项是否可以修改,就是说writable和enumerable是否能够修改
//   enumerable: true, // 是否可以枚举,就是说在遍历的时候能不能遍历出来
// });

// console.log(obj.a); // 4

const obj = {
  a: 0,
  b: 1,
};

Object.defineProperty(obj, "c", {
  get() {
    this.b++;
    return this.a;
  },
  set(a) {
    this.c = a;
  },
});
// 给obj的a赋值就会触发a的set方法，这时候a的值就变为33
obj.a = 33
// 这时候访问了obj的c,会调用c的get方法,让b自增,并返回a的值,这时候c的值就是33
console.log(obj.c)
// 但需要注意的是,这时候并没有给c赋值，所以并没有触发c的set方法
// obj.c = 22
// 那么就会触发c的set方法,这时候给c赋值了，所以会访问c的set方法

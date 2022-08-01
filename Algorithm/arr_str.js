// 数组字符串互相转换

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy1 = fruits.join(''); // Banana,Orange,Apple,Mango
var energy2 = fruits.join(); // Banana,Orange,Apple,Mango
var energy3 = fruits.join(" and "); // Banana and Orange and Apple and Mango
console.log(energy1);
console.log(energy2);
console.log(energy3);

var str = 'BananaOrangeAppleMango';
var arr1 = str.split('');
var arr2 = str.split('a');
console.log(arr1);
console.log(arr2);
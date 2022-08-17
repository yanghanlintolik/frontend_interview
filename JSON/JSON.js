var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
var myJSON = JSON.stringify(obj);

console.log(obj);
console.log(typeof myJSON);
console.log(myJSON);

var myobj = JSON.parse(myJSON);
console.log(typeof myobj);
console.log(myobj);

// 创建事件总线类
class eventBus {
    // 构造函数
    constructor() {
        // 缓存列表，消息队列
        this.message = {} 
    }
    // 1.订阅
    // 向消息队列添加内容 on
    on(type,callback) {
        // 判断有没有这个属性（事件类型）
        if (!this.message[type]) {
            // 如果没有这个属性，就初始化一个空的数组
            this.message[type] = [];
        }
        // push一个新的callback
        this.message[type].push(callback);
    }
    // 2.监听一次
    // 为指定事件注册一个单次监听器，单次监听器最多只触发一次，触发后立即解除监听器
    once(type,callback){
        // 先获取当前对象;
        let _this = this;
        function curOnce(){
            _this.off(type,curOnce);
            callback.apply(_this,arguments);
        }
        curOnce.callback = callback;
        _this.on(type,curOnce);
        return _this;
    }
    // 3.取消订阅
    // 删除消息队列里的内容 off
    // off 方法有两种写法：
    // bus.off("buy") - 删除整个buy事件类型
    // bus.off("buy",handlerA) - 只删除handlerA消息，保留buy事件列表里的其他消息
    off(type,callback) {
        // 判断是否有订阅，即消息队列里是否有type这个类型的事件，没有的话就直接return
        if (!this.message[type]) return;
        // 判断是否有callback这个参数
        if (!callback) {
           // 如果没有callback,就删掉整个事件
           this.message[type] = undefined;
           return;
        }
        // 如果有callback,就仅仅删掉callback这个消息(过滤掉这个消息方法)
        this.message[type] = this.message[type].filter(item => item !== callback);
    }
    // 4.发布
    // 触发消息队列里的内容 emit
    // 该方法需要传入一个 type 参数，用来确定触发哪一个事件；
    // 主要流程就是对这个type事件做一个轮询 (for循环)，挨个执行每一个消息的回调函数callback。
    emit(type) {
        // 判断是否有订阅
        if(!this.message[type]) return;
        // 如果有订阅，就对这个`type`事件做一个轮询 (for循环)
        this.message[type].forEach(item => {
        // 挨个执行每一个消息的回调函数callback
           item()
        });
    }
}

// 定义一些事件回调函数
function handlerA() {
    console.log('handlerA');
}

function handlerB() {
    console.log('handlerB');
}

function handlerC() {
    console.log('handlerC');
}

// 使用构造函数创建一个实例
const bus = new eventBus();

// 测试on
// 向bus委托内容，调用bus的on方法
bus.on('A物品到货', handlerA);
bus.on('B物品到货', handlerB);
console.log('添加A,B订阅后事件总线:',bus);

// 测试off
bus.off('B物品到货');
console.log('取消B订阅后事件总线:',bus);

// 测试emit
console.log('发布A,B订阅:');
bus.emit('A物品到货');
bus.emit('B物品到货');
console.log('发布A,B订阅后的事件总线:',bus);

// 测试once
bus.once('C物品到货once', handlerC);
console.log('添加Conce订阅后事件总线:',bus);
console.log('发布C订阅');
bus.emit('C物品到货once');
console.log('发布C订阅后的事件总线',bus);
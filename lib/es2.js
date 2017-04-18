'use strict';

require('babel-polyfill');
/*let name = 'zach'

while (true) {
    let name = 'obama'
    console.log(name)  //obama
    break
}

console.log(name)  //zach*/
/*var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6*/
/*const PI = Math.PI

PI = 23 */
/*const monent = require('moment')*/
/*class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello*/
/*class Animal {
    constructor(){
        this.type = 'animal'	
    }

    says(say){
    	var self = this;
        setTimeout(function(){
           console.log(self.type + ' says ' + say)
        }.bind(this), 1000)
    }
}

 var animal = new Animal()
 animal.says('hi')  //undefined says hi*/
/* class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout( () => {
            console.log(this.type + ' says ' + say)//当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象,并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this
        }, 1000)
    }
}
 var animal = new Animal()
 animal.says('hi')  //animal says hi*/
/* $("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);*/
/*let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}*/
/*let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2*/
/*function animal(type = 'cat'){
    console.log(type)
}
animal()
animal('pig')*/
/*function animals(...types){//不定参数
    console.log(types)
}
animals()
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]*/
/*var array = [1, 2, 3];
array.forEach(v=>console.log(v));
*/
/*var human = {
	company:'xss',
    breathe() {
        console.log('breathing...');
    },
    work() {
        console.log('human work');
    }
};
var worker = {
    __proto__: human//, //设置此对象的原型为human,相当于继承human
    //company: 'freelancer'
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’
console.log(worker.company);
worker.work();*/
/*var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
	console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock  //允许传递数组或者类数组直接做为函数的参数而不用通过apply*/
/*var someArray = [ "a", "b", "c" ];
 
for (v of someArray) {
    console.log(v);//输出 a,b,c
}*/
/*var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);// === 2
console.log(s.has("hello"));// === true

var m = new Map();
console.log(m.get("hello"));
m.set("hello", 42);
console.log(m.get("hello"));
console.log(m.get(s));
m.set(s, 34);
console.log(m.get(s));
console.log(m.get(s) == 34);*/
/*var s = new Set();
s.add("hello").add("goodbye").add("hello");
//console.log(s.size);// === 2
//console.log(s.has("hello"));
// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
// wm.size === undefined
console.log(wm.size);

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });//因为添加到ws的这个临时对象没有其他变量引用它，所以ws不会保存它的值，也就是说这次添加其实没有意思*/
//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };
//定义处理程序
var interceptor = {
    set: function set(receiver, property, value) {
        console.log(property, 'is changed to', value);
        receiver[property] = value;
    }
};
//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60; //控制台输出：salary is changed to 60
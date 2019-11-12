console.log('================= 原始Object =========================');

console.log(Object);
// console.log(Object.constructor);
console.log(Object.prototype);
console.log(Object.__proto__);
console.log(Object.constructor.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.constructor === Object);
// console.log(Object.prototype.constructor.prototype);
// console.log(Object.prototype.constructor.prototype === Object.prototype);

console.log('================= obj =========================');

let obj = {name: 'simon'};
console.log(obj.constructor === Object);
console.log(obj.prototype);
console.log(obj.__proto__);
console.log(obj.constructor.prototype === Object.prototype);
console.log(obj.__proto__.__proto__);

console.log('=================== fn =======================');

let fn = function() {};
fn.prototype.getName = function() {
    console.log('hello');
};
console.log(fn.constructor === Object.constructor);
console.log(fn.prototype);
console.log(fn.__proto__);
console.log(fn.__proto__ === Object.__proto__);
// console.log(fn.prototype.constructor);
console.log(fn.constructor.__proto__);
console.log(fn.constructor.__proto__ === fn.__proto__);
console.log(fn.prototype.__proto__);
console.log(fn.prototype.__proto__ === Object.prototype);

console.log('==========================================');

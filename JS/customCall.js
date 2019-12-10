Function.prototype.newCall = function(context) {
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);  // Array.prototype.slice(arguments, 1);
    let result = context.fn(...args);
    delete context.fn();
    return result;
};

function Parent() {
    this.name = 'simon';
}
Parent.prototype.logName = function () {
    console.log(this.name);
};

function Child() {
    Parent.newCall(this);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let c = new Child();
c.logName();
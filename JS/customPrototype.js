function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
};
function Child(name, parentName) {
    Parent.call(this, parentName);
    this.name = name;
}

function create(proto) {
    function Foo() {}
    Foo.prototype = proto;
    return new Foo();
}
Child.prototype = create(Parent.prototype);
Child.prototype.constructor = Child;
Child.prototype.sayName = function() {
    console.log('child name:', this.name);
};
let c = new Child('simon');
c.sayName();
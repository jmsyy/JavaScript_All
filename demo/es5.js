// function person(name, age) {
//     let o = new Object();
//     o.name = name;
//     o.age = age;
//     return  o;
// }
// let person1 = person(`Jack`,20);



let PersonNW = function (name, age) {
    this.age = age;
    this.name = name;
    this.snakes=['apple','pear']
}
PersonNW.prototype.sayName = function () {
    console.log(this.nickName);
}
PersonNW.prototype.sayAge = function () {
    console.log(this.age);
}


function Person(name,age) {
    this.nickName = name;
    PersonNW.call(this,...arguments)
}
Person.prototype = new PersonNW();

const xm = new Person('xiaoming');

const xq = new Person('xiaoqing');

const xl = new Person('xiaoLi',16);
xl.sayAge();
console.log(xl.name);




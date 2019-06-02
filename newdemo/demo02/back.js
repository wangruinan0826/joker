var Person=require('./person.js');
var Student=require('./student.js');

var person=new Person();
person.sleep();
person.eat();

console.log('1234567');

var student=new Student();
student.study();
student.sleep();
student.eat();

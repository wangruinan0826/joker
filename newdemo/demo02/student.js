var Person=require("./person.js");
var util=require("util");
function Student(){
	Person.call(this);
	util.inherits(Student,Person);
	//特有方法不写在这里，防止被继承出去
}
Student.prototype.study=function(){
	console.log("studying");
}
module.exports=Student;


var Person=require("./person.js");
var util=require("util");
function Teacher(){
	Teacher.call(this);
	util.inherits(Teacher,Person);
	this.teach=function(){
		console.log("teaching");
	}
}

module.exports=Teacher;

//特有的方法写在原型链中，共有的方法写在总的类里。
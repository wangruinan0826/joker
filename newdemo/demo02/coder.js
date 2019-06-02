var Person=require("./person.js");
var util=require("util");
function Corder(){
	Person.call(this);
	util.inherits(Coder,Person);
	this.code=function(){
		console.log("coding");
	}
}

module.exports=Coder;
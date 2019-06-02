function Person(){
    this.say=function(){
        console.log('iamsaying');
    }
    this.eat=function(){
        console.log('iameating');
    }
}
module.exports=Person;

var person=new Person();
module.exports=person;

module.exports=['zs','lisi','ww']
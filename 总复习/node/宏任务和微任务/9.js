//同步程序代码最快
//process.nextTick(Fn)  第二快
//setTimeout(Fn,0) 第三快
//setImmediate(Fn) 事件队列最后执行


for(var i=0;i<=3;i++){
	setTimeout(function(){
		console.log(i);
	},0);
}


process.nextTick(function(){
	console.log(345);
});
//process.nextTick(() => console.log(345));

console.log("end");

/*
 process.nextTick(() => console.log(1)); 
 Promise.resolve().then(() => console.log(2)); 
 process.nextTick(() => console.log(3)); 
 Promise.resolve().then(() => console.log(4)); // 1 // 3 // 2 // 4
*/
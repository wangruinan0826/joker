var http=require('http');
var url=require('url')

http.createServer(function(req,res){
    console.log(req.url)
}).listen(3000);

console.log('server start port 3000');
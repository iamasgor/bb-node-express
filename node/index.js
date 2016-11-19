//create a file: index.js
//initialize: npm init

var http = require('http');
var server = http.createServer(function(req,res){
  res.write('hello world');
  res.end("bye bye");
});
server.listen(5000);

//run node server: node index.js

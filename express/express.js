//install: npm install --save express
//create file: express.js

var express = require('express');

var app = express();
app.use(express.static("./"));

app.get('/',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    name:'anam',
    phone:'3434342342'
  })
});
app.get('/about',function(req,res){
  res.end("About page");
});

app.listen(5050);

//run node server: node express.js

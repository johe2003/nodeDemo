const express = require('express');
const app = new express();

app.get('/',function(req,res){
	
	res.send("hello docker");
	});
	
	app.listen(3000);
	console.log('svr is runing');
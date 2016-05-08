var express = require("express")();

express.get("/", function(req, res){
	var info = {};
	res.json(info);
});
express.listen(process.env.port || 80, function(){
	console.log("Running on port ",(process.env.port || 80));
});
var express = require("express")();

express.get("/", function(req, res){
	var info = {};
	info.ipaddress = req.ip;
	info.language = req.acceptsLanguages()[0];
	info.software = req.headers['user-agent'];
	res.json(info);
});
express.listen(process.env.port || 80, function(){
	console.log("Running on port ",(process.env.port || 80));
});
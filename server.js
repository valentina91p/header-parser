var app = require("express")();

app.get("/", function(req, res){
	var info = {};
	info.ipaddress = req.ip;
	info.language = req.acceptsLanguages()[0];
	info.software = req.headers['user-agent'];
	res.json(info);
});
app.listen(process.env.PORT || 80, function(){
	console.log("Running on port ",(process.env.PORT || 80));
});
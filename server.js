var app = require("express")();

app.get("/", function(req, res){
	var info = {};
	info.ipaddress = req.connection.remoteAddress || req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"];
	info.language = req.acceptsLanguages()[0];
	info.software = req.headers['user-agent'].split("(")[1].split(")")[0];
	res.json(info);
});
app.listen(process.env.PORT || 80, function(){
	console.log("Running on port ",(process.env.PORT || 80));
});
var express = require("express");
var app = express();

app.use(express.static('./public')); //Serves resources from public folder
var server = app.listen(5000)
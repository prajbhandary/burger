// dependencies

var express = require ('express')
//var bodyparser = require ('body-parser')
//var methodOverride = require ('method-override')


var Port  = process.env.Port || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ exteded: true }));
app.use(express.json());


//handlebars
var exphbs = require ('express-handlebars')
app.engine("handlebars",exphbs({defaultLayout : "main"}))
app.set("view engine","handlebars")


//routes
var routes = require("./controllers/burgers_controller.js")
app.use(routes)

//start server

app.listen(Port,function(){
    console.log("Server Starting at Port :" + Port)
})
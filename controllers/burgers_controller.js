var express = require("express");

var router = express.Router();
console.log("i got here")
var burger = require("../models/burger.js")

router.get("/",function(req,res){
    console.log("select all")
    burger.all(function(data){
        var hbsObjects = {
            burgers :data
        }   
        res.render("index",hbsObjects)     
    })  
});

router.put("/api/burgers/:id", function(req,res){
    var condtion  =  req.params.id;
    console.log("I'm here")
    burger.update({
        devoured : true
    },condtion,function(result){
        if (result.changedRows == 0) {
           // console.log("unchanged")
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
           // console.log("changed")
            res.status(200).end();
          }
    })
});


router.post("/api/burgers/",function(req,res){
    console.log("Post - here", req.body)
    burger.create([
        "burger_name"
    ],[req.body.name],function(result){
        res.json({id: result.insertId})
    })
});



module.exports = router;


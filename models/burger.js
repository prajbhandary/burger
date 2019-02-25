
var orm = require("../config/orm.js")

var burger = {
    all : function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    create : function(col,val,cb){
        orm.insertOne("burgers",col,val,function(res){
            cb(res);
        })
    },
    update : function (objColVals, condition,cb){
        console.log("burger.js been called")
        orm.updateOne("burgers",objColVals, condition,function(res){
            console.log("inside orm function")
            cb(res)
        })
    }
}

module.exports = burger;
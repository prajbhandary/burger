//Import mysql connection 

var connection = require("../config/connection.js");


// ideas from cats app
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax (cats app)
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
           value = value;
         arr.push(key + "=" + value);
      }
    }
    return arr;
}

// ideas from cats app end 


var orm = {
    selectAll : function(tableInput,cb){
        tableInput=tableInput||"burgers";
        var queryString = "Select * from " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            console.log(err,result);
            
            cb(result)
        } )

    },
    insertOne : function(table,cols, val,cb){
         console.log("inside orm insertOne")
         
        // var queryString = "INSERT INTO " + TABLE;
        var queryString=["Insert into",
        table, 
        " (",cols.join(","),") ",
        "VALUES (",'"',
        val.join(","),'"',
        ") ",
        ""].join(" ");
    console.log(queryString)
    connection.query(queryString,function(err,res){
        if(err){
            throw err;
        }
        cb(res);
    })
    },
    updateOne : function(table,objColVals,condition ,cb){
       console.log("updateOne " +objColVals)
        var queryString = ["UPDATE",table, "SET" , 
        objToSql(objColVals), "WHERE id =",condition
    ,""].join(" ");
        console.log(queryString)

        connection.query(queryString,function(err,res){
            if(err){
                throw err;
            }
            cb(res);
        })
        
    }
}

module.exports = orm;
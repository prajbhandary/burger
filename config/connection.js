var mysql =  require("mysql")
//need to change this for heroku
var connection = mysql.createConnection({

    host :"localhost",
    port :3306,
    user:"root",
    password: 'root',
    database : "burgers_db"
});

connection.connect(function(err){
if (err){
    console.err("error connection " + err.stack)
    return;
}
    console.log("connected as id : " + connection.threadId)
})


module.exports = connection;


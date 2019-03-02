var mysql =  require("mysql")
//need to change this for heroku
var connection ;


if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }else {
      mysql.createConnection({

    host :"localhost",
    port :3306,
    user:"root",
    password: 'root',
    database : "burgers_db"
});
  }



connection.connect(function(err){
if (err){
    console.log("error connection " + err.stack)
    return;
}
    console.log("connected as id : " + connection.threadId)
})


module.exports = connection;


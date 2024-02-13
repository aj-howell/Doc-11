require('dotenv').config();
const uri = process.env.DB_URI;

const db = require('mongoose'); 

//connecting to the database
db.connect(uri)
.then((res)=>
{
    console.log("successful connection to the database");
})
.catch((err)=>
{
    console.log("An error has occured while connecting to the database: ",err);
});

const dbConnection = db.connection; //exporting the connection for repeated use

module.exports=dbConnection;
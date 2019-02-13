// This is an express server that connects with a SQL Server database


// Import the Express module
const express = require('express');
const sql = require("mssql");
const DBConfig = require("./dbConfig");

const app = express();
const PORT = 3000;

// Create new config object for db connection
let user1 = new DBConfig("localhost", "sandboxDB", "nssqladmin", "ZAQ!zaq1", 1433);


function getData() {
    var conn = new sql.ConnectionPool(user1);
    var req = new sql.Request(conn);

    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        req.query("SELECT * from Status", function (err, recordset) {
            if (err) {
                console.log(err);
                return;
            }
            else{
                console.log(recordset);
            }
            conn.close();
        });
    });
}
getData();
app.get("/", (req, res) => res.json(getData));

//ARROW FUNCTION ECMASCRIPT 6
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


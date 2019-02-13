const sql = require('mssql');
const http = require('http');


const dbConfig = {
    user: 'sa',
    password: 'password',
    server: 'localhost', 
    database: 'testDB' 
};



connect_and_Query = function (res, query) {

    // Connect to Database
    sql.connect(dbConfig, function(err) { 
        if(err) {
            console.log("Error while connectiong to the database :- " + err);
            res.send(err);
        }
        else { 
            console.log("successfully connected to the database");
            // Create Request Object
            const request = new sql.Request();

            // Query the database and get the recordset
            request.query(query, function (err, recordset) {
                if (err) {
                    console.log("Error while querying the database :- " + err);
                    res.send(err);
                   }
                else {
                    res.send(recordset);                    
                }
            });   
        };       
    })

};

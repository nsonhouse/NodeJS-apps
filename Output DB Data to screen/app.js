const express = require('express');
const dbconfig = require("./dbConnection/dbConnection")

const app = express();
const PORT = 3000;

app.get("/", function(req, res) {
    let query = "SELECT * FROM Status";
    connect_and_Query(res, query);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

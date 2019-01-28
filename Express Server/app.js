// This is a simple express server


// Import the Express module
const express = require('express');

/******************************************************************************************** */
// Create a new Express application instance. express is a function that creates a new object 
// based off a class. The line var app = express(); first invokes the function in express, 
// then assigns the result of calling that function to the variable "app".
/******************************************************************************************** */
const app = express();
const PORT = 3000;

//*********************************************************************************** */
//ARROW FUNCTION ECMASCRIPT 6

// app.get  is a part of the Express application routing and is intended for
// matching and handling specific routes  when requested with the GET HTTP verb.
// The first argument is a path. The second argument is the request handler.

// Sending a response can be achieved by calling the res.send() method. 
// The signature of this method looks like this: res.send([body]) where the 
// body can be any of the following: Buffer, String, an Object and an Array.
// res.send() and res.json()) both allow us to send some data and end the response.
/************************************************************************************ */
app.get("/", (req, res) => res.send("Hello World Express!!!"));

// app.get("/", function(req, res) {
//     res.send("Hello World!!!");
// });


//ARROW FUNCTION ECMASCRIPT 6
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// app.listen(PORT, function() {
//     console.log(`Example app listening on port ${PORT}!`);
// });

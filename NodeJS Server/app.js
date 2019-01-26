//This is a simple node.js server.

const http = require('http');

const hostname = '127.0.0.1';
const PORT = 3000;

//The HTTP server is created using the http mdule's createServer() method.
//createServer() is a function that takes a callback with two requests.
//req is an object that contains information regarding the clients request, 
//such as the URL, HTTP headers, and more to a server.
//res is the object used to return data back to the client.
const server = http.createServer(function(req, res) {

    //The callback function begins by calling the response.writeHead() method.
    //This method sends an HTTP status code and a collection of response headers 
    //back to the client. The status code is used to indicate the result of the request.
    //For example, everyone has encountered a 404 error before, indicating that a page could 
    //not be found. The example server returns the code 200, which indicates success.

    //The server returns a number of HTTP headers which define the parameters of the response.
    //If you do not specify headers, Node.js will implicitly send them for you. 
    //The example server specifies only the Content-Type header. This particular header defines
    //the MIME type of the response. In the case of an HTML response, the MIME type is “text/html”.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    //After the HTML page has been written the response.end() method is called. By calling this method,
    //we are telling the server that the response headers and body have been sent, and that the request 
    //has been fulfilled. The example server calls end() with the parameter 'Hello World!!!'
    res.end('Hello World!!!\n');
    console.log("The request made is: " + req.url);
});
  
//The call to listen() causes the server to bind to a port and listen for incoming connections.
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

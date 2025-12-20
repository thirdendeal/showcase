// HTTP
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/http/anatomy-of-an-http-transaction

import http from "node:http";

// ---------------------------------------------------------------------
// Create the Server
// ---------------------------------------------------------------------

// The Server object returned by createServer is an EventEmitter

const server = http.createServer((request, response) => {
  // Request handler callback
  //
  // Called once for every HTTP request that's made against that server
});

// ---------------------------------------------------------------------
// Method, URL and Headers
// ---------------------------------------------------------------------

server.on("request", (request, response) => {
  // Creating a server and adding the listener later has the same effect

  const { method, url, headers } = request; // instance of IncomingMessage

  console.log("HTTP server"); // to differentiate both servers

  console.log(method); // HTTP method/verb
  console.log(url); // URL without the server, protocol or port
  console.log(headers["user-agent"]); // headers are represented in lower-case only

  // -------------------------------------------------------------------
  // Request Body
  // -------------------------------------------------------------------

  // When receiving a POST or PUT request

  let requestBody = [];

  //  The request object implements the ReadableStream interface, so it's also an EventEmitter

  request
    .on("data", (chunk) => {
      requestBody.push(chunk); // chunk: Buffer
    })
    .on("end", () => {
      requestBody = Buffer.concat(requestBody).toString(); // for string data

      if (requestBody) {
        console.log("Received: " + requestBody);
      }
    });

  // -------------------------------------------------------------------
  // A Quick Thing About Errors
  // -------------------------------------------------------------------

  request.on("error", (err) => {
    // If you don't have a listener for this event, the error will be thrown

    console.error(err.stack);
  });

  // -------------------------------------------------------------------
  // HTTP Status Code
  // -------------------------------------------------------------------

  // The response object is an instance of ServerResponse, which is a WritableStream

  response.statusCode = 200; // default value

  // -------------------------------------------------------------------
  // Setting Response Headers
  // -------------------------------------------------------------------

  response.setHeader("Content-Type", "text/html"); // name case is insensitive
  response.setHeader("X-Powered-By", "bacon");

  // To explicity write status code and headers to the stream, use writeHead

  // -------------------------------------------------------------------
  // Sending Response Body
  // -------------------------------------------------------------------

  // It's important to set the status and headers before you start writing chunks of data to the body
  // Once you've set the headers (either implicitly or explicitly)
  // Writing a response body out to the client is just a matter of using the usual stream methods

  response.write("<html>");
  response.write("<body>");
  response.write("<h1>Hello, World!</h1>");
  response.write("</body>");
  response.write("</html>");

  response.end();

  // Which could be simplified as:
  //
  // response.end('<html><body><h1>Hello, World!</h1></body></html>');

  // -------------------------------------------------------------------
  // Another Quick Thing About Errors
  // -------------------------------------------------------------------

  // The response stream can also emit 'error' events

  response.on("error", (err) => {
    console.error(err.stack);
  });
});

// To serve requests the listen method needs to be called

server.listen(8080);

// ---------------------------------------------------------------------
// Echo Server Example
// ---------------------------------------------------------------------

http
  .createServer((request, response) => {
    request.on("error", (err) => {
      console.error(err);

      response.statusCode = 400;
      response.end();
    });

    response.on("error", (err) => {
      console.error(err);
    });

    console.log("Echo HTTP server"); // to differentiate both servers

    console.log(request.method);
    console.log(request.url);
    console.log(request.headers["user-agent"]);

    const post = request.method === "POST";
    const echo = request.url === "/echo" || request.url === "/echo/";

    if (post && echo) {
      request.pipe(response); // pipe data from a ReadableStream to a WritableStream
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8081);

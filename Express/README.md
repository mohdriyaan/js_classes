<h1>Express Basics</h1>

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is built on top of Node.js and provides a simple and intuitive API for handling HTTP requests, routing, middleware, and much more.

<h2>Installation</h2>

To install Express, you need to have Node.js and NPM installed on your system. If you don't have Node.js and NPM installed, you can download them from the official website.

Once NPM is installed , download package.json file in your repo or file by running the following command in your terminal:

```
npm init -y
```


Once you have Node.js , you can install Express by running the following command in your terminal:

```
npm install express
```
<h2>Getting Started</h2>

To Start With Express,You Need to create a file app.js. And Then go to package.json file and change the following keys :-
```
{
  "name": "express",
  "version": "1.0.0",
  "description": "Welcome to Express",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "start": "node app.js"
  },
  "author": "Mohammed Riyaan"
}
```
Once You are Done With The Setup , you can start building your web application or API. Express provides a simple API for creating HTTP servers and defining routes. Here's an example:
```
import express from "express"

const PORT = 5000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}')
})
```
In this example, we create a new instance of the Express application, define a route that responds to HTTP GET requests to the root path ("/"), and start the server listening on port 5000.

<h2>Features</h2>

Express provides a wide range of features, including:

1.Routing: Express makes it easy to define routes for handling incoming HTTP requests.

2.Middleware: Express provides a powerful middleware system for handling request and response objects.

3.Templating: Express supports a variety of templating engines, making it easy to generate HTML and other content dynamically.

4.Error handling: Express provides a built-in error handling middleware, making it easy to handle errors that occur during request processing.

5.Static file serving: Express makes it easy to serve static files, such as images, CSS, and JavaScript files.

6.Session handling: Express provides support for handling user sessions and cookies.

7.JSON Web Tokens: Express provides a middleware for handling JSON Web Tokens (JWT) for authentication and authorization.

8.WebSocket support: Express supports WebSockets for real-time communication between clients and servers.

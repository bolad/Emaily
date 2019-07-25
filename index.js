//get access to the expres library
const express = require("express");

//create the express application
const app = express();

//create a route handler associated with a given route
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});


//Heroku dynamic port binding
//look at the underlying environment and see if they have declared a port for us to use(heroku)
//else use port 5000
const PORT = process.env.PORT || 5000;

//select a port number to listen to the request
app.listen(PORT);

//get access to the expres library
const express = require("express");

//import the passport.js file from services
require('./services/passport');

//create the express application
const app = express();

//take the app object and attach the auth routes to it
require('./routes/authRoutes')(app);

//Heroku dynamic port binding
//look at the underlying environment and see if they have declared a port for us to use(heroku)
//else use port 5000
const PORT = process.env.PORT || 5000;

//select a port number to listen to the request
app.listen(PORT);

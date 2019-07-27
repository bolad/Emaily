//get access to the expres library
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

//create the express application
const app = express();

passport.use(new GoogleStrategy());

//Heroku dynamic port binding
//look at the underlying environment and see if they have declared a port for us to use(heroku)
//else use port 5000
const PORT = process.env.PORT || 5000;

//select a port number to listen to the request
app.listen(PORT);

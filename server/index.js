//get access to the expres library
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/user')

//import the passport.js file from services
require('./services/passport');

const app = express();

app.use(
  cookieSession({
    //convert 30days to milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

//tell pasport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

//take the app object and attach the auth routes to it
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const PORT = process.env.PORT || 5000;

app.listen(PORT);

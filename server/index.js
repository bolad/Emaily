//get access to the expres library
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

require('./models/user')

//import the passport.js file from services
require('./services/passport');

//take the app object and attach the auth routes to it
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

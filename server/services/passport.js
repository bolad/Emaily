const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

//generate identifying piece of info(cookie) for the user
//turn user model instance into an id
passport.serializeUser((user, done) => {
  done(null, user.id)
  //NB: user.id !== profile.id
});

//take the identifying piece of user info(id) and
//turn id into user model instance 
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
        .then( existingUser => {
          if (existingUser) {
            done(null, existingUser);
          }else{
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user))
          }
        })
     
    }
  )
);

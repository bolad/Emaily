//require the original npm passport module
const passport = require('passport');

module.exports = app => {

  //initiate users oauth flow with the string "google" which internally
  //identifies with the GoogleStrategy. The second argument is an option object
  //which uses scope to find the user's profile and email
  app.get(
    '/auth/google',
    passport.authenticate('google', { //internally 'google' refers to the GoogleStrategy of passport
      scope: ['profile', 'email'] //specify what access we want to have from the user's account
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user) //should return null or undefined
  })

};

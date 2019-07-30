//import npm passport module

const passport = require('passport');

//create new arrow function and export it from this file
module.exports = (app) => {

  //initiate users oauth flow with the string "google" which internally
  //identifies with the GoogleStrategy. The second argument is an option object
  //which uses scope to find the user's profile and email
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

};

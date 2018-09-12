const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys.js");
const User = require("../models/usermodel.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(
    user => {
      done(null, user);
    },
    err => {
      if (err) console.log(err);
    }
  );
});

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:3000/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in ourdb
      User.findOne({
        googleId: profile.id
      })
        .then(currentUser => {
          if (currentUser) {
            // already have the use
            console.log("user is: ", currentUser);
            done(null, currentUser);
          } else {
            // if not, create user in ourdb
            new User({
              username: profile.displayName,
              googleId: profile.id
            })
              .save()
              .then(
                newUser => {
                  console.log("newUser created: ", newUser);
                  done(null, newUser);
                },
                err => {
                  if (err) console.log(err);
                }
              );
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  )
);

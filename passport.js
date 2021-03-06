const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;
var db = require('./db.js')

//Passport middleware extensions for JWT

passport.use('signup', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
    try {
      let userquery1 = "SELECT username FROM `users` WHERE username = '" + email + "' ";
      db.query(userquery1,function(err, result){
        if(err){
          return done(err)
        }
        if(result.length!=0){
          return done("user already exists")
        }
        else{
          let hashfun= bcrypt.hash(password, 10);
          hashfun.then(function(hash){
            //Save the information provided by the user to the the database
            let userquery2 =  "INSERT INTO `users` (username, password) VALUES (?, ?)";
            db.query(userquery2, [email,hash], function(err, result){
              if (err){
                return done(err)
              }
              else{
                return done(null,result)
              }
            })
          })
        }

      });
      //Send the user information to the next middleware
    } catch (error) {
      done(error);
    }
}));

//Create a passport middleware to handle User login
passport.use('login', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) =>{
  try{
    console.log("attempting login")
    console.log(email)
    //Find the user associated with the email provided by the user
    let userquery = "SELECT * FROM `users` WHERE username = '" + email + "' "
    console.log(userquery)
    db.query(userquery,function(err,result){

      if(err || !result.length){
        return done(null, false, { message : 'User not found'});
      }
      console.log(result[0].password);
      console.log("found user");
      bcrypt.compare(password, result[0].password,function(err,compare){
        if(err || !compare){
          return done(null,false,{message:'Wrong Password'});
	}

      var user = {
        "email": result[0].username,
        "_id" : result[0].id
      }
      return done(null, user, { message : 'Logged in Successfully'});

      });

    })
  }catch(error){
    done(error)
  }

}));
//Extracts JWT cookie
var cookieExtractor = function(req) {
  var token = null;
  console.log(req.cookies);
  if (req && req.headers && req.headers.cookie) token = req.cookies['buyaboxjwt'];
  return token;
};
//This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
  //secret we used to sign our JWT
  secretOrKey : 'top_secret',
  //we expect the user to send the token as a query paramater with the name 'secret_token'
  jwtFromRequest : cookieExtractor
}, async (token, done) => {
  try {
    console.log(token.user)
    //Pass the user details to the next middleware
    return done(null, token.user);
  } catch (error) {
	console.log(error);
    done(error);
  }
}));

var middleware = function(req, res, next) {
  passport.authenticate('jwt', function(err, user, info) {
    req.authenticated = !! user;
    next();
  })(req, res, next);
};

exports.middleware = middleware;

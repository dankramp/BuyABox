var express = require('express');
var mysql = require('mysql')
var app = express();
var path = require('path');
var cookies = require("cookie-parser");

const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const db = require('./db.js')

var boardRouter = express.Router();

//Test mode for debugging
var TEST_MODE = true;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'));
app.use(express.static(__dirname + '/static'));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookies());

//Route to the given board id
boardRouter.route('/:id')
    .get(function(req, res) {
	res.sendFile(path.join(__dirname + '/www/board.html'));
    });

app.use('/board', boardRouter);


var pass = require('./passport.js');

app.listen('3000');
console.log('working on 3000');

//Signup post request using passport
app.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
 res.redirect('/login');
});

//Login post request using passport
app.post('/login', async (req, res, next) =>
{
  passport.authenticate('login', async (err, user, info) =>
  {
    try {
      if(err || !user){
        console.log(info)
        const error = new Error('An Error occured')
        return res.redirect('/');
      }
      req.login(user, { session : false }, async (error) =>
      {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id : user._id, email : user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body },'top_secret');
        //Send back the token to the user
        res.cookie('buyaboxjwt',token);
        res.redirect('/')
      });
    }
    catch (error) {
      return next(error);
    }
  })(req, res, next);
});

//Get request for specific board
app.get('/getBoard', function (req, res) {
  if(!req.query.id){
    res.status(500).send('Board ID Required')
    return
  }
  let boardId = req.query.id;
  console.log(boardId)
  let boardquery = "SELECT * FROM `boards` WHERE id = '" + boardId + "' ";
  db.query(boardquery, (err,result)=>{
    if (err){
      return res.status(404).send(err)
    }
    else{
      if (!result.length){
        res.status(404).send('Board Not Found')
      }else{
        console.log(result[0]['teams'])
        let boxquery = "SELECT * FROM `boxes` WHERE board_id = '" + boardId + "' ";
        db.query(boxquery, (err,boxes)=>{
          if (err){
            return res.status(500).send(err)
          }
          else{
            console.log(result)
            result[0]['teams'] = JSON.parse(result[0]['teams'])
            res.json({"board":result[0],
                      "boxes": boxes})
          }
        });
      }
    }
  });

});

//get Box request for specific box id
app.get('/getBox', function (req, res) {
  if(!req.query.id){
    res.status(500).send('Box ID Required')
    return
  }
  let boxId = req.query.id;
  console.log(boxId)
  let boxquery = "SELECT * FROM `boxes` WHERE id = '" + boxId + "' ";
  db.query(boxquery, (err,result)=>{
    if (err){
      return res.status(500).send(err)
    }
    else{
      res.json(result)
    }
  });


});

//Create board request, requiring a logged in user
app.post('/createBoard',passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  console.log(req.user.email)
  console.log(req.body)
  if(!req.body.description || !req.body.name){
    res.status(500).send('Invalid Parameters')
    return
  }

  let desc=req.body.description;
  let owner=req.user.email;
  let name=req.body.name;
  let teams=req.body.teams;
  let query = "INSERT INTO `boards` (description, owner, name, teams) VALUES (?, ?, ?, ?)";
  db.query(query, [desc,owner,name,teams], function(err, result){
    if (err){
      return res.status(500).send(err)
    }
    else{
      let board_id = result.insertId

      params = []
      for(let i = 1; i<37; i++){
        let value = i
        params.push([board_id, value])
      }

      let boxquery = "INSERT INTO `boxes` (board_id, value) VALUES ?";
      db.query(boxquery, [params], function(err, result){
        if (err){
          return res.status(500).send(err)
        }
        else{
          res.redirect('/board/'+board_id)

        }
      })
    }
  });

});

//Buy a box request
app.post('/buyBox',function(req,res){
  if(!req.body.id || !req.body.buyer || !req.body.message || !req.body.team){
      res.status(500).send('Invalid Parameters')
      console.log("invalid params")
    return
  }

  let boxId=req.body.id;
  let buyer=req.body.buyer;
  let message=req.body.message;
  let team=req.body.team;

  let query = "UPDATE boxes SET buyer=IF(!bought,?,buyer), message=IF(!bought,?,message), team=IF(!bought,?,team), bought=IF(bought=0,1,1) WHERE id=?"

    db.query(query, [buyer,message,team,boxId], function(err, result){
	if (TEST_MODE) {
	    res.json({'status':'success'})
	}
      else if (err){
	  console.log("db err")
      return res.status(500).send(err)
    }
    else{
      res.json({'status':'success'})
    }
  });
});

//Login page
app.get('/login', pass.middleware, function (req, res) {
  //Redirect if logged in
  if (req.authenticated) {
    res.redirect('/');
  }
  else{
    res.sendFile(path.join(__dirname + '/www/login.html'));
  }
});

//Signup page
app.get('/signup', pass.middleware, function (req, res) {
  //Redirect if logged in
  if (req.authenticated) {
    res.redirect('/');
  }
  else{
    res.sendFile(path.join(__dirname + '/www/signup.html'));
  }
});

app.get('/404', function (req, res) {
    res.sendFile(path.join(__dirname + '/www/404.html'));
});

//Create board page
app.get('/create', pass.middleware, function (req, res) {
    //Redirect if not logged in

    if(req.authenticated){
      res.sendFile(path.join(__dirname + '/www/create_board.html'));
    }
    else{
      res.redirect('/login');
    }
});

app.get('/test', function (req, res) {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',["board_generator.py"]);
    pythonProcess.stdout.on('data', (data) => {
	res.json(JSON.parse(data.toString()));
    });
});

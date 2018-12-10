var express = require('express');
var mysql = require('mysql')
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'capstone2018',
    database: 'buyabox'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.use(express.static(__dirname + '/www'));

app.listen('3000');
console.log('working on 3000');

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
      return res.status(500).send(err)
    }
    else{
      if (!result.length){
        res.status(500).send('Board Not Found')
      }else{
        let boxquery = "SELECT * FROM `boxes` WHERE board_id = '" + boardId + "' ";
        db.query(boxquery, (err,boxes)=>{
          if (err){
            return res.status(500).send(err)
          }
          else{
            console.log(result)
            result[0]['boxes'] = boxes
            res.send(result)
          }
        });
      }
    }
  });

});

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
      res.send(result)
    }
  });


});

app.post('/createBoard',function(req,res){
  if(!req.body.owner || !req.body.description || !req.body.name){
    res.status(500).send('Invalid Parameters')
    return
  }

  let desc=req.body.description;
  let owner=req.body.owner;
  let name=req.body.name;
  let teams=JSON.stringify(req.body.teams);
  let query = "INSERT INTO `boards` (description, owner, name, teams) VALUES (?, ?, ?, ?)";
  db.query(query, [desc,owner,name,teams], function(err, result){
    if (err){
      return res.status(500).send(err)
    }
    else{
      let board_id = result.insertId

      params = []
      for(let i = 1; i<26; i++){
        let value = i
        params.push([board_id, value])
      }
      console.log(params)

      let boxquery = "INSERT INTO `boxes` (board_id, value) VALUES ?";
      db.query(boxquery, [params], function(err, result){
        if (err){
          return res.status(500).send(err)
        }
        else{
          res.send(result)
        }
      })
    }
  });

});

app.post('/buyBox',function(req,res){
  if(!req.body.id || !req.body.buyer || !req.body.message || !req.body.team){
    res.status(500).send('Invalid Parameters')
    return
  }

  let boxId=req.body.id;
  let buyer=req.body.buyer;
  let message=req.body.message;
  let team=req.body.team;

  let query = "UPDATE boxes SET buyer=IF(!bought,?,buyer), message=IF(!bought,?,message), team=IF(!bought,?,team), bought=IF(bought=0,1,1) WHERE id=?"

  db.query(query, [buyer,message,team,boxId], function(err, result){
    if (err){
      return res.status(500).send(err)
    }
    else{
      res.send(result)
    }
  });
});

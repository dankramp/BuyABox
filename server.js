var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.listen('3000');
console.log('working on 3000');

app.get('/getBoard', function (req, res) {
   res.json({
   	"name": "YLC Fundraiser",
   	"description": "We are raising money to help fund activities like Free Pancake nights and other weird stuff!!",
   	"owner": "dankramp",
   	"teams": [
   			"boys",
   			"girls"
   			],
   	"boxes": {
    	"value": 1,
    	"bought": false,
    	"buyer": "Grandma Carol",
    	"message": "Love you sweetheart! Go get em",
    	"team": "girls"
    }

   });
});

app.get('/getBox', function (req, res) {
  res.json({
  	"value": 1,
  	"bought": false,
  	"buyer": "Grandma Carol",
  	"message": "Love you sweetheart! Go get em",
  	"team": "girls"
  })
});

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/www'));
app.use(express.static(__dirname + '/static'));

app.listen('3000');
console.log('working on 3000');

app.get('/getBoard', function (req, res) {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',["board_generator.py"]);
    pythonProcess.stdout.on('data', (data) => {
	res.json(JSON.parse(data.toString()));
    });    
});

app.get('/test', function(req, res) {
    // Generates random board data and displays it generatively
    res.sendFile(path.join(__dirname + '/pages/board.html'));
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

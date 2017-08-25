var express = require('express'),
    multer = require('multer');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
;

//require('./controller/swat_robot_framework.js').setApp(app);

var server = require('http').createServer(app);
var ios = require('socket.io')(server);

var request = require('request');





var serverSocket = ios.listen(server);

console.log("Server Welcomes YOU")

app.use(express.static(__dirname ));

var port = process.env.PORT || 5005

app.get('/', function (req, res, next) {
    
    res.render('index');
});
var mainTaskList = []


app.get('/server', function(req, res) {
    res.end();
    
})
  

function findIndexOf(array,task,status)
{
    for (var i = 0; i < array.length; i++) {

        if (array[i]["task"] == task && array[i]["status"] == status) {
            return i;
        }


    }
    return -1;
}

app.put('/server',function(req,res){
    
    console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    var taskObj = req.body;
    var task = taskObj.task;
    var status = taskObj.status
    var ind = findIndexOf(mainTaskList,task,status);
    if(ind == -1)
    {
            mainTaskList.push(taskObj);
    }
    console.log(mainTaskList);
    ios.socket.emit("addTask",mainTaskList);
    
  

    
})

server.listen(port);
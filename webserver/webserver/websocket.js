var http = require("http");
var socketio = require("socket.io");
var fs = require("fs");

var handler = function(req, res){
    fs.readFile(__dirname+'/index.html',function(err, data){
        if(err){
            res.writeHead(200);
            return res.end('Error in handling');
        }else{
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.configure(function(){
    io.set('transports', ['xhr-polling']);
});

io.sockets.on('connection',function(socket){
    setInterval(function(){
        var timestamp = Date.now();
        console.log('Emmitted :' + timestamp);
        socket.emit('timer', timestamp);
    },2000);
    socket.on('submit',function(data){
        console.log('submitted :'+data);
    });
});

app.listen(8080);
console.log('Server Running!!!!');
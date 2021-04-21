var express=require('express')
var app=express()
var http = require('http').createServer(app);
var io=require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

io.on('connection',(socket)=>{
    console.log("new user connected");

    socket.on('disconnect',()=>{
        console.log("Disconnected");
    })
    socket.on("message",(msg)=>{
        console.log(msg);
        io.emit('in-msg',msg)
    })
})



http.listen('9789',()=>{
    console.log("server started");
})


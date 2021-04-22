var express=require('express')
var app=express()
var http = require('http').createServer(app);
var io=require('socket.io')(http)
var port = process.env.PORT || 7000

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

io.on('connection',(socket)=>{

    socket.on('disconnect',()=>{
    })
    socket.on("message",(msg)=>{
        io.emit('in-msg',msg)
    })
})



http.listen(port,()=>{
    console.log("server connencted")
})


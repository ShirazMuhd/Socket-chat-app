var express=require('express')
var app=express()
var http = require('http').createServer(app);
var io=require('socket.io')(http)
var port = process.env.PORT || 7000
var path=require('path')


app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
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

//chat app with node js 
//for style.css go to /public/style.css
//author:shiraz
//version : 1.0.0  


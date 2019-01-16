const path=require('path');
const express=require('express');
const http=require('http');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;

// app.get('/',(req,res)=>
// {
//    res.send('hello world');
// });
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
console.log('new user connected');
socket.on('disconnect',()=>{
console.log('user wa sdisconnected');
});
});
server.listen(port,()=>
{
    console.log(`Listening on port ${port}`);
})

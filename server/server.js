const path=require('path');
const express=require('express');
var app=express();
const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath));
app.get('/',(req,res)=>
{
   res.send('hello world');
});
app.listen(3000,()=>
{
    console.log('Listening on port 3000');
})

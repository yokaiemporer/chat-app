const path=require('path');
const express=require('express');
var app=express();
const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3000;
app.use(express.static(publicPath));
app.get('/',(req,res)=>
{
   res.send('hello world');
});
app.listen(port,()=>
{
    console.log(`Listening on port ${port}`);
})

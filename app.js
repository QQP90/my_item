var express = require("express")
var app = express()
app.listen(8800,()=>{
    console.log(13)
})
app.get("/",(req,res)=>{
    res.end("ok")
})
const express= require('express')
const srv= express();

const todoroute= require('./routes/todos')
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.get('/hello',function(req,res){
    res.send("hello world")
})

srv.use('/todos',todoroute)
srv.use('/public',express.static( __dirname+ "/public"))
srv.listen(4567)
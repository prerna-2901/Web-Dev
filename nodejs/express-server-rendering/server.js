const express= require('express')
const srv= express()
const todoroute=require('./routes/todos')


srv.set('view engine','hbs')
srv.set('views', __dirname + "/views")
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))


srv.use('/todos',todoroute)

srv.listen(3456)
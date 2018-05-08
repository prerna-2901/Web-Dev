const express =require('express')
const srv = express()

const teacherroute=require('./routes/teachers')
const studentroute=require('./routes/students')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.use('/students',studentroute)

srv.use('/teachers',teacherroute)

srv.listen(2222)
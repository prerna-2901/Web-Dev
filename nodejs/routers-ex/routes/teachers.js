/*const express = require ('express')
const Router = express.Router
const route=Router()*/

const route=require('express').Router()
let teachers =[
{name:"Prerna", subject:"web dev"},
{name:"prateek",subject:"bleh"}

]
route.get('/',(req,res)=> res.send(teachers))
route.get('/add',(req,res)=>{
    teachers.push({
        name:req.query.name,
        subject:req.query.subject
    }
    )
   res.send(teachers)
})
route.get('/:id',(req,res)=>res.send(teachers[req.params.id]))


module.exports=route
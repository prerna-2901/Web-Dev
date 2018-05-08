 const route = require('express').Router()
 // This route is on the "/api/" path
 const db = require('../db')
 route.get('/persons/',(req,res)=>{
//send all the persons as a n array here
db.getallpersons()
.then((persons)=>res.send(persons))
.catch((err)=> res.send({error: err})) 

})

 route.post('/persons',(req,res)=>{
// add the new person(details in body)
db.addnewperson(req.body.name,req.body.age,req.body.city)
.then(()=>res.redirect('/api/persons/'))
 .catch((err)=>res.send({error:err}))
 
})
 
 exports=module.exports={
     route
 }
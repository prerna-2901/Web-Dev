const route=require('express').Router()
let students =[
    {name:"rahul", college:"dtu", year:"1"}
    ,{name:"saksham", college:"nsit", year:"1"}
   , {name:"neha", college:"ipu", year:"1"}
    ,{name:"prerna", college:"dtu", year:"1"}
    
]
route.get('/',(req,res)=>res.send(students))
route.get('/add',(req,res)=>{
    students.push({
        name:req.query.name,
        college:req.query.college,
        year:req.query.year
    })
    res.send(students)
})

/*route.get('/:id',(req,res)=>
{if(isNaN(parseInt(req.query.id)) next()


    res.send(students[req.params.id])
})*/
route.post('/',(req,res)=>{
    students.push({
        name: req.body.name ,
        college: req.body.college,
        year: req.body.year
    })
    res.send(students)
})

module.exports=route
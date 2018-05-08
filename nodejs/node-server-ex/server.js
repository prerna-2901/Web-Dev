const express= require('express')
const server= express()

server.get('/', function(req,res,next){
    console.log("yo")
    res.send("Hello World")
})
/*
server.get('/greet/:tod/:name',function(req,res,next){
    let tod= "morning"
    switch(req.params.tod){
        case 'evening': tod="Evening";break;
        case 'morning': tod="Morning";break;

    }
    let greeting= "Good " + tod + ", " +req.params.name
    res.send(greeting)
})*/

server.get('/greet/:tod',function(req,res,next){
    let tod= "morning"
    switch(req.params.tod){
        case 'evening': tod="Evening";break;
        case 'morning': tod="Morning";break;

    }
    let greeting= "Good " + tod + ", " +req.query.name
    res.send(greeting)
})

server.get('/html', function(req,res,next){
    res.send(`
    <html>
    <body>
    <h1>this is a html page</h1>
    <i>this looks nice</i>
    </body>
    </html>`)
})
server.listen(2121)

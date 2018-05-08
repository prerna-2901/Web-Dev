function asynchtask(callback)
{console.log("beginning of task")
    setTimeout(function() {
        console.log("end of task")
        callback();
    }, 3000);
}
let taskpromise= function(){
 return   new Promise(function(resolve,reject){
asynchtask(resolve)
})
}

//taskpromise();
taskpromise().then(function(){
    console.log("after task complete")
})
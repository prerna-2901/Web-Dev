/*function task(done){
console.log("doing some task");
done();
}

task (function(){
    console.log("task was done")
})
console.log("we did a task")*/
function task(done){
    console.log("doing task");
    setTimeout( done, 1000);
}

task(function (){
console.log("task was done")
})
console.log("did a task")
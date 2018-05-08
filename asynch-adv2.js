let a=false;
setTimeout(function() {
    a=true;
}, 1000);
while(!a){

}console.log(1);

//function inside settimeout never gets chance to execute as even after one second while loop is running and interpretter is not free to run the function
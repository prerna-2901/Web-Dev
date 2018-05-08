let a =false;

while(!a){
    console.log(1);
}

//never reaches here, infinite while loop
setTimeout(function() {
    a=true;
}, 1000);

//settimeout will run fun only when interpreter free,never gets free as while loop not exited


function createcounter(initVal, delta)
{    let val = initVal;
    function counter()
    {
    val=val+delta;
return val;    
}
    return counter;
}
let anothercounter=createcounter(18,4);
let fivecount = createcounter(5,5);
console.log(fivecount());

console.log(fivecount());

console.log(fivecount());

console.log(fivecount());

console.log()
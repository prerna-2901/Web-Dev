/*function greeter()
{
    console.log("Hello !")
}
let helloSayer= greeter;
console.log(helloSayer==greeter);
//greeter();
helloSayer();*/

function getFirstName(fullname)
{
    return fullname.split("")[0]
}
function greeter(findName,fullname)
{
let firstname =findName(fullname)
console.log("hello" + firstname)
}

greeter(getFirstName,"Prerna Srivatsav")
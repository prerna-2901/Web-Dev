function createGreeter(name)
{
let firstName=name.split(" ")[0]
function greeter()
{
    console.log("Hello " + firstName);
}
return greeter;
}
let johngreeter=createGreeter("John Doe");
let harrygreeter = createGreeter("Harry potter");

johngreeter();
harrygreeter();

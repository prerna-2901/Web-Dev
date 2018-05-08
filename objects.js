let obj={
anumber:123,
astring:"asds",
aFunction: function(){
    return(this.anumber+this.astring)
}
}
console.log(obj.aFunction())
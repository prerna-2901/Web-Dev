 function person(name,age)
 {
     this.firstname=name.split(" ")[0];
     this.lastname=name.split(" ")[1];
     //let mAge=age;//not available in p.mage but available in function scope
     
     //now age is like a private variable
     this.isadult=function()
     {
         return age>18;
         //return mAge>18;
    }
 }
 let p = new person("Prerna Srivastav",20);
 let h= new person("Harry Potter",12);
 console.log(p);
 console.log(p.isadult());
 console.log(h.isadult());

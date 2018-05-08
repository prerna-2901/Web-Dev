let menu=[
    "Onion Rings",
    "Paneer Tikka",
    "Garlic Naan",
    "Chicken Tandoori",
   "Egg Curry"
]
function isveg(food)
{
if(food.toLowerCase().indexOf("chicken")!=-1) return false;
if(food.toLowerCase().indexOf("egg")!=-1) return false
return true;
}


function ogfree(food)
{
if(food.toLowerCase().indexOf("onion")!=-1) return false;
if(food.toLowerCase().indexOf("garlic")!=-1) return false
return true;
}

let vegmenu=menu.filter(isveg);
let jainmenu = menu.filter(isveg).filter(ogfree);
console.log("Veg Menu : " +vegmenu);
console.log("Jain Menu : " + jainmenu)
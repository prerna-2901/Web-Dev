let arr =[6,3,9,1,7,2,14,26,35]
//console.log(arr.sort());//js by default does a lexicographical sort

function compare(a,b)
{//return a-b;
   // return b-a;
return (a%10)-(b%10)//sort by units digit
}
//let sortedarr = arr.sort(compare)
//console.log(sortedarr);

/*arr.sort(function(a,b)
{console.log(arr)
    console.log(a+ " "+b)
return a-b;

})*/
arr.sort(compare)
console.log(arr);

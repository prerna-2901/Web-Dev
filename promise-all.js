function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject(new Error("url does not start with http "))
        }else{ console.log("start download" + url)
            setTimeout(function() {
                //fake 3 sec download task
                let filename =url.split("/").pop
                resolve(filename)
            }, 3000);
        }
    })
}
/*
function resize(filename){
    return new Promise(function(resolve,reject)
{
    if(!filename.endsWith(".png")){
        reject (new Error("file is not png"))
    } else{console.log("start resize: "+ filename)
        setTimeout(function() {
           //fake 3 sec resize
           let resizedfile=filename.split(".")[0]+"-resized" +".png"
           resolve(resizedfile) 
        },3000 )
    }
})
}
*/
function upload(resizedfilename)
{
    return new Promise(function (resolve,reject){
        settimeout(function(){
            console.log("start upload" + resizedfilename)
            //fake 3 sec upload task
       let uploadedurl="http://ingur.com/" + resizedfilename;
       resolve(uploadedurl)
        },6000)
    })
}

Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png'),
    
]).then(upload)
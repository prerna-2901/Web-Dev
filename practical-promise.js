function download(url){
    return new Promise(function(resolve,reject){
        if(!url.startsWith("http")){
            reject(new Error("url does not start with http "))
        }else{
            setTimeout(function() {
                //fake 3 sec download task
                let filename =url.split("/").pop
                resolve(filename)
            }, 3000);
        }
    })
}

function resize(filename){
    return new Promise(function(resolve,reject)
{
    if(!filename.endsWith(".png")){
        reject (new Error("file is not png"))
    } else{
        setTimeout(function() {
           //fake 3 sec resize
           let resizedfile=filename.split(".")[0]+"-resized" +".png"
           resolve(resizedfile) 
        },3000 )
    }
})
}

function upload(resizedfilename)
{
    return new Promise(function (resolve,reject){
        settimeout(function(){
            //fake 3 sec upload task
       let uploadedurl="http://ingur.com/" + resizedfilename;
       resolve(uploadedurl)
        },3000)
    })
}
download('http://cb.lk/logo.png')
.then(resize)
.then(upload)
.then(function(uploadedurl){
    console.log("file was uploaded to: "  + uploadedurl)
})
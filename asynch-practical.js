function downloadfile(url,downloaded)
{
    //we are downloading a file here
    //lets assume it take 3 mins
  //we use settimeout to generate fake delay
    console.log("Downloading file" + url)
    setTimeout(function(){
        let filepath="C:\\Downloads\\"+url.split('/').pop();
        console.log("file was downloaded to: "+filepath)
        downloaded(filepath)
    }, 3000);
}
function resizefile(filepath,resized){
    //resizing file, it takes 3 sec
    //use fake settimeout delay
    console.log("we are resizing: " + filepath)
    setTimeout(function() {
        let newpath=filepath.split("."[0]) + "-resized." + filepath.split(".")[1];
resized(newpath)
    }, 3000);
}

function uploadfile(diskpath,uploaded)
{
    //upload file, takes 3 sec
    //settimeout logic
    setTimeout(function() {
    let uploadedpath= "https://cb.lk//uploads/" + diskpath.split('\\').pop()    
console.log("we uploading to: " + uploadedpath)
uploaded(uploadedpath)
}, 3000);
}
downloadfile("http://google.com/logo.png",function(downloadedpath){
    resizefile(downloadedpath,function(resizedpath){
        uploadfile(resizedpath,function(uploadedurl){
            console.log("uploaded successfully to:" +uploadedurl)
        })
    }
    )

})

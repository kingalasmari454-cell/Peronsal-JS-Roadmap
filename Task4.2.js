let fs=require('fs');
let printFile=(data)=>{
    console.log(data);
}
let readingFile=(callBack)=>{
    fs.readFile("discordNames.txt","utf-8",(data,err)=>{
        if(err){
            console.error(err);
        }
        callBack(data);
    })
}
readingFile(printFile);
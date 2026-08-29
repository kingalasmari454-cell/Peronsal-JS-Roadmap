const fs=require('fs')
fs.readFile('newDiscordNames.txt','utf8',(err,data)=>{
    if(err){
        console.error("An error occurred:",err)
        return
    }
    else{ let splittedArray=data.split("\n");
        let filteredArray=[];
        console.log(splittedArray)
        for(const name of splittedArray){
            
        }}})
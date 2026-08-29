let fs=require('fs');
fs.readFile('discordNames.txt','utf-8',(data,err,cb)=>{
    if(err){console.log(err)}else{console.log(data)}

})
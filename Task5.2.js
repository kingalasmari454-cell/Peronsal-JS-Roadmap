let fs=require("fs");
fs.promises.readFile("discordNames.txt","utf-8").then(data=> console.log(data)).catch(err=>console.error(err));
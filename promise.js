const fs=require('fs')
const Promise=require('promise');
new Promise((resolve,reject)=>{
    //resolve('wow');
    //reject('not wow');
})
.then((value)=>{
    console.log(value)
})
.catch((value)=>{
    console.log(value);
})
new Promise((resolve,reject)=>{
    fs.readFile('discordNames.txt','utf-8',(err,data)=>{
        if(err){reject(err)}else{resolve(data)}
    })
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err)
})
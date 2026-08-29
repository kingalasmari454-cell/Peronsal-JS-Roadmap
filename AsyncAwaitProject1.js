const Promise=require('promise');
function testDelay(delay,msg){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(msg)
        },delay)
    })
} 
async function testDelayAsync(){
    try{const firstResult=await testDelay(1000,'first'); console.log(firstResult);
        const secondResult=await testDelay(5000,'second'); console.log(secondResult);
        const thirdResult=await testDelay(100,'third'); console.log(thirdResult);}
    catch(error){
        console.error("error occurred:",error)
    }
}
testDelayAsync()
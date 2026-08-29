const Promise=require('promise');
function writingHomeworks(){
    return new Promise((resolve,reject)=>{
        const doingHW=true;
        if(doingHW){resolve('you have finished your HW')}else{reject("you haven't finished your HW")}
    })
}
function doingHobbies(){
    return new Promise((resolve,reject)=>{
        const doneHobbies=true;
        if(doneHobbies){resolve('you have finished your hobbies')}else{reject("you haven't done your hobbies")}
    })
}
//writingHomeworks().then((value)=>{console.log(value); return doingHobbies()}).then((value)=>{console.log(value)})
//you can implement the same methodology with the same Synchronous way by using await/async(async= makes a function return a promise. await= makes an async function wait for a promise)
async function doTasks(){
    try{
    const resultDoingHW= await writingHomeworks();
    console.log(resultDoingHW);
    const resultDoingHobbies= await doingHobbies();
    console.log(resultDoingHobbies)

    }
    catch(err){
        console.error(err)
    }
}
doTasks();
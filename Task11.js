const readline=require('node:readline');
let list=[]
const rl=readline.createInterface({input:process.stdin,output:process.stdout})
const listFunction=()=>{rl.question("Welcome to your digitial to-do list.\n for adding a task write 'addTask'.\n for displying your list write 'list'.\n for marking a task as done write 'done'.\n for closing your to-do list write 'quit' "),(answer)=>{
    if(answer==="list"){console.log("this is your list:",list);listFunction()}
    else if(answer==="addTask"){rl.question("please add a task to your list, to add more tasks you need to call the command again"),(newTask)=>{}}//"addTask" part
}}
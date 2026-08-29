//First, write a function that returns only users whose role is "Moderator" by using (.filter())
//Second, take that filtered result and sort it by messageCount, highest first. (Look up .sort() on MDN — sorting objects by a property is slightly different from sorting plain numbers.)
let discordUsers=[{name:"Falah",role:"Moderator",joinDate:"2023-02-12",messageCount:100},{name:"Noah",role:"Moderator",joinDate:"2023-02-13",messageCount:200},{name:"Mzx",role:"Moderator",joinDate:"2023-03-13",messageCount:300},{name:"Hero",role:"Member",joinDate:"2023-04-13",messageCount:500},{name:"foah",role:"Member",joinDate:"2024-02-13",messageCount:20}];
let moderatorsList=discordUsers.filter((user)=> user.role==="Moderator")
const mostActivMods=moderatorsList.sort((a,b)=>b.messageCount-a.messageCount);
console.log(mostActivMods)
//create a program similar to the one in Task5 with two more requirements: 1-create an array that stores 5 users details as objects.
//2-create a function that return the user's name with the most sent messages(highest "messageCount" value). Take Task5 as a reference.
let messagesArray=[]
let discordUsers=[{name:"Falah",role:"Member",joinDate:"2023-02-12",messageCount:100},{name:"Noah",role:"Member",joinDate:"2023-02-13",messageCount:200},{name:"Mzx",role:"Moderator",joinDate:"2023-03-13",messageCount:300},{name:"Hero",role:"Member",joinDate:"2023-04-13",messageCount:500},{name:"foah",role:"Member",joinDate:"2024-02-13",messageCount:20}];
const mostActiveUser=(usersList)=>{for(let i=0;i<usersList.length;i++){messagesArray.push(usersList[i].messageCount)}
    let maxValue=Math.max(...messagesArray);
    let MaxValueIndex=messagesArray.indexOf(maxValue);
    return usersList[MaxValueIndex].name;
}
console.log(mostActiveUser(discordUsers));
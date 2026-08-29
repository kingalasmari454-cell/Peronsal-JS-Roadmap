const membersData={name:"Falah",role:"Moderator",joinDate:"2023-05-12",messageCount:874}
const memberDataMessage=(member) =>{return member.name+" is a "+member.role+" who joined on "+member.joinDate+" and has sent "+member.messageCount+" messages"}; console.log(memberDataMessage(membersData));

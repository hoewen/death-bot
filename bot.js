const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("death")) {
               message.channel.send("Hello. I am Death. Luckily, none of you are scheduled to die anytime soon. Do not mind me.")
               }
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("when")) {
               message.channel.send("I do not know exactly when your demise will be, but I can assure you it *will* happen. Someday...")
               }
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("oof")) {
               message.channel.send("Beware. I a coming.")
               }
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("wow")) {
               message.channel.send("Human beings... Disgusting.")
               }
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("kill me")) {
               message.channel.send("Gladly. But it is not your time, young one.")
               }
    
});client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("death")) {
               message.channel.send("Hello. I am Death. Luckily, none of you are scheduled to die anytime soon. Do not mind me.")
               }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("death")) {
               message.channel.send("Hello. I am Death. Luckily, none of you are scheduled to die anytime soon. Do not mind me.")
               }
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

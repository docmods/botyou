const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MzY1OTkxODkzODUyNDg3Njgx.DLxUVQ.cHJnKLu4-zJGfp9wxp9BYSW9We4');
        

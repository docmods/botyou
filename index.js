const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzMxNTc0NTU1Mzg0NDc5NzQ5.DHzsng.uM60xZ29xVLMW2Ni9QUWr3mihgo';

client.on('ready', () => {
  console.log('Your Bot Is Started');
});


client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('massage', message => {
  if (message.content === 'hi') {
   message.reply('hello im a bot made by: DocMods#0156 & Troll_Master#4410');
  }
});

client.login(token);
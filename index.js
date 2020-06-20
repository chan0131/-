const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '선시') {
    message.reply('의띠띠');
  }
});

client.login('NzIzOTMyNzMxNjIwNDU4NTM4.Xu408w.jtxlIphDbJO1utonnfgtInQ_1Ks');

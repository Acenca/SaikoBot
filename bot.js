
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NTA5NzI3Mjg3NDUzNjc5NjMx.DsSVww.90eQiPHhWfwx8HOXKZZicYXcx_E');

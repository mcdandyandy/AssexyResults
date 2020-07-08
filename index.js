const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	console.log(message.content);
});
client.login('NzMwNDkxNTkzOTM2NjAxMDg5.XwYqnQ.qDiuE517WkqdlWRfosQ7h3rl78w');

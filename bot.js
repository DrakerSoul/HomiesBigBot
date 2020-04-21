const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bruh');
});
client.on('message', message => {
    if (message.content === 'who is best') {
    	message.reply('everybody loves banana');
  	}
});

client.on('message', message => {
    if (message.content === 'bruh') {
    	message.reply('bruh');
  	}
});

client.on('message', message => {
    if (message.content === 'bruh bruh') {
    	message.reply('da bruh bruh');
  	}
});

client.on('message', message => {
    if (message.content === 'who real bruh') {
    	message.reply('the bruh');
  	}
});

client.on('message', message => {
    if (message.content === 'who is worst') {
    	message.reply('you');
  	}
});

// 
client.login(process.env.BOT_TOKEN);

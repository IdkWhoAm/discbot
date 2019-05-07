const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('available');
    client.user.setPresence({
        game: {
            name: 'на тебя',
            type: "WATCHING",
        }
    });
});

client.on('message', message => {
    if (message.author.bot === true) return;
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
    }
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
   }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Hello World!');
	 client.user.setStatus('available');
    client.user.setPresence({
        game: {
            name: 'на тебя',
            type: "PLAYING",
        }
    });
});
client.on('message', message => {
	if (message.author.bot === true) return;
	if (message.content === ";verify") {
		message.delete()
		if (!message.channel.name === "потверждение") return;
		message.channel.send('Потверждаю...').then(msg => {
			msg.delete(6)
		})
		let sor = message.guild.roles.find('name','непотвержден')
		let ser = message.guild.roles.find('name','Игрок')
		message.guild.member(message.author).removeRole(sor)
		message.guild.member(message.author).addRole(ser).then(() => {
			message.channel.send('Потверждены!').then(msg => {
				msg.delete(4)
			})
		} ).catch(err => {
			message.channel.send('Че-то пошло не так').then(msg => {
				msg.delete(4)
			})
		})
	}
	if (message.content.substring(0,4) == ";say") {
		if (!message.author === "NikitaPlays19") return;
		message.delete()
		message.channel.send(message.content.substring(5))
	}
});
client.login(process.env.BOT_TOKEN) 

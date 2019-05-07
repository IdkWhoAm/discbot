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
	if (message.content.substring(0,4) === ";say") {
		if (!message.author === "NikitaPlays19") return;
		message.delete()
		message.channel.send(message.content.substring(5))
	};
	if {message.content.substring(0,5) === ";kick") {
		let lao = message.guild.roles.find('name','Админ')
		if (!message.guild.member(message.author).find(lao)) return message.channel.send('Нужен ранг Админ');
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				member.kick('Кикнут Artimouse Bot').then(() => {
					message.channel.send('Он был кикнут!');
				}).catch(err => {
					message.channel.send('Он слишком главнее чем я... Не могу!')
				});
			} else {
				message.channel.send('Ты че, он даже не в этом сервере')
			};
		} else {
			message.channel.send('А де ментион? Чо вреш, кого кикнешь...')
		}
	};
});
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'логи');
	if (!channel) return;
	channel.send('Знаете кто к нам присоединился? Это ${member}!');
});
client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'логи');
	if (!channel) return;
	channel.send('Ох, от нас ушел ${member}... Надеюсь, мы тебя встретим когда нибудь...');
});
client.login(process.env.BOT_TOKEN) 
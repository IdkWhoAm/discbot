const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Hello World!');
	const chaso = member.guild.channels.find(ch => ch.name === 'логи');
	chaso.send('Я жив!');
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
	};
	if (message.content.substring(0,5) == ";kick") {
		let iqo = message.guild.roles.find("name","Админ");
		if (!message.member.roles.has(iqo)) return message.channel.send('Вам не разрешено использовать эту команду.');
		message.channel.send('Окей, ща попробую...');
		if (!message.mentions.users.first()) return message.channel.send('Эй, я не опознал этого игрока!');
		if (!message.guild.member(message.mentions.users.first())) return message.channel.send('Но он не в нашем сервере!');
		message.guild.member(message.mentions.users.first()).kick('Плохо себя ввел...').then(() => {
			message.channel.send('Ура! Я смог кикнуть ${user.tag}!')
		}).catch(err => {
			message.channel.send('Ух, чет пошло не так')
		})
	}
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

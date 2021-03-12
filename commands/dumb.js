const Discord = require('discord.js');



module.exports = {
	name: 'dumb',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
		const dumbem = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('br')
		.setDescription("")
		.setImage('https://media.discordapp.net/attachments/797683414857154560/797683488483704902/image0.jpg')
		.setTimestamp()
		.setFooter('Jimmybot' +version);
        message.channel.send(dumbem)
	},
};
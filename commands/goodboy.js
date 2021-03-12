const Discord = require('discord.js');





module.exports = {
	name: 'goodboy',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
		const goodboy = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('yes i good boy')
		.setDescription("")
		.setImage('https://media.discordapp.net/attachments/797683414857154560/797683508214366308/image0.png?width=507&height=676')
		.setTimestamp()
		.setFooter('Jimmybot' +version);
        message.channel.send(goodboy)
	},
};
const Discord = require('discord.js');



module.exports = {
	name: 'status',
	guildOnly: true,
	description: 'ok',
	execute(message ) {
		const status = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle("Jimmybot is currently set to `"+jimmybot+"`!")
		.setDescription("To turn jimmybot on type in j!gm, to turn jimmybot off type in j!gn, to see a list of all commands type in j!tricks")
		.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
		.setTimestamp()
		.setFooter('Jimmybot' +version);

        message.channel.send(status)
	},
};
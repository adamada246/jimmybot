const Discord = require('discord.js');



module.exports = {
	name: 'status true',
	description: 'ok',
	execute(message ) {
		const statustrue = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle("I'm awake!")
		.setDescription("Jimmy bot is is currently awake! To see a list of commands type in j!tricks")
		.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
		.setTimestamp()
		.setFooter('Jimmybot' +version);

		jimmybot = true;
        message.channel.send(statustrue)
	},
};
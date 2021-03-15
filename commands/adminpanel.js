const Discord = require('discord.js');




  module.exports = {
	name: 'adminpanel',
	description: 'ok',
	guildOnly: true,
	execute(message ) {
		const adminpanel = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('Jimmybot admin panel')
		.setDescription('A list of all commands for use by server admins')
		.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
		.addFields(
			{ name: 'j!quarantines (true/false)', value: "turns on or off Jimmybot's quarantine feature", inline: true },
			{ name: 'j!bounties (true/false)', value: "turns on or off Jimmybot's bounty feature", inline: true },
		)
		.setTimestamp()
		.setFooter('Jimmybot' +version);
        message.channel.send(adminpanel)
	},
};
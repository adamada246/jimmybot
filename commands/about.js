const Discord = require('discord.js');



  module.exports = {
	name: 'about',
	description: 'ok',
	execute(message ) {
		const aboutjmem = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('About Jimmybot')
		.setDescription("Build " +version+ ", "+date+", developed by @Paper Towel#2880")
		.setImage('')
		.setTimestamp()
		.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
		.setFooter('Jimmybot' +version);


        message.channel.send(aboutjmem)
	},
};
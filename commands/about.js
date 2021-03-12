const Discord = require('discord.js');



  module.exports = {
	name: 'about',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
		const aboutjmem = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('About Jimmybot')
		.setDescription("Build " +version+ ", "+date+", developed by @Paper Towel#2880")
		.setImage('')
		.setTimestamp()
		.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/819677313099759666/jimmybot5.png')
		.setFooter('Jimmybot' +version);


        message.channel.send(aboutjmem)
	},
};
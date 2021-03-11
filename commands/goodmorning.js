const Discord = require('discord.js');


module.exports = {
	name: 'goodmorning',
	description: 'wake',
	execute(message ) {
    const goodmorning = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Good morning!')
    .setDescription("Jimmy bot is up! He'll go back to sleep if you run the command j!gn")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
		jimmybot = true;
    message.channel.send(goodmorning)
	},
};
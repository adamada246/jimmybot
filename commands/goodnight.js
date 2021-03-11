const Discord = require('discord.js');


module.exports = {
	name: 'goodnight',
	description: 'sleep',
	execute(message ) {
    const goodnight = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Good night!')
    .setDescription("Jimmy bot is sleeping! He'll go wake up if you run the command j!gm")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
		jimmybot = false;
    message.channel.send(goodnight)
	},
};
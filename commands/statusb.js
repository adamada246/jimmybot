const Discord = require('discord.js');




module.exports = {
	name: 'status false',
	description: 'ok',
	execute(message ) {
    const statusfalse = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("I'm currently sleeping!")
    .setDescription("Jimmybot is sleeping! To run most command you need to wake him up with j!gm")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
		jimmybot = false;
    message.channel.send(statusfalse)
	},
};
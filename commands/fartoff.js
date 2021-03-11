const Discord = require('discord.js');


  


  module.exports = {
	name: 'fartoff',
	description: 'ok',
	execute(message ) {
    const quarsoff = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Quarantines are not needed!")
    .setDescription("Server members are not being issued quarantines")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(quarsoff)
	},
};
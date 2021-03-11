const Discord = require('discord.js');

  


  module.exports = {
	name: 'farton',
	description: 'ok',
	execute(message ) {
        
    const quarson = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Quarantines are being initiated!")
    .setDescription("Server members can be quarantined for being suspected of having fart syndrome.")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(quarson)
	},
};
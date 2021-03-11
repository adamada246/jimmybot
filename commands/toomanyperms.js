const Discord = require('discord.js');



  module.exports = {
	name: 'toomanyperms',
	description: 'ok',
	execute(message ) {
    const toomanyperms = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Hey! There's no need to do that")
    .setDescription("Users with the Administrator permission can always see both channels at all times.")
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(toomanyperms)
	},
};
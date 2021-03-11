const Discord = require('discord.js');




  module.exports = {
	name: 'turnqon',
	description: 'ok',
	execute(message ) {
    const isotrue = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Quarantines will now be issued!')
    .setDescription("Server members will now be quarantined if they are suspected of having fart syndrome")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    isolations = true;
    message.channel.send(isotrue)
	},
};
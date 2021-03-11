const Discord = require('discord.js');



  module.exports = {
	name: 'play',
	description: 'ok',
	execute(message ) {
    const playem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('ok play')
    .setDescription("")
    .setImage('https://media.discordapp.net/attachments/797683414857154560/803775452820537364/2acad3f4-723b-47db-ae4e-af1c616d4646.JPG?width=507&height=676')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
        message.channel.send(playem)
	},
};
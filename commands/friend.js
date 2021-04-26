const Discord = require('discord.js');


  module.exports = {
	name: 'friend',
  guildOnly: false,
	description: 'ok',
	execute(message ) {
    const friendem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("HERE IS BOWIE (Leef#1768)")
    .setDescription("we friends")
    .setImage('https://cdn.discordapp.com/attachments/691690787120873514/823725163668963352/image0.jpg')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
        message.channel.send(friendem)
	},
};
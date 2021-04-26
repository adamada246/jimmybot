const Discord = require('discord.js');


  module.exports = {
	name: 'bowie',
  guildOnly: false,
	description: 'ok',
	execute(message ) {
    const friendem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("BOWIE (Leef#1768)")
    .setDescription("yay")
    .setImage('https://cdn.discordapp.com/attachments/691690787120873514/823725291250647080/image0.jpg')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
        message.channel.send(friendem)
	},
};